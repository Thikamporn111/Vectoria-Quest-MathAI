(() => {
  'use strict';

  const SUPABASE_URL = 'https://wgannwzrvxdjndpfykcz.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_xC0QYedmmdXfBvyaWZ-hog_vqQnqp51';
  const STORAGE_KEY = 'vectoria-multiplayer-session-v1';
  const POSITION_INTERVAL = 3000;
  const HEARTBEAT_INTERVAL = 15000;
  const avatars = {
    knight: { icon: '🛡️', name: 'อาริน', role: 'แทงก์', color: '#49d9ff' },
    mage: { icon: '🔮', name: 'ลูน่า', role: 'เมจ', color: '#b57cff' },
    archer: { icon: '🏹', name: 'ฟินน์', role: 'อาร์เชอร์', color: '#65efb6' },
    support: { icon: '💚', name: 'มีร่า', role: 'ซัพพอร์ต', color: '#ffe066' },
    rogue: { icon: '🗡️', name: 'เรน', role: 'โร้ก', color: '#ff78ba' }
  };

  const client = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const manager = {
    client,
    session: loadSession(),
    room: null,
    players: [],
    channel: null,
    selectedAvatar: 'knight',
    lastPositionAt: 0,
    lastDbPositionAt: 0,
    lastPosition: null,
    heartbeat: 0,
    gameStarted: false,

    async init() {
      if (!client) return this.showConnectionError();
      if (this.session?.roomId && this.session?.playerId && this.session?.token) {
        const ok = await this.reconnect();
        if (ok) return;
      }
      this.showEntrance();
    },

    showConnectionError() {
      const app = document.querySelector('#app');
      app.innerHTML = '<section class="mp-shell"><div class="mp-card mp-error"><h1>ยังเชื่อมระบบห้องไม่ได้</h1><p>กรุณาตรวจอินเทอร์เน็ตแล้วโหลดหน้าเกมใหม่</p><button class="primary-btn" onclick="location.reload()">ลองอีกครั้ง</button></div></section>';
    },

    showEntrance() {
      this.cleanupChannel();
      const app = document.querySelector('#app');
      app.innerHTML = `
        <section class="mp-shell screen-in">
          <div class="mp-hero">
            <span class="mp-kicker">VECTORIA PARTY</span>
            <h1>เลือกนักผจญภัย<br><em>ก่อนเข้าดันเจี้ยน</em></h1>
            <p>ตั้งชื่อ เลือกตัวละคร แล้วสร้างห้องหรือเข้าร่วมกับเพื่อนได้สูงสุด 5 คน</p>
            <div class="mp-free-badge">✓ ระบบห้อง Free Plan · จำกัดข้อมูลเพื่อประหยัดโควตา</div>
          </div>
          <div class="mp-setup-card">
            <div class="mp-name-block"><label class="mp-label" for="mpName">ชื่อของนักผจญภัย</label>
            <input class="mp-name-input" id="mpName" maxlength="20" autocomplete="nickname" placeholder="พิมพ์ชื่อผู้เล่นที่นี่" aria-describedby="mpNameHelp">
            <small id="mpNameHelp">ชื่อนี้จะแสดงให้เพื่อนในห้องเห็น</small></div>
            <span class="mp-label mp-character-title">เลือกตัวละคร 3D ของคุณ</span>
            <div class="mp-avatar-grid" id="mpAvatarGrid">
              ${Object.entries(avatars).map(([id,a],index) => `<button type="button" class="mp-avatar ${id==='knight'?'selected':''}" data-avatar="${id}" style="--avatar:${a.color};--sprite-index:${index}" aria-label="เลือก ${a.name} ${a.role}"><span class="mp-avatar-art" aria-hidden="true"></span><span class="mp-avatar-info"><i>${a.icon}</i><b>${a.name}</b><small>${a.role}</small></span><em>เลือกตัวนี้</em></button>`).join('')}
            </div>
            <div class="mp-actions">
              <button class="mp-main-action" id="mpCreateRoom">＋ สร้างห้องใหม่</button>
              <div class="mp-join-row"><input id="mpRoomCode" maxlength="6" autocomplete="off" placeholder="รหัสห้อง 6 ตัว"><button id="mpJoinRoom">เข้าห้อง</button></div>
            </div>
            <button class="mp-solo" id="mpSolo">เล่นคนเดียวโดยไม่สร้างห้อง →</button>
            <p class="mp-message" id="mpMessage" role="alert"></p>
          </div>
        </section>`;
      document.querySelectorAll('[data-avatar]').forEach(btn => btn.onclick = () => {
        this.selectedAvatar = btn.dataset.avatar;
        document.querySelectorAll('[data-avatar]').forEach(x => x.classList.toggle('selected', x === btn));
      });
      document.querySelector('#mpCreateRoom').onclick = () => this.createRoom();
      document.querySelector('#mpJoinRoom').onclick = () => this.joinRoom();
      document.querySelector('#mpRoomCode').oninput = e => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z2-9]/g,'');
      document.querySelector('#mpSolo').onclick = () => { this.gameStarted = true; showMap(); };
      document.querySelector('#mpName').focus();
    },

    getProfile() {
      const name = document.querySelector('#mpName')?.value.trim();
      if (!name) throw new Error('กรุณาพิมพ์ชื่อผู้เล่นก่อน');
      return { name, avatar: this.selectedAvatar };
    },

    newToken() {
      const bytes = new Uint8Array(32);
      crypto.getRandomValues(bytes);
      return Array.from(bytes, b => b.toString(16).padStart(2,'0')).join('');
    },

    setBusy(busy, message='กำลังเชื่อมต่อ...') {
      document.querySelectorAll('#mpCreateRoom,#mpJoinRoom').forEach(b => b.disabled = busy);
      const el = document.querySelector('#mpMessage');
      if (el) { el.textContent = busy ? message : ''; el.className = 'mp-message'; }
    },

    showError(error) {
      const raw = String(error?.message || error || 'เกิดข้อผิดพลาด');
      const messages = {
        ROOM_NOT_FOUND:'ไม่พบห้องนี้ กรุณาตรวจรหัสอีกครั้ง', ROOM_FULL:'ห้องเต็มแล้ว (สูงสุด 5 คน)',
        GAME_ALREADY_STARTED:'ห้องนี้เริ่มเกมไปแล้ว', NAME_ALREADY_USED:'ชื่อนี้มีคนใช้ในห้องแล้ว',
        PLAYERS_NOT_READY:'สมาชิกทุกคนต้องกดพร้อมก่อน', HOST_ONLY:'เฉพาะหัวหน้าห้องเท่านั้น'
      };
      const key = Object.keys(messages).find(k => raw.includes(k));
      const el = document.querySelector('#mpMessage') || document.querySelector('#mpLobbyMessage');
      if (el) { el.textContent = key ? messages[key] : 'เชื่อมต่อไม่สำเร็จ กรุณาลองอีกครั้ง'; el.className = 'mp-message error'; }
      this.setBusy(false);
    },

    async createRoom() {
      try {
        const profile = this.getProfile(), token = this.newToken();
        this.setBusy(true, 'กำลังสร้างห้องฟรี...');
        const { data, error } = await client.rpc('create_game_room', { p_display_name:profile.name, p_avatar_id:profile.avatar, p_session_token:token });
        if (error) throw error;
        const row = data[0];
        this.session = { roomCode:row.room_code, roomId:row.room_id, playerId:row.player_id, token };
        saveSession(this.session);
        await this.enterLobby();
      } catch (e) { this.showError(e); }
    },

    async joinRoom() {
      try {
        const profile = this.getProfile(), code = document.querySelector('#mpRoomCode').value.trim(), token = this.newToken();
        if (code.length !== 6) throw new Error('กรุณากรอกรหัสห้องให้ครบ 6 ตัว');
        this.setBusy(true, 'กำลังเข้าร่วมห้อง...');
        const { data, error } = await client.rpc('join_game_room', { p_room_code:code, p_display_name:profile.name, p_avatar_id:profile.avatar, p_session_token:token });
        if (error) throw error;
        const row = data[0];
        this.session = { roomCode:row.room_code, roomId:row.room_id, playerId:row.player_id, token };
        saveSession(this.session);
        await this.enterLobby();
      } catch (e) { this.showError(e); }
    },

    async reconnect() {
      try {
        const { data } = await client.from('game_players').select('id').eq('id',this.session.playerId).eq('room_id',this.session.roomId).maybeSingle();
        if (!data) { clearSession(); this.session = null; return false; }
        await this.enterLobby(); return true;
      } catch { clearSession(); this.session = null; return false; }
    },

    async enterLobby() {
      await this.refreshRoom();
      if (!this.room) { clearSession(); return this.showEntrance(); }
      this.showLobby();
      await this.subscribe();
      this.startHeartbeat();
      if (this.room.status === 'playing') this.startGame();
    },

    async refreshRoom() {
      const [{ data:room }, { data:players }] = await Promise.all([
        client.from('game_rooms').select('*').eq('id',this.session.roomId).maybeSingle(),
        client.from('game_players').select('*').eq('room_id',this.session.roomId).order('joined_at')
      ]);
      this.room = room || null; this.players = players || [];
      if (document.querySelector('#mpLobby')) this.renderLobbyPlayers();
      this.renderPartyBar();
    },

    showLobby() {
      const app = document.querySelector('#app');
      app.innerHTML = `
        <section class="mp-lobby screen-in" id="mpLobby">
          <header class="mp-lobby-head"><div><span>ห้องผจญภัย</span><h1>รหัส <b id="mpCode">${this.session.roomCode}</b></h1><p>ส่งรหัสนี้ให้เพื่อนเพื่อเข้าห้อง</p></div><button id="mpCopyCode">คัดลอกรหัส</button></header>
          <div class="mp-lobby-body"><div><h2>สมาชิกในปาร์ตี้ <small id="mpCount"></small></h2><div class="mp-player-list" id="mpPlayerList"></div></div>
          <aside class="mp-ready-panel"><span class="mp-shield">⚔</span><h2>เตรียมพร้อมลงดันเจี้ยน</h2><p>สมาชิกทุกคนเลือกตัวละครและกด “พร้อม” จากนั้นหัวหน้าห้องจึงเริ่มเกมได้</p><button class="mp-ready-btn" id="mpReadyBtn">✓ ฉันพร้อม</button><button class="mp-start-btn" id="mpStartBtn">เริ่มเกมทั้งปาร์ตี้ →</button><button class="mp-leave-btn" id="mpLeaveBtn">ออกจากห้อง</button><p class="mp-message" id="mpLobbyMessage"></p></aside></div>
        </section>`;
      document.querySelector('#mpCopyCode').onclick = async () => { await navigator.clipboard?.writeText(this.session.roomCode); document.querySelector('#mpCopyCode').textContent='คัดลอกแล้ว ✓'; };
      document.querySelector('#mpReadyBtn').onclick = () => this.toggleReady();
      document.querySelector('#mpStartBtn').onclick = () => this.hostStart();
      document.querySelector('#mpLeaveBtn').onclick = () => this.leaveRoom();
      this.renderLobbyPlayers();
    },

    renderLobbyPlayers() {
      const list = document.querySelector('#mpPlayerList'); if (!list) return;
      document.querySelector('#mpCount').textContent = `${this.players.length} / 5 คน`;
      list.innerHTML = this.players.map(p => {
        const a=avatars[p.avatar_id]||avatars.knight, mine=p.id===this.session.playerId;
        return `<article class="mp-player ${p.is_ready?'ready':''} ${mine?'mine':''}" style="--avatar:${a.color}"><i>${a.icon}</i><div><b>${escapeHtml(p.display_name)} ${mine?'<em>(คุณ)</em>':''}</b><small>${a.role}${p.is_host?' · 👑 หัวหน้าห้อง':''}</small></div><span>${p.is_ready?'พร้อม ✓':'กำลังเตรียมตัว'}</span></article>`;
      }).join('') + Array.from({length:Math.max(0,5-this.players.length)},()=>'<article class="mp-player empty"><i>＋</i><div><b>รอเพื่อนเข้าห้อง</b><small>ว่าง</small></div></article>').join('');
      const me=this.players.find(p=>p.id===this.session.playerId), allReady=this.players.length>0&&this.players.every(p=>p.is_ready);
      const ready=document.querySelector('#mpReadyBtn'), start=document.querySelector('#mpStartBtn');
      if(ready){ready.textContent=me?.is_ready?'ยกเลิกพร้อม':'✓ ฉันพร้อม';ready.classList.toggle('active',!!me?.is_ready)}
      if(start){start.hidden=!me?.is_host;start.disabled=!allReady;start.textContent=allReady?'เริ่มเกมทั้งปาร์ตี้ →':'รอทุกคนกดพร้อม';}
    },

    async toggleReady() {
      const me=this.players.find(p=>p.id===this.session.playerId); if(!me)return;
      const {error}=await client.rpc('update_game_player',{p_player_id:this.session.playerId,p_session_token:this.session.token,p_is_ready:!me.is_ready,p_progress:null,p_pos_x:null,p_pos_y:null});
      if(error)return this.showError(error); await this.refreshRoom();
    },

    async hostStart() {
      const {error}=await client.rpc('start_game_room',{p_player_id:this.session.playerId,p_session_token:this.session.token});
      if(error)return this.showError(error); await this.refreshRoom(); if(this.room?.status==='playing')this.startGame();
    },

    async subscribe() {
      this.cleanupChannel();
      this.channel=client.channel(`vectoria:${this.session.roomId}`,{config:{broadcast:{self:false}}})
        .on('postgres_changes',{event:'*',schema:'public',table:'game_players',filter:`room_id=eq.${this.session.roomId}`},()=>this.refreshRoom())
        .on('postgres_changes',{event:'UPDATE',schema:'public',table:'game_rooms',filter:`id=eq.${this.session.roomId}`},payload=>{this.room=payload.new;if(this.room.status==='playing')this.startGame();})
        .on('broadcast',{event:'position'},({payload})=>this.receivePosition(payload))
        .subscribe();
    },

    startGame() {
      if(this.gameStarted)return;
      this.gameStarted=true; showMap(); this.renderPartyBar();
    },

    async leaveRoom() {
      try{await client.rpc('leave_game_room',{p_player_id:this.session.playerId,p_session_token:this.session.token});}catch{}
      this.cleanupChannel(); clearSession(); this.session=null; this.room=null; this.players=[]; this.gameStarted=false; this.showEntrance();
    },

    syncPosition(x,y,floor) {
      if(!this.session||!this.gameStarted||!this.channel)return;
      const now=Date.now(), last=this.lastPosition;
      if(now-this.lastPositionAt<POSITION_INTERVAL)return;
      if(last&&last.floor===floor&&Math.hypot(x-last.x,y-last.y)<12)return;
      this.lastPosition={x:Math.round(x),y:Math.round(y),floor};this.lastPositionAt=now;
      this.channel.send({type:'broadcast',event:'position',payload:{playerId:this.session.playerId,x:Math.round(x),y:Math.round(y),floor}});
      if(now-this.lastDbPositionAt>HEARTBEAT_INTERVAL){this.lastDbPositionAt=now;client.rpc('update_game_player',{p_player_id:this.session.playerId,p_session_token:this.session.token,p_is_ready:null,p_progress:floor,p_pos_x:x,p_pos_y:y}).catch(()=>{});}
    },

    async syncProgress(progress) {
      if(!this.session)return;
      await client.rpc('update_game_player',{p_player_id:this.session.playerId,p_session_token:this.session.token,p_is_ready:null,p_progress:Math.max(0,Math.min(5,progress)),p_pos_x:null,p_pos_y:null}).catch(()=>{});
    },

    receivePosition(payload) {
      if(!payload?.playerId||payload.playerId===this.session?.playerId)return;
      const p=this.players.find(x=>x.id===payload.playerId);if(p){p.pos_x=payload.x;p.pos_y=payload.y;p.progress=payload.floor;}
      this.renderFriendMarkers(payload.floor);
    },

    renderPartyBar() {
      let bar=document.querySelector('#mpPartyBar');
      if(!this.session||!this.gameStarted){bar?.remove();return;}
      if(!bar){bar=document.createElement('div');bar.id='mpPartyBar';bar.className='mp-party-bar';document.body.append(bar);}
      bar.innerHTML=`<b>ปาร์ตี้ ${this.players.length}/5</b>${this.players.map(p=>{const a=avatars[p.avatar_id]||avatars.knight;return `<span title="${escapeHtml(p.display_name)}" style="--avatar:${a.color}">${a.icon}<i>${Math.max(0,p.progress||0)}/5</i></span>`}).join('')}<button id="mpExitParty" title="ออกจากห้อง">ออก</button>`;
      document.querySelector('#mpExitParty').onclick=()=>confirm('ออกจากห้องปาร์ตี้หรือไม่?')&&this.leaveRoom();
    },

    renderFriendMarkers(floor) {
      const frame=document.querySelector('.game-frame');if(!frame)return;
      let layer=frame.querySelector('.mp-friend-layer');if(!layer){layer=document.createElement('div');layer.className='mp-friend-layer';frame.append(layer);}
      layer.innerHTML=this.players.filter(p=>p.id!==this.session.playerId&&p.progress===floor).map(p=>{const a=avatars[p.avatar_id]||avatars.knight;return `<div class="mp-friend-marker" style="--x:${p.pos_x/12.8}%;--y:${p.pos_y/7.2}%;--avatar:${a.color}"><i>${a.icon}</i><b>${escapeHtml(p.display_name)}</b></div>`}).join('');
    },

    startHeartbeat(){clearInterval(this.heartbeat);this.heartbeat=setInterval(()=>{if(this.session)this.syncProgress(state?.completed?.length||0)},HEARTBEAT_INTERVAL)},
    cleanupChannel(){if(this.channel&&client)client.removeChannel(this.channel);this.channel=null;clearInterval(this.heartbeat);this.heartbeat=0;}
  };

  function loadSession(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{return null}}
  function saveSession(value){localStorage.setItem(STORAGE_KEY,JSON.stringify(value))}
  function clearSession(){localStorage.removeItem(STORAGE_KEY)}
  function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

  window.vectoriaMultiplayer=manager;
  manager.init();
})();
