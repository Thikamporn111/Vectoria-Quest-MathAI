/* Vectoria Quest — Three.js dungeon prototype
   Keeps the existing quest/state flow; replaces only dungeon exploration visuals. */
(()=>{
'use strict';
const THREE_URL='https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
let T=null, active=null, booting=false;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const dist2=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);

function floorId(){
  try{ if(typeof state!=='undefined'&&state.currentFloor)return +state.currentFloor; }catch(e){}
  const n=(document.querySelector('#floorName')?.textContent||'').match(/(\d+)/);return n?+n[1]:1;
}
function questForFloor(id){try{return typeof quests!=='undefined'?quests.find(q=>q.id===id):null}catch(e){return null}}
function showToast(text){if(!active)return;const el=active.toast;el.textContent=text;el.classList.add('show');clearTimeout(active.toastTimer);active.toastTimer=setTimeout(()=>el.classList.remove('show'),1500)}
function updateMission(){if(!active)return;const m=document.querySelector('#missionText');if(m)m.textContent=active.collected<3?`เก็บคริสตัล ${active.collected} / 3`:'ประตูบอสเปิดแล้ว!';}
function bossEnter(){
  const q=questForFloor(active?.floor||1);cleanup();
  try{
    if(typeof renderQuest==='function'&&q){state.currentQuest=q.id;renderQuest(q.id);return}
    if(typeof openQuest==='function'&&q){openQuest(q.id);return}
  }catch(e){console.warn(e)}
  document.querySelector('#sampleQuestBtn')?.click();
}
function makeMat(color,emissive=0x000000,rough=.75,metal=.08){return new T.MeshStandardMaterial({color,emissive,roughness:rough,metalness:metal})}
function box(w,h,d,color,x,y,z,scene,em=0){const m=new T.Mesh(new T.BoxGeometry(w,h,d),makeMat(color,em));m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;scene.add(m);return m}
function pillar(x,z,scene){box(1.3,4.8,1.3,0x172b3d,x,2.4,z,scene);const cap=box(1.65,.35,1.65,0x244157,x,4.75,z,scene);cap.material.emissive.setHex(0x06131b)}
function crystal(x,z,scene){const g=new T.Group();const gem=new T.Mesh(new T.OctahedronGeometry(.52,0),makeMat(0x63fff0,0x126b68,.22,.35));gem.position.y=1.05;gem.castShadow=true;g.add(gem);const ring=new T.Mesh(new T.TorusGeometry(.68,.035,8,32),new T.MeshBasicMaterial({color:0x7afff3,transparent:true,opacity:.55}));ring.rotation.x=Math.PI/2;ring.position.y=.55;g.add(ring);g.position.set(x,0,z);g.userData={kind:'crystal',taken:false,gem,ring,baseY:1.05};scene.add(g);return g}
function npc(x,z,scene){const g=new T.Group();const robe=new T.Mesh(new T.ConeGeometry(.52,1.45,7),makeMat(0x1c6f72,0x073b3b));robe.position.y=.75;const head=new T.Mesh(new T.SphereGeometry(.34,18,12),makeMat(0xcfe8e0));head.position.y=1.72;const halo=new T.Mesh(new T.TorusGeometry(.55,.035,8,28),new T.MeshBasicMaterial({color:0x55e6d9}));halo.position.y=2.22;halo.rotation.x=Math.PI/2;g.add(robe,head,halo);g.position.set(x,0,z);g.userData={kind:'npc',halo};scene.add(g);return g}
function door(x,z,scene){const g=new T.Group();box(1.05,4.5,1.05,0x263b50,-2.15,2.25,0,g);box(1.05,4.5,1.05,0x263b50,2.15,2.25,0,g);box(5.3,.85,1.05,0x314b63,0,4.3,0,g);const portal=new T.Mesh(new T.PlaneGeometry(3.2,3.5),new T.MeshBasicMaterial({color:0x762b42,transparent:true,opacity:.48,side:T.DoubleSide}));portal.position.y=2.05;g.add(portal);const rune=new T.Mesh(new T.TorusGeometry(1.45,.08,8,40),new T.MeshBasicMaterial({color:0xff6f82,transparent:true,opacity:.8}));rune.position.y=2.05;rune.rotation.y=Math.PI/2;g.add(rune);g.position.set(x,0,z);g.userData={kind:'door',portal,rune,open:false};scene.add(g);return g}
function player(scene){const g=new T.Group();const body=new T.Mesh(new T.CapsuleGeometry(.43,1.05,6,12),makeMat(0x2c6d91));body.position.y=1.15;body.castShadow=true;const head=new T.Mesh(new T.SphereGeometry(.36,18,12),makeMat(0xf0c9a7));head.position.y=2.08;head.castShadow=true;const cape=new T.Mesh(new T.BoxGeometry(.62,1.05,.08),makeMat(0x8d344a));cape.position.set(0,1.22,.42);cape.rotation.x=-.12;const sword=new T.Mesh(new T.BoxGeometry(.08,1.2,.08),makeMat(0xd9edf2,0x18343b,.25,.75));sword.position.set(.55,1.25,0);sword.rotation.z=-.32;g.add(body,head,cape,sword);g.position.set(0,0,10);scene.add(g);return g}
function buildWorld(scene){
  scene.background=new T.Color(0x07121f);scene.fog=new T.FogExp2(0x07121f,.027);
  const hemi=new T.HemisphereLight(0x8cc9e8,0x09111b,1.15);scene.add(hemi);const moon=new T.DirectionalLight(0xc8e6ff,1.5);moon.position.set(-8,14,8);moon.castShadow=true;moon.shadow.mapSize.set(1024,1024);scene.add(moon);
  const floor=new T.Mesh(new T.PlaneGeometry(34,48,17,24),makeMat(0x102331));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);
  const grid=new T.GridHelper(34,17,0x315166,0x173044);grid.position.y=.012;scene.add(grid);
  box(35,2,1,0x13283a,0,1,-24,scene);box(35,2,1,0x13283a,0,1,24,scene);box(1,2,48,0x13283a,-17,1,0,scene);box(1,2,48,0x13283a,17,1,0,scene);
  [-13,-7,7,13].forEach(x=>{[-18,-7,5,17].forEach(z=>pillar(x,z,scene))});
  for(let i=0;i<18;i++){const x=(i%2?1:-1)*(8+(i%5)*1.45),z=-20+(i*5.3)%40;const rock=new T.Mesh(new T.DodecahedronGeometry(.45+(i%3)*.18,0),makeMat(0x1a3342));rock.position.set(x,.35,z);rock.scale.y=.7;scene.add(rock)}
  const torches=[[-15,-13],[15,-13],[-15,12],[15,12]];torches.forEach(([x,z])=>{const l=new T.PointLight(0x55e6d9,4.2,8,2);l.position.set(x,2.4,z);scene.add(l);const orb=new T.Mesh(new T.SphereGeometry(.12,10,8),new T.MeshBasicMaterial({color:0x8ffff5}));orb.position.copy(l.position);scene.add(orb)});
}
function buildUI(frame){
  const stage=document.createElement('div');stage.className='three-stage';stage.innerHTML='<div class="three-crosshair"></div><div class="three-badge"><b>THREE.JS</b> · 3D DUNGEON</div><div class="three-prompt"></div><div class="three-toast"></div><div class="three-dialog"><span class="three-dialog-face">🧙</span><div><b>ไลรา · ผู้ชี้ทางเวกเตอร์</b><p>คริสตัลเวกเตอร์กระจายอยู่ในวิหาร เก็บให้ครบ 3 เม็ด แล้วประตูบอสจะเปิด</p></div><button type="button">เข้าใจแล้ว</button></div><div class="three-mobile-stick"><button data-dir="up">▲</button><button data-dir="left">◀</button><button data-dir="down">▼</button><button data-dir="right">▶</button></div><button class="three-action" type="button">⚔<small>ใช้</small></button>';
  frame.prepend(stage);return {stage,prompt:stage.querySelector('.three-prompt'),toast:stage.querySelector('.three-toast'),dialog:stage.querySelector('.three-dialog'),action:stage.querySelector('.three-action')};
}
async function boot(){
 if(active||booting)return;const frame=document.querySelector('.game-frame'),source=document.querySelector('#gameCanvas');if(!frame||!source)return;booting=true;
 try{
   T=await import(THREE_URL);if(!document.body.contains(frame))return;
   frame.classList.add('three-active');source.classList.add('three-hidden-source');const ui=buildUI(frame);
   const scene=new T.Scene(),camera=new T.PerspectiveCamera(55,16/9,.1,120),renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;ui.stage.prepend(renderer.domElement);buildWorld(scene);
   const p=player(scene),n=npc(-8,9,scene),d=door(0,-21.8,scene),crystals=[crystal(-9,-4,scene),crystal(9,-8,scene),crystal(0,-15,scene)];
   active={frame,source,ui,...ui,scene,camera,renderer,player:p,npc:n,door:d,crystals,keys:{},floor:floorId(),collected:0,last:performance.now(),near:null,raf:0,toastTimer:0};
   resize();updateMission();bind();ui.dialog.classList.add('show');loop(performance.now());
 }catch(err){console.error('Three.js boot failed',err);showToast('โหลดโหมด 3D ไม่สำเร็จ — ใช้โหมดเดิมแทน');cleanup();}
 finally{booting=false}
}
function bind(){if(!active)return;active.keydown=e=>{const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright','e',' '].includes(k))e.preventDefault();active.keys[k]=true;if(k==='e'||k===' ')interact()};active.keyup=e=>active.keys[e.key.toLowerCase()]=false;active.resize=resize;window.addEventListener('keydown',active.keydown,{passive:false});window.addEventListener('keyup',active.keyup);window.addEventListener('resize',active.resize);active.dialog.querySelector('button').onclick=()=>active.dialog.classList.remove('show');active.action.onclick=interact;active.ui.stage.querySelectorAll('[data-dir]').forEach(b=>{const map={up:'w',down:'s',left:'a',right:'d'},k=map[b.dataset.dir];const on=e=>{e.preventDefault();active.keys[k]=true},off=e=>{e.preventDefault();active.keys[k]=false};b.addEventListener('pointerdown',on);b.addEventListener('pointerup',off);b.addEventListener('pointercancel',off);b.addEventListener('pointerleave',off)});}
function resize(){if(!active)return;const r=active.frame.getBoundingClientRect(),w=Math.max(320,r.width),h=Math.max(240,r.height);active.renderer.setSize(w,h,false);active.camera.aspect=w/h;active.camera.updateProjectionMatrix()}
function interact(){if(!active)return;if(active.near==='npc'){active.dialog.classList.add('show');return}if(active.near==='door'){if(active.collected<3){showToast(`ต้องเก็บคริสตัลอีก ${3-active.collected} เม็ด`);return}bossEnter()}}
function loop(now){if(!active)return;const dt=Math.min(.04,(now-active.last)/1000||.016);active.last=now;const a=active,p=a.player,k=a.keys;let dx=0,dz=0;if(k.w||k.arrowup)dz-=1;if(k.s||k.arrowdown)dz+=1;if(k.a||k.arrowleft)dx-=1;if(k.d||k.arrowright)dx+=1;if(dx||dz){const len=Math.hypot(dx,dz);dx/=len;dz/=len;const speed=6.4;p.position.x=clamp(p.position.x+dx*speed*dt,-15.5,15.5);p.position.z=clamp(p.position.z+dz*speed*dt,-22.2,22.2);p.rotation.y=Math.atan2(dx,dz);p.position.y=Math.abs(Math.sin(now*.012))*.035}
 a.crystals.forEach((c,i)=>{if(c.userData.taken)return;c.rotation.y+=dt*1.8;c.userData.gem.position.y=c.userData.baseY+Math.sin(now*.002+i)*.12;c.userData.ring.rotation.z+=dt*.8;if(dist2(p.position,c.position)<1.25){c.userData.taken=true;c.visible=false;a.collected++;updateMission();showToast(`◆ ได้คริสตัล ${a.collected} / 3`);if(a.collected===3){a.door.userData.open=true;a.door.userData.portal.material.color.setHex(0x1fbea9);a.door.userData.rune.material.color.setHex(0x55e6d9);showToast('ประตูบอสเปิดแล้ว!')}} });
 a.npc.userData.halo.rotation.z+=dt*.65;a.door.userData.rune.rotation.z+=dt*.35;a.door.userData.portal.material.opacity=a.door.userData.open?.55:.3;
 const dn=dist2(p.position,a.npc.position),dd=dist2(p.position,a.door.position);a.near=dn<2.3?'npc':dd<3.0?'door':null;if(a.near==='npc'){a.prompt.innerHTML='<kbd>E</kbd> คุยกับไลรา';a.prompt.classList.add('show')}else if(a.near==='door'){a.prompt.innerHTML=a.collected===3?'<kbd>E</kbd> เข้าห้องบอส':'ประตูผนึก · เก็บคริสตัลให้ครบ 3 เม็ด';a.prompt.classList.add('show')}else a.prompt.classList.remove('show');
 const target=new T.Vector3(p.position.x,p.position.y+1.25,p.position.z),desired=new T.Vector3(p.position.x,p.position.y+7.2,p.position.z+10.5);a.camera.position.lerp(desired,1-Math.pow(.002,dt));a.camera.lookAt(target);a.renderer.render(a.scene,a.camera);a.raf=requestAnimationFrame(loop)}
function cleanup(){if(!active)return;cancelAnimationFrame(active.raf);window.removeEventListener('keydown',active.keydown);window.removeEventListener('keyup',active.keyup);window.removeEventListener('resize',active.resize);active.renderer?.dispose();active.stage?.remove();active.source?.classList.remove('three-hidden-source');active.frame?.classList.remove('three-active');active=null}
const obs=new MutationObserver(()=>{const canvas=document.querySelector('#gameCanvas');if(canvas&&!active&&!booting)setTimeout(boot,0);else if(!canvas&&active)cleanup()});obs.observe(document.documentElement,{childList:true,subtree:true});
window.addEventListener('pagehide',cleanup);if(document.querySelector('#gameCanvas'))boot();
})();
