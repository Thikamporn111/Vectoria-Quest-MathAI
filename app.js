const quests = [
  {id:1,name:'ผู้พิทักษ์แกนทมิฬ',title:'เจ้าแห่งระนาบ XY',glyph:'↙',quote:'หากไม่รู้ว่าปลายลูกศรอยู่ที่ใด เจ้าจะหลงในป่าพิกัดตลอดกาล',map:'ประตูพิกัด',rune:'รูนแห่งทิศทาง',intro:'บอสสร้างหมอกปกคลุมแผนที่ เจ้าต้องระบุตำแหน่งปลายเวกเตอร์ให้ถูก เพื่อเปิดทางสู่ดันเจี้ยนชั้นถัดไป',learn:{title:'อ่านเวกเตอร์ให้เหมือนอ่านแผนที่',sample:'ลองเวกเตอร์ P = 3i + 2j หรือ P = (3, 2)',steps:['ค่า x = 3 เป็นบวก จึงเดินไปทางขวา 3 ช่อง','ค่า y = 2 เป็นบวก จึงเดินขึ้น 2 ช่อง','ลากลูกศรจาก <b>(0, 0)</b> ไปยัง <b>(3, 2)</b>'],formula:'P = 3i + 2j = <em>(3, 2)</em>'},hint:'ดูเครื่องหมายทีละแกน: -20 หมายถึงไปซ้าย 20 ช่อง และ -21 หมายถึงลง 21 ช่อง ดังนั้นปลายลูกศรอยู่ควอดแรนต์ที่ 3',question:'จงวาดเวกเตอร์ A = -20i - 21j ลงบนระนาบพิกัด xy',inputs:[['x','พิกัดปลาย x'],['y','พิกัดปลาย y']],validate:v=>+v.x===-20&&+v.y===-21,explain:'ถูกต้อง! A = (-20, -21) เริ่มจาก (0, 0) แล้วไปซ้าย 20 และลง 21 จุดปลายจึงอยู่ที่ (-20, -21) ในควอดแรนต์ที่ 3',vectors:[[-20,-21,'A','#55e6d9']]},
  {id:2,name:'อัศวินกระจกกลับด้าน',title:'ผู้พลิกทิศแห่งเงา',glyph:'⇄',quote:'ทุกย่างก้าวของเจ้า ข้าจะสะท้อนให้ย้อนกลับ!',map:'หอกระจก',rune:'รูนแห่งการสะท้อน',intro:'กระจกต้องสาปสร้างภาพตรงข้ามของทุกสิ่ง จงสร้างเวกเตอร์ -A และเปิดเผยความสัมพันธ์ระหว่างทิศทั้งสอง',learn:{title:'เวกเตอร์ตรงข้าม เปลี่ยนทุกเครื่องหมาย',sample:'ถ้า P = (3, 2) แล้ว -P คืออะไร?',steps:['เครื่องหมายลบหน้าเวกเตอร์กระจายเข้าไปทุกองค์ประกอบ','เปลี่ยน 3 เป็น -3 และ 2 เป็น -2','ดังนั้น -P = <b>(-3, -2)</b>','เวกเตอร์เดิมกับเวกเตอร์ตรงข้ามชี้สวนทางกันพอดี จึงทำมุม <b>180°</b>'],formula:'-(3, 2) = <em>(-3, -2)</em> · มุม 180°'},hint:'คูณทั้งสององค์ประกอบของ A ด้วย -1 แล้วนึกภาพลูกศรสองอันอยู่บนเส้นเดียวกันแต่ชี้คนละทาง',question:'จงวาดเวกเตอร์ -A และบอกว่าเวกเตอร์ -A ทำมุมกี่องศากับเวกเตอร์ A',inputs:[['x','-A พิกัด x'],['y','-A พิกัด y'],['angle','มุม (องศา)']],validate:v=>+v.x===20&&+v.y===21&&+v.angle===180,explain:'เยี่ยม! -A = (20, 21) เพราะกลับเครื่องหมายของ A ทุกตัว และ A กับ -A ชี้ตรงข้ามกันพอดี มุมระหว่างเวกเตอร์จึงเป็น 180°',vectors:[[-20,-21,'A','#75859f'],[20,21,'-A','#ffd166']]},
  {id:3,name:'แมกนิทูน ผู้กลืนระยะ',title:'ผู้พิทักษ์วิหารขนาดเวกเตอร์',glyph:'|V|',quote:'ทิศทางอาจเปลี่ยน แต่ความยาวของเจ้าหนีข้าไม่พ้น!',map:'วิหารขนาดเวกเตอร์',rune:'รูนแห่งขนาด',intro:'แมกนิทูนดูดกลืนขนาดของทุกเวกเตอร์ เจ้าต้องประกอบสูตร magnitude ตั้งแต่แทนองค์ประกอบจนได้คำตอบ เพื่อคืนพลังให้เวกเตอร์',learn:{title:'สูตรหาขนาดของเวกเตอร์ (magnitude)',sample:'หา |P| เมื่อ P = (3, 4)',steps:['เริ่มจากสูตรขนาดเวกเตอร์ <b>|V| = √(x² + y²)</b>','แทนองค์ประกอบของ P: |P| = √(3² + 4²)','คำนวณค่าใต้เครื่องหมายราก: √(9 + 16) = √25','ถอดราก: √25 = <b>5</b>'],formula:'|V| = √(x² + y²) &nbsp;⇒&nbsp; |P| = √(3² + 4²) = <em>5</em>'},hint:'แทน x = -20 และ y = -21 ลงในสูตร |A| = √(x² + y²) จากนั้นคำนวณค่าใต้ราก ส่วน -A มีขนาดเท่ากันเพราะการกลับทิศไม่เปลี่ยนความยาว',question:'กำหนดให้ A = -20i - 21j จงคำนวณหาขนาด (magnitude) ของเวกเตอร์ A และของเวกเตอร์ -A',inputs:[['a','|A|'],['nega','|-A|']],validate:v=>+v.a===29&&+v.nega===29,explain:'ถูกต้อง! |A| = √((-20)² + (-21)²) = √841 = 29 และ |-A| = √(20² + 21²) = 29 การกลับทิศไม่ทำให้ความยาวเปลี่ยน',vectors:null},
  {id:4,name:'แมงมุมฉากศิลา',title:'ผู้ถักใยมุม 90°',glyph:'⊥',quote:'ใยของข้าขวางทุกเส้นทางด้วยมุมฉาก เจ้าจะหาเส้นที่ลอดผ่านได้หรือไม่?',map:'วิหารเวกเตอร์ตั้งฉาก',rune:'รูนแห่งมุมฉาก',intro:'ทางออกถูกผนึกด้วยใยตั้งฉาก ต้องสร้างเวกเตอร์ B ที่ตั้งฉากกับ A และ C ที่ตั้งฉากกับ -A อย่างละหนึ่งตัวอย่าง',learn:{title:'หาเวกเตอร์ตั้งฉากและตรวจด้วย dot product',sample:'กำหนด P = (3, 2) จงหาเวกเตอร์ Q ที่ตั้งฉากกับ P หนึ่งตัวอย่าง',steps:['ถ้าเวกเตอร์เดิมคือ <b>(x, y)</b> เวกเตอร์ตั้งฉากเลือกได้เป็น <b>(y, -x)</b> หรือ <b>(-y, x)</b>','แทน x = 3 และ y = 2 เลือกได้ Q = <b>(2, -3)</b>','ตรวจด้วยสูตร dot product: P · Q = (3)(2) + (2)(-3)','คำนวณได้ 6 - 6 = <b>0</b> ดังนั้น P ⟂ Q และมุมระหว่างกันเท่ากับ 90°'],formula:'P · Q = PₓQₓ + PᵧQᵧ = 0 &nbsp;⇒&nbsp; <em>P ⟂ Q</em>'},hint:'ตอบเวกเตอร์ไม่เป็นศูนย์ชุดใดก็ได้ที่ตรวจ dot product แล้วเป็น 0 หรือกด “เติมตัวอย่าง” เพื่อใช้ชุดมาตรฐานจาก PDF: B = (-21, 20) และ C = (21, -20) ซึ่งจะใช้ต่อในข้อ 5',question:'จงหา B ที่ตั้งฉากกับ A และ C ที่ตั้งฉากกับ -A มาอย่างละหนึ่งตัวอย่าง พร้อมวาดลงบนระนาบ xy',inputs:[['bx','Bₓ'],['by','Bᵧ'],['cx','Cₓ'],['cy','Cᵧ']],prefill:{bx:-21,by:20,cx:21,cy:-20},validate:v=>{const values=[v.bx,v.by,v.cx,v.cy].map(Number),[bx,by,cx,cy]=values;if(!values.every(Number.isFinite)||(bx===0&&by===0)||(cx===0&&cy===0))return false;return Math.abs(-20*bx-21*by)<1e-9&&Math.abs(20*cx+21*cy)<1e-9},explain:'ผ่านด่าน! คำตอบของคุณเป็นเวกเตอร์ไม่เป็นศูนย์และตรวจได้ A · B = 0 กับ (-A) · C = 0 จึงตั้งฉากกันทั้งสองคู่ ภาพสรุปแสดงชุดตัวอย่างมาตรฐานจาก PDF ซึ่งจะใช้ต่อในข้อ 5',vectors:[[ -20,-21,'A','#75859f'],[-21,20,'B','#55e6d9'],[20,21,'-A','#75859f'],[21,-20,'C','#ffd166']]},
  {id:5,name:'จักรพรรดิยูนิต ผู้คุมขนาดหนึ่ง',title:'ศึกพิชิตเวกเตอร์หนึ่งหน่วย',glyph:'V̂',quote:'เวกเตอร์ทุกตัวต้องผ่านการย่อขนาดให้เหลือหนึ่ง ก่อนจะเปิดเผยทิศทางที่แท้จริง!',map:'ปราสาท Unit Vector',rune:'รูนแห่งเวกเตอร์หนึ่งหน่วย',intro:'จักรพรรดิยูนิตผนึกทางออกไว้ด้วยกฎขนาดหนึ่ง เจ้าต้องทำชุดตัวอย่างมาตรฐานจาก PDF ให้เป็นเวกเตอร์หนึ่งหน่วย แล้วใช้ dot product ตัดสินความสัมพันธ์ของทิศทาง',learn:{title:'Unit vector คือเวกเตอร์ที่ย่อให้ยาว 1',sample:'ให้ P = (3, 4) และ Q = (-3, -4) หา p̂ · q̂',steps:['|P| = |Q| = 5','หารแต่ละองค์ประกอบด้วยขนาด: p̂ = (3/5, 4/5)','q̂ = (-3/5, -4/5)','dot product = (3/5)(-3/5) + (4/5)(-4/5) = -25/25 = <b>-1</b>'],formula:'p̂ · q̂ = cos(θ) · ตรงข้ามกัน θ=180° จึงได้ <em>-1</em>'},hint:'ข้อ 5 ใช้ชุดตัวอย่างมาตรฐานจาก PDF: B = (-21, 20) และ C = (21, -20) โดย C = -B หลังทำเป็น unit vector ค่า dot product จึงเท่ากับ cos(180°) = -1',question:'ใช้ชุดตัวอย่างมาตรฐานจาก PDF: B = (-21, 20) และ C = (21, -20) จงคำนวณ dot product ระหว่าง unit vector ของ B กับ unit vector ของ C',inputs:[['dot','B̂ · Ĉ']],validate:v=>Number.isFinite(Number(v.dot))&&Math.abs(Number(v.dot)+1)<.001,explain:'ชัยชนะ! เมื่อใช้ B = (-21, 20) และ C = (21, -20) จะได้ |B| = |C| = 29, B̂ = (-21/29, 20/29), Ĉ = (21/29, -20/29) และ B̂ · Ĉ = (-441 - 400)/841 = -1 จึงชี้ตรงข้ามกัน',vectors:[[-21/29,20/29,'B̂','#55e6d9'],[21/29,-20/29,'Ĉ','#ffd166']]}
];

const defaultState={completed:[],hp:5,xp:0,current:0,step:0,b:{x:-21,y:20},c:{x:21,y:-20},sound:true,adventure:{},answerHistory:{},started:false};
let state=loadState(); let selectedChoice=null;
function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem('vectoria-state')||'{}')}}catch{return {...defaultState}}}
function save(){localStorage.setItem('vectoria-state',JSON.stringify(state));updateTopbar()}
function updateTopbar(){document.querySelector('#hpValue').textContent=state.hp;document.querySelector('#xpValue').textContent=state.xp;document.querySelector('#soundBtn').textContent=state.sound?'♪':'×'}
function beep(good=true){if(!state.sound)return;try{const a=new AudioContext(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=good?620:180;g.gain.setValueAtTime(.05,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.18);o.start();o.stop(a.currentTime+.18)}catch{}}
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function expectedFinalDot(){const b=state.b,c=state.c;const bm=Math.hypot(b.x,b.y),cm=Math.hypot(c.x,c.y);return (b.x*c.x+b.y*c.y)/(bm*cm)}

function showMap(){state.step=0;save();const app=document.querySelector('#app');app.innerHTML='';app.append(document.querySelector('#mapTemplate').content.cloneNode(true));const nodes=document.querySelector('#dungeonNodes');quests.forEach((q,i)=>{const done=state.completed.includes(q.id),open=i===0||state.completed.includes(i);const b=document.createElement('button');b.className=`dungeon-node ${done?'done':open?'unlocked':'locked'}`;b.dataset.label=q.map;b.innerHTML=`<strong>${done?'✓':open?q.id:'♢'}</strong>`;b.setAttribute('aria-label',`${q.map} ${done?'ผ่านแล้ว':open?'เข้าได้':'ยังล็อก'}`);b.onclick=()=>open?openQuest(i):toast('ต้องผ่านด่านก่อนหน้าก่อน');nodes.append(b)});document.querySelector('#mapProgress').textContent=`ผ่านแล้ว ${state.completed.length} / 5 ด่าน`;const next=Math.min(state.completed.length,4);document.querySelector('#continueBtn').textContent=state.completed.length===5?'ชมบทสรุปชัยชนะ →':`เข้าสู่${quests[next].map} →`;document.querySelector('#continueBtn').onclick=()=>state.completed.length===5?openQuest(4,2):openQuest(next);document.querySelector('#resetBtn').onclick=()=>{if(confirm('เริ่มเกมใหม่และลบความคืบหน้าทั้งหมดหรือไม่?')){state={...defaultState,completed:[],adventure:{}};save();showMap()}};app.focus()}
function openQuest(index,step=0){state.current=index;state.step=step;if(step===0)state.showReward=0;save();window.vectoriaMultiplayer?.syncProgress(state.completed.length);renderQuest();const app=document.querySelector('#app');app.scrollTop=0;window.scrollTo(0,0);requestAnimationFrame(()=>{app.scrollTop=0;window.scrollTo(0,0)})}
function renderQuest(){const q=quests[state.current],app=document.querySelector('#app');app.innerHTML='';app.append(document.querySelector('#questTemplate').content.cloneNode(true));document.querySelector('#questNumber').textContent=`ดันเจี้ยน ${q.id} / 5`;document.querySelector('#bossGlyph').textContent=q.glyph;document.querySelector('#bossName').textContent=q.name;document.querySelector('#bossTitle').textContent=q.title;document.querySelector('#bossQuote').textContent=`“${q.quote}”`;document.querySelector('#backBtn').onclick=showMap;const labels=['ห้องเตรียมตัว','ห้องฝึกซ้อม','ศึกบอส'];document.querySelector('#stepper').innerHTML=labels.map((x,i)=>`<div class="step ${i===state.step?'active':i<state.step?'done':''}">${i<state.step?'✓ ':''}${x}</div>`).join('');const bossDefeated=state.completed.includes(q.id),hp=bossDefeated?0:([100,65,30][state.step]??0);document.querySelector('#bossHpBar').style.width=`${hp}%`;document.querySelector('#bossHpText').textContent=bossDefeated?'0% · ปราบแล้ว':`${hp}%`;if(state.step===0)renderIntro(q);else if(state.step===1)renderLesson(q);else if(state.step===2&&state.showReward!==q.id)renderChallenge(q);else renderReward(q);app.focus()}
function renderIntro(q){document.querySelector('#questContent').innerHTML=`<p class="section-icon">✦ QUEST BRIEFING</p><h1 class="content-title">${q.map}: ${q.name}</h1><p class="lead">${q.intro}</p><div class="lore-box"><b>ภารกิจจากผู้เฒ่าเวกเตอร์</b><br>${q.question}<br><small>อ้างอิงโจทย์จริงข้อ ${q.id} จาก Midterm Mathematics for AI & ML — Set 3</small></div><div class="tip-box"><b>กติกานักผจญภัยมือใหม่</b><br>อ่านตัวอย่างก่อน ไม่มีการจับเวลา ขอคำใบ้ได้ และเมื่อตอบผิดจะมีคำอธิบายช่วยชี้ทาง</div><div class="action-row"><span></span><button class="primary-btn" id="nextBtn">เข้าห้องฝึกซ้อม <span>→</span></button></div>`;document.querySelector('#nextBtn').onclick=()=>{state.step=1;renderQuest()}}
function renderLesson(q){const l=q.learn;document.querySelector('#questContent').innerHTML=`<p class="section-icon">◎ TRAINING CAMP</p><h1 class="content-title">${l.title}</h1><p class="lead">ก่อนเจอบอส ลองโจทย์ตัวอย่างที่ใช้เลขเล็กกว่า เพื่อเห็นหลักคิดชัด ๆ</p><div class="lore-box"><b>โจทย์ตัวอย่าง</b><br>${l.sample}</div><div class="lesson-steps">${l.steps.map((s,i)=>`<div class="lesson-step"><span>${i+1}</span><div>${s}</div></div>`).join('')}</div><div class="formula">${l.formula}</div><div class="action-row"><button class="secondary-btn" id="prevBtn">← ย้อนกลับ</button><button class="primary-btn" id="nextBtn">${q.id===3?'พร้อมสู้บอส ⚔':'วาดกราฟให้ผ่านก่อน 🔒'}</button></div>`;document.querySelector('#prevBtn').onclick=()=>{state.step=0;renderQuest()};document.querySelector('#nextBtn').onclick=()=>{if(q.id===3||document.querySelector('#nextBtn').dataset.ready){state.step=2;renderQuest()}else toast('คลิกวาดเวกเตอร์บนกราฟให้ถูกก่อน')};if(q.id===3)setupMagnitudeWorkshop('.action-row');else{if(q.id===4){setupPerpendicularReference();setupRealLikeQ4Practice()}renderGraphTrainer(q)}}

function setupRealLikeQ4Practice(){const old=document.querySelector('.extra-q4');if(!old)return;old.outerHTML=`<div class="extra-q4 real-like"><h3>โจทย์ฝึกจำลองโจทย์จริง — เปลี่ยนเฉพาะพิกัด</h3><div class="practice-given"><b>กำหนดให้</b><span>A = (4, -3)</span><span>-A = (-4, 3)</span></div><p>1) จงหาเวกเตอร์ B ที่ตั้งฉากกับ A หนึ่งตัวอย่าง<br>2) จงหาเวกเตอร์ C ที่ตั้งฉากกับ -A หนึ่งตัวอย่าง</p><div class="four-inputs"><label>Bₓ <input id="extraBx" inputmode="decimal"></label><label>Bᵧ <input id="extraBy" inputmode="decimal"></label><label>Cₓ <input id="extraCx" inputmode="decimal"></label><label>Cᵧ <input id="extraCy" inputmode="decimal"></label></div><button id="checkExtraQ4">ตรวจทั้งสองคำตอบ</button><small id="extraQ4Result">ต้องตรวจให้ได้ A · B = 0 และ (-A) · C = 0</small><canvas id="extraQ4Graph" width="600" height="600"></canvas></div>`;document.querySelector('#checkExtraQ4').onclick=()=>{const bx=+document.querySelector('#extraBx').value,by=+document.querySelector('#extraBy').value,cx=+document.querySelector('#extraCx').value,cy=+document.querySelector('#extraCy').value,out=document.querySelector('#extraQ4Result'),first=(bx||by)&&4*bx-3*by===0,second=(cx||cy)&&-4*cx+3*cy===0,ok=first&&second;out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?`✓ ถูกทั้งสองคู่: A · B = 0 และ (-A) · C = 0`:`ยังไม่ครบ: A · B ${first?'= 0 ✓':'≠ 0'} และ (-A) · C ${second?'= 0 ✓':'≠ 0'}`;beep(ok);if(ok)drawExtraQ4Graph([[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff'],[bx,by,'B','#ffe066'],[cx,cy,'C','#65efb6']])}}

function drawExtraQ4Graph(vs){const c=document.querySelector('#extraQ4Graph'),x=c.getContext('2d'),o=300,s=45;x.fillStyle='#06172f';x.fillRect(0,0,600,600);for(let i=-6;i<=6;i++){const p=o+i*s;x.strokeStyle=i===0?'#e3efff':'rgba(101,157,211,.24)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,20);x.lineTo(p,580);x.moveTo(20,p);x.lineTo(580,p);x.stroke()}vs.forEach(v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);x.strokeStyle=x.fillStyle=v[3];x.lineWidth=7;x.beginPath();x.moveTo(o,o);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));x.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));x.closePath();x.fill();x.font='800 16px Chakra Petch';x.textAlign=v[0]>=0?'right':'left';x.fillText(`${v[2]} (${v[0]},${v[1]})`,ex+(v[0]>=0?-8:8),ey-10)})}

const renderLessonDefault=renderLesson;
renderLesson=function(q){if(q.id===4){renderQ4Lesson(q);simplifyQ4Lesson();renameDotProductFormulas();formatPerpendicularSwaps();replaceCosProofWithValues();explainDotProductOrigin();simplifyDotOriginText();removeMagnitudeNumbers();removePairCosCards();restoreOriginalCosBlock();removeCosExplanationBlock();finalizeQ4Display();addAnglePicturesToTables();labelNegativeA();setupInteractiveCleanGraph();setupManualQ4Drawing();enhanceManualQ4Canvas();showManualQ4Coordinates();addManualGraphAxes();return}if(q.id===5){renderQ5Lesson();return}return renderLessonDefault(q)};

function setupInteractiveCleanGraph(){const c=document.querySelector('#cleanQ4Graph'),box=document.querySelector('.q4-practice-clean');if(!c||!box)return;box.querySelector('h3').insertAdjacentHTML('afterend','<p class="click-graph-note">หลังกรอกคำตอบ สามารถคลิกบนกราฟเพื่อวาด B และ C ได้ด้วย</p><div class="graph-coord" id="cleanClickCoord">จุดที่เลือก: (?, ?)</div>');const x=c.getContext('2d'),o=300,s=50,given=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff']],targets=[[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']];let stage=0,drawn=[...given],pick=null;const arrow=v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);x.strokeStyle=x.fillStyle=v[3];x.lineWidth=8;x.beginPath();x.moveTo(o,o);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));x.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));x.closePath();x.fill();x.fillStyle='#fff';x.beginPath();x.arc(ex,ey,11,0,Math.PI*2);x.fill();x.fillStyle=v[3];x.beginPath();x.arc(ex,ey,7,0,Math.PI*2);x.fill()};const guides=v=>{const ex=o+v[0]*s,ey=o-v[1]*s;x.save();x.strokeStyle=v[3];x.lineWidth=2;x.setLineDash([7,6]);x.beginPath();x.moveTo(ex,ey);x.lineTo(ex,o);x.lineTo(o,o);x.moveTo(ex,ey);x.lineTo(o,ey);x.stroke();x.setLineDash([]);x.fillStyle=v[3];x.font='800 15px Chakra Petch';x.textAlign='center';x.fillText(`x = ${v[0]}`,ex,o+25);x.textAlign='right';x.fillText(`y = ${v[1]}`,o-10,ey+5);x.restore()};const draw=()=>{x.fillStyle='#06172f';x.fillRect(0,0,600,600);for(let i=-5;i<=5;i++){const p=o+i*s;x.strokeStyle=i===0?'#e6f0ff':'rgba(101,158,211,.25)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,25);x.lineTo(p,575);x.moveTo(25,p);x.lineTo(575,p);x.stroke();if(i!==0){x.fillStyle='#c9def2';x.font='13px Chakra Petch';x.textAlign='center';x.fillText(i,p,o+18);x.textAlign='right';x.fillText(-i,o-8,p+4)}}drawn.forEach(v=>{arrow(v);guides(v)});if(pick){arrow(pick);guides(pick)}};c.style.cursor='crosshair';c.onclick=e=>{if(stage>=2)return;const r=c.getBoundingClientRect(),gx=Math.max(-5,Math.min(5,Math.round((((e.clientX-r.left)*600/r.width)-o)/s))),gy=Math.max(-5,Math.min(5,Math.round((o-((e.clientY-r.top)*600/r.height))/s))),t=targets[stage],ok=gx===t[0]&&gy===t[1];pick=[gx,gy,t[2],ok?t[3]:'#ff7184'];document.querySelector('#cleanClickCoord').textContent=`จุดที่เลือก: (${gx}, ${gy})`;if(ok){drawn.push(t);pick=null;stage++;beep(true);document.querySelector('#cleanQ4Result').className='practice-ok';document.querySelector('#cleanQ4Result').textContent=stage===2?'✓ วาด B และ C ครบแล้ว':'✓ วาด B ถูกต้อง ต่อไปวาด C'}else{beep(false);document.querySelector('#cleanQ4Result').className='practice-bad';document.querySelector('#cleanQ4Result').textContent=`จุด (${gx}, ${gy}) ยังไม่ถูก ลองใหม่`};draw()};draw()}

function showManualQ4Coordinates(){const section=document.querySelector('.manual-q4-draw'),p=section?.querySelector('p');if(!p)return;p.outerHTML='<div class="manual-instructions easy"><section><b>เวกเตอร์ที่มีอยู่บนกราฟ</b><span class="coord-a">A = (4, -3)</span><span class="coord-nega"><i class="math-vector negative-vector">-A</i> = (-4, 3)</span></section><ol><li><i>1</i><div><b>วาด B ให้ตั้งฉากกับ A</b><small>จุดที่ต้องคลิก</small><strong class="coord-b">(-3, -4)</strong></div></li><li><i>2</i><div><b>วาด C ให้ตั้งฉากกับ <i class="math-vector negative-vector">-A</i></b><small>จุดที่ต้องคลิก</small><strong class="coord-c">(3, 4)</strong></div></li></ol></div>'}
function addManualGraphAxes(){const canvas=document.querySelector('#manualQ4Canvas');if(!canvas||canvas.closest('.manual-axis-wrap'))return;const wrap=document.createElement('div');wrap.className='manual-axis-wrap';canvas.before(wrap);wrap.append(canvas);wrap.insertAdjacentHTML('beforeend','<span class="manual-axis-label axis-x">แกน x →</span><span class="manual-axis-label axis-y">แกน y ↑</span>');wrap.insertAdjacentHTML('afterend','<p class="manual-scale-note">สเกลกราฟ: ช่องเล็กแต่ละช่อง = 1 หน่วย · ตัวเลขแสดงตั้งแต่ −5 ถึง 5</p>')}

function enhanceManualQ4Canvas(){const c=document.querySelector('#manualQ4Canvas'),section=document.querySelector('.manual-q4-draw');if(!c||!section)return;section.querySelector('.graph-result').insertAdjacentHTML('afterend','<div class="manual-angle-status" id="manualAngleStatus">มุมจะปรากฏเมื่อวาด B ถูกต้อง</div>');const vectors=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff'],[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']],offsets=[[-60,28],[62,-25],[62,28],[-60,-25]],o=300,s=50;const overlay=()=>{const x=c.getContext('2d'),msg=document.querySelector('#manualQ4Result'),bDone=msg.textContent.includes('B ถูกต้อง')||msg.textContent.includes('วาด B และ C ครบ'),cDone=msg.textContent.includes('วาด B และ C ครบ'),count=cDone?4:bDone?3:2;x.save();for(let i=0;i<count;i++){const v=vectors[i],ex=o+v[0]*s,ey=o-v[1]*s,lx=ex+offsets[i][0],ly=ey+offsets[i][1],label=`${v[2]} (${v[0]}, ${v[1]})`;x.fillStyle='#fff';x.beginPath();x.arc(ex,ey,11,0,Math.PI*2);x.fill();x.fillStyle=v[3];x.beginPath();x.arc(ex,ey,7,0,Math.PI*2);x.fill();x.font='800 14px Chakra Petch';const w=x.measureText(label).width+16;x.fillStyle='rgba(4,17,37,.94)';x.strokeStyle=v[3];x.lineWidth=2;x.beginPath();x.roundRect(lx-w/2,ly-15,w,30,8);x.fill();x.stroke();x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';x.fillText(label,lx,ly)}const mark=(v1,v2,px,py)=>{const n1=Math.hypot(v1[0],v1[1]),n2=Math.hypot(v2[0],v2[1]),u=[v1[0]/n1,-v1[1]/n1],v=[v2[0]/n2,-v2[1]/n2],r=38;x.fillStyle='rgba(255,84,211,.24)';x.strokeStyle='#ff79dd';x.lineWidth=6;x.beginPath();x.moveTo(o,o);x.lineTo(o+u[0]*r,o+u[1]*r);x.lineTo(o+(u[0]+v[0])*r,o+(u[1]+v[1])*r);x.lineTo(o+v[0]*r,o+v[1]*r);x.closePath();x.fill();x.stroke();x.fillStyle='rgba(47,6,52,.96)';x.beginPath();x.roundRect(px-52,py-18,104,36,9);x.fill();x.strokeStyle='#ff79dd';x.lineWidth=2;x.stroke();x.fillStyle='#ff9de8';x.font='900 18px Chakra Petch';x.textAlign='center';x.fillText('θ = 90°',px,py)};if(bDone)mark(vectors[0],vectors[2],o+82,o+52);if(cDone)mark(vectors[1],vectors[3],o-84,o-52);x.restore();const status=document.querySelector('#manualAngleStatus');status.textContent=cDone?'θ(A,B) = 90° และ θ(-A,C) = 90°':bDone?'θ(A,B) = 90° · ต่อไปวาด C':'มุมจะปรากฏเมื่อวาด B ถูกต้อง'};overlay();c.addEventListener('click',()=>setTimeout(overlay,0))}

function addAnglePicturesToTables(){document.querySelectorAll('.inline-cos-table tbody').forEach(body=>{if(body.querySelector('.angle-pictures'))return;body.insertAdjacentHTML('beforeend','<tr class="angle-pictures"><th>รูปมุม</th><td><span class="angle-icon angle-zero"><i></i><b></b></span><small>ทิศเดียวกัน</small></td><td class="key-cell"><span class="angle-icon angle-ninety"><i></i><b></b><em></em></span><small>ตั้งฉาก</small></td><td><span class="angle-icon angle-oneeighty"><i></i><b></b></span><small>ทิศตรงข้าม</small></td></tr>')})}

function detailCosSteps(){const boxes=document.querySelectorAll('.cos-in-step'),table='<table class="inline-cos-table"><thead><tr><th>θ</th><th>0°</th><th>90°</th><th>180°</th></tr></thead><tbody><tr><th>cos θ</th><td>1</td><td class="key-cell">0</td><td>-1</td></tr></tbody></table>';if(boxes[0])boxes[0].innerHTML='<b>หามุมระหว่าง A กับ B</b><div class="magnitude-lines"><span>|A| = √(4² + (-3)²) = √25 = 5</span><span>|B| = √((-3)² + (-4)²) = √25 = 5</span></div><span>A · B = |A||B| cos θ</span><strong>0 = (5)(5) cos θ</strong><strong>0 = 25 cos θ</strong><p>ด้านซ้ายของสมการเท่ากับ 0 ดังนั้นก้อนด้านขวา <b>25 cos θ ต้องเท่ากับ 0</b> ด้วย และเพราะ 25 ไม่ใช่ 0 จึงต้องให้ <b>cos θ = 0</b></p>'+table+'<strong>จากตาราง cos 90° = 0 ดังนั้น θ = 90°</strong>';if(boxes[1])boxes[1].innerHTML='<b>หามุมระหว่าง -A กับ C</b><div class="magnitude-lines"><span>|-A| = √((-4)² + 3²) = √25 = 5</span><span>|C| = √(3² + 4²) = √25 = 5</span></div><span>(-A) · C = |-A||C| cos θ</span><strong>0 = (5)(5) cos θ</strong><strong>0 = 25 cos θ</strong><p>ด้านซ้ายของสมการเท่ากับ 0 ดังนั้นก้อนด้านขวา <b>25 cos θ ต้องเท่ากับ 0</b> ด้วย และเพราะ 25 ไม่ใช่ 0 จึงต้องให้ <b>cos θ = 0</b></p>'+table+'<strong>จากตาราง cos 90° = 0 ดังนั้น θ = 90°</strong>';const old=document.querySelector('.q4-trig');if(old)old.remove()}

function addCosSubstitutionToDotSteps(){const cards=document.querySelectorAll('.q4-step-card');if(cards[1])cards[1].querySelector('.q4-calc').insertAdjacentHTML('beforeend','<div class="cos-in-step"><b>แทนค่าในสูตรที่เชื่อมกับมุม</b><span>A · B = |A||B| cos θ</span><span>0 = (5)(5) cos θ</span><span>0 = 25 cos θ</span><strong>cos θ = 0 → θ = 90°</strong></div>');if(cards[3])cards[3].querySelector('.q4-calc').insertAdjacentHTML('beforeend','<div class="cos-in-step"><b>แทนค่าในสูตรที่เชื่อมกับมุม</b><span>(-A) · C = |-A||C| cos θ</span><span>0 = (5)(5) cos θ</span><span>0 = 25 cos θ</span><strong>cos θ = 0 → θ = 90°</strong></div>')}

function removeCosExplanationBlock(){const block=document.querySelector('.q4-clean .cos-proof');if(block)block.remove()}

function restoreOriginalCosBlock(){const proof=document.querySelector('.q4-clean .cos-proof');if(!proof)return;proof.innerHTML='<b>ที่มา: ทำไม dot product = 0 จึงรู้ว่าเวกเตอร์ตั้งฉาก</b><div class="dot-origin original-cos"><p><b>1. สูตรบอกว่า</b><br><strong>A · B = |A||B| cos θ</strong></p><p><b>2. ตรวจขนาดของ A และ B ก่อน</b><br>ถ้า A และ B ไม่ใช่เวกเตอร์ (0,0) ขนาดของทั้งสองเวกเตอร์จะ <strong>ไม่เป็น 0</strong><br><small>ดังนั้น |A||B| ไม่ใช่ตัวที่ทำให้ผลคูณเป็นศูนย์</small><br>เมื่อ A · B = 0 ตัวที่ทำให้ผลเป็นศูนย์จึงต้องเป็น <strong>cos θ = 0</strong></p><p><b>3. เปิดตารางดู</b><br>มุมที่ทำให้ cos มีค่าเป็น 0 คือ <strong>90°</strong></p><p><b>4. สรุปง่าย ๆ</b><br><strong>dot product = 0 → มุม 90° → ตั้งฉากกัน</strong></p></div>'}

function renameDotProductFormulas(){const formulas=document.querySelectorAll('.formula-before');if(formulas[0])formulas[0].innerHTML='<small>จากการคำนวณด้านบน ได้ A = (4, -3) และ B = (-3, -4)</small><b>สูตร Dot Product ที่เชื่อมกับมุม:</b> A · B = |A||B| cos θ';if(formulas[1])formulas[1].innerHTML='<small>จากการคำนวณด้านบน ได้ -A = (-4, 3) และ C = (3, 4)</small><b>สูตร Dot Product ที่เชื่อมกับมุม:</b> (-A) · C = |-A||C| cos θ'}

function removePairCosCards(){const pairs=document.querySelector('.pair-cos');if(pairs)pairs.remove()}

function removeMagnitudeNumbers(){const box=document.querySelector('.dot-origin');if(box){const ps=box.querySelectorAll('p');if(ps[1])ps[1].innerHTML='<b>2. ตรวจขนาดของ A และ B ก่อน</b><br>ถ้า A และ B ไม่ใช่เวกเตอร์ (0,0) ขนาดของทั้งสองเวกเตอร์จะ <strong>ไม่เป็น 0</strong><br><small>ดังนั้น |A||B| ไม่ใช่ตัวที่ทำให้ผลคูณเป็นศูนย์</small><br>เมื่อ A · B = 0 ตัวที่ทำให้ผลเป็นศูนย์จึงต้องเป็น <strong>cos θ = 0</strong>'}const pairs=document.querySelectorAll('.pair-cos section');if(pairs[0])pairs[0].innerHTML='<h3>คู่ที่ 1: A กับ B</h3><p>A · B = |A||B| cos θ</p><p>A · B = 0 และ |A||B| ไม่เป็น 0</p><p><strong>cos θ = 0 → θ = 90°</strong></p><span>ดังนั้น A ⟂ B</span>';if(pairs[1])pairs[1].innerHTML='<h3>คู่ที่ 2: -A กับ C</h3><p>(-A) · C = |-A||C| cos θ</p><p>(-A) · C = 0 และ |-A||C| ไม่เป็น 0</p><p><strong>cos θ = 0 → θ = 90°</strong></p><span>ดังนั้น -A ⟂ C</span>'}

function setupManualQ4Drawing(){const actions=document.querySelector('.action-row');actions.insertAdjacentHTML('beforebegin','<section class="manual-q4-draw"><h3>ฝึกวาดกราฟด้วยตัวเอง</h3><p>กราฟให้ A และ -A มาแล้ว ขั้นที่ 1 คลิกวาด B ที่ตั้งฉากกับ A จากนั้นคลิกวาด C ที่ตั้งฉากกับ -A</p><div class="graph-coord" id="manualQ4Coord">รอวาด B</div><canvas id="manualQ4Canvas" width="600" height="600"></canvas><div class="graph-result" id="manualQ4Result">ขั้นที่ 1/2: คลิกจุดปลายของ B</div></section>');const c=document.querySelector('#manualQ4Canvas'),x=c.getContext('2d'),o=300,s=50,given=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff']],targets=[[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']];let stage=0,drawn=[...given],preview=null;const arrow=v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);x.strokeStyle=x.fillStyle=v[3];x.lineWidth=8;x.beginPath();x.moveTo(o,o);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));x.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));x.closePath();x.fill();x.beginPath();x.arc(ex,ey,8,0,Math.PI*2);x.fill();x.font='800 16px Chakra Petch';x.textAlign=v[0]>=0?'right':'left';x.fillText(v[2],ex+(v[0]>=0?-10:10),ey-13)};const draw=()=>{x.fillStyle='#06172f';x.fillRect(0,0,600,600);for(let i=-5;i<=5;i++){const p=o+i*s;x.strokeStyle=i===0?'#e5efff':'rgba(102,160,213,.25)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,25);x.lineTo(p,575);x.moveTo(25,p);x.lineTo(575,p);x.stroke();if(i!==0){x.fillStyle='#c6dcf1';x.font='13px Chakra Petch';x.textAlign='center';x.fillText(i,p,o+18);x.textAlign='right';x.fillText(-i,o-8,p+4)}}drawn.forEach(arrow);if(preview)arrow(preview)};c.onclick=e=>{if(stage>=2)return;const r=c.getBoundingClientRect(),gx=Math.max(-5,Math.min(5,Math.round((((e.clientX-r.left)*600/r.width)-o)/s))),gy=Math.max(-5,Math.min(5,Math.round((o-((e.clientY-r.top)*600/r.height))/s))),t=targets[stage],ok=gx===t[0]&&gy===t[1],result=document.querySelector('#manualQ4Result');preview=[gx,gy,t[2],ok?t[3]:'#ff7184'];document.querySelector('#manualQ4Coord').textContent=`เลือก (${gx}, ${gy})`;if(ok){drawn.push(t);preview=null;stage++;beep(true);result.className='graph-result correct';result.textContent=stage===2?'✓ วาด B และ C ครบแล้ว! ทั้งสองคู่ตั้งฉากกัน':'✓ B ถูกต้อง ขั้นที่ 2/2: คลิกวาด C';document.querySelector('#manualQ4Coord').textContent=stage===2?'วาดครบแล้ว':'รอวาด C'}else{beep(false);result.className='graph-result wrong';result.textContent=`จุด (${gx}, ${gy}) ยังไม่ตั้งฉากตามตัวอย่าง ลองใหม่`};draw()};draw()}

function simplifyDotOriginText(){const box=document.querySelector('.dot-origin');if(!box)return;box.innerHTML='<p><b>1. สูตรบอกว่า</b><br><strong>A · B = |A||B| cos θ</strong></p><p><b>2. ตรวจขนาดของ A และ B ก่อน</b><br>|A| = 5 และ |B| = 5 จึงได้ <strong>|A||B| = 25 ซึ่งไม่ใช่ 0</strong><br><small>ขนาดเวกเตอร์จะเป็น 0 ได้เฉพาะเวกเตอร์ศูนย์ (0,0) เท่านั้น แต่ A และ B ในข้อนี้ไม่ใช่ (0,0)</small><br>เมื่อ A · B = 0 และ 25 ไม่ใช่ 0 ตัวที่ทำให้ผลเป็นศูนย์จึงต้องเป็น <strong>cos θ = 0</strong></p><p><b>3. เปิดตารางดู</b><br>มุมที่ทำให้ cos มีค่าเป็น 0 คือ <strong>90°</strong></p><p><b>4. สรุปง่าย ๆ</b><br><strong>dot product = 0 → มุม 90° → ตั้งฉากกัน</strong></p>'}

function formatPerpendicularSwaps(){const cards=document.querySelectorAll('.q4-step-card');if(cards[0])cards[0].querySelector('.q4-calc').innerHTML='<div class="swap-lines"><span>A = (x, y) = (4, -3)</span><i>↓ สลับตำแหน่ง x กับ y</i><span>(y, x) = (-3, 4)</span><i>↓ ใส่เครื่องหมายลบหน้า x เดิม ซึ่งอยู่ตำแหน่งหลัง</i><span>(y, -x) = (-3, -4)</span><strong>B = (-3, -4)</strong></div>';if(cards[2])cards[2].querySelector('.q4-calc').innerHTML='<div class="swap-lines"><span>-A = (x, y) = (-4, 3)</span><i>↓ สลับตำแหน่ง x กับ y</i><span>(y, x) = (3, -4)</span><i>↓ ใส่เครื่องหมายลบหน้า x เดิม ซึ่งอยู่ตำแหน่งหลัง</i><span>(y, -x) = (3, 4)</span><strong>C = (3, 4)</strong></div>'}

function explainDotProductOrigin(){const proof=document.querySelector('.q4-clean .cos-proof');if(!proof)return;const heading=proof.querySelector(':scope > b');if(heading)heading.textContent='ที่มา: ทำไม dot product = 0 จึงรู้ว่าเวกเตอร์ตั้งฉาก';heading.insertAdjacentHTML('afterend','<div class="dot-origin"><p>สูตร dot product ที่เชื่อมกับมุมคือ <strong>A · B = |A||B| cos θ</strong></p><p>เมื่อ A และ B ไม่ใช่เวกเตอร์ศูนย์ ค่า <strong>|A||B| จะไม่เป็น 0</strong></p><p>ดังนั้นถ้า <strong>A · B = 0</strong> ตัวที่ทำให้ผลคูณเป็นศูนย์ต้องเป็น <strong>cos θ = 0</strong></p><p>จากตารางตรีโกณมิติ <strong>cos 90° = 0</strong> จึงสรุปว่า <strong>θ = 90°</strong> และเวกเตอร์ตั้งฉากกัน</p></div>')}

function replaceCosProofWithValues(){const proof=document.querySelector('.q4-clean .cos-proof');if(!proof)return;proof.innerHTML='<b>แทนค่าจริงเพื่อหามุมของแต่ละคู่</b><div class="pair-cos"><section><h3>คู่ที่ 1: A กับ B</h3><p>|A| = √(4² + (-3)²) = 5</p><p>|B| = √((-3)² + (-4)²) = 5</p><p>A · B = |A||B| cos θ</p><p>0 = (5)(5) cos θ</p><p>0 = 25 cos θ</p><p><strong>cos θ = 0 → θ = 90°</strong></p><span>ดังนั้น A ⟂ B</span></section><section><h3>คู่ที่ 2: -A กับ C</h3><p>|-A| = √((-4)² + 3²) = 5</p><p>|C| = √(3² + 4²) = 5</p><p>(-A) · C = |-A||C| cos θ</p><p>0 = (5)(5) cos θ</p><p>0 = 25 cos θ</p><p><strong>cos θ = 0 → θ = 90°</strong></p><span>ดังนั้น -A ⟂ C</span></section></div>'}

function labelNegativeA(){const result=document.querySelector('.find-negative-a strong');if(result)result.textContent='ดังนั้น -A = (-4, 3)'}

function finalizeQ4Display(){const details=document.querySelector('.q4-trig'),next=document.querySelector('#nextBtn'),check=document.querySelector('#checkCleanQ4');if(details)details.remove();if(next){next.disabled=false;next.innerHTML='พร้อมสู้บอส <span>⚔</span>'}if(check)check.addEventListener('click',()=>{const bx=+document.querySelector('#cleanBx').value,by=+document.querySelector('#cleanBy').value,cx=+document.querySelector('#cleanCx').value,cy=+document.querySelector('#cleanCy').value,out=document.querySelector('#cleanQ4Result'),ok=bx===-3&&by===-4&&cx===3&&cy===4;out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?'✓ ถูกต้อง! แสดงกราฟ A, -A, B และ C ด้านล่างแล้ว':'ยังไม่ถูก คำตอบตัวอย่างคือ B = (-3, -4) และ C = (3, 4)';if(ok)drawCleanQ4Graph()})}

function renderQ5Lesson(){const root=document.querySelector('#questContent');root.innerHTML=`
  <p class="section-icon">◎ TRAINING CAMP · ด่าน 5</p>
  <h1 class="content-title">จากเวกเตอร์ทั่วไป สู่เวกเตอร์หนึ่งหน่วย</h1>
  <p class="lead">ก่อนต่อสู้กับจักรพรรดิยูนิต เราจะเรียนรู้วิธีสร้างเวกเตอร์หนึ่งหน่วย ใช้ dot product คำนวณความสัมพันธ์ และใช้ cos⁻¹ หามุมระหว่าง B กับ C</p>
  <section class="q5-course">
    <article class="q5-card"><span class="q5-number">1</span><div><h2>เวกเตอร์หนึ่งหน่วยคืออะไร?</h2><p>เวกเตอร์ที่มีความยาวหรือขนาดเท่ากับ <b>1 หน่วยเสมอ</b></p><table><thead><tr><th>ชนิดเวกเตอร์</th><th>สัญลักษณ์</th><th>ขนาด/ความยาว</th></tr></thead><tbody><tr><td>เวกเตอร์ทั่วไป</td><td><i class="math-vector">v</i></td><td>เท่าไรก็ได้</td></tr><tr class="q5-key"><td>เวกเตอร์หนึ่งหน่วย</td><td>v̂</td><td>เท่ากับ 1 เสมอ</td></tr></tbody></table></div></article>
    <article class="q5-card"><span class="q5-number">2</span><div><h2>สูตรหาเวกเตอร์หนึ่งหน่วย (Unit Vector)</h2><div class="q5-formulas unit-first"><section class="unit-main-formula"><small>สูตรหลัก: ทำเวกเตอร์ให้มีขนาดเท่ากับ 1</small><div class="math-eq"><b>v̂ =</b><span class="math-fraction"><i class="math-vector">v</i><i>|<span class="math-vector">v</span>|</i></span></div><p><b>v̂</b> คือเวกเตอร์หนึ่งหน่วย</p></section><div class="unit-formula-link"><b>ค่า |<i class="math-vector">v</i>| ในตัวหาร</b><i>→</i><small>คำนวณด้วยสูตรขนาด</small></div><section class="magnitude-formula"><small>สูตรหาขนาดของเวกเตอร์เดิม</small><div class="math-eq"><b>|<i class="math-vector">v</i>| = √(vₓ² + vᵧ²)</b></div><p><b>|<i class="math-vector">v</i>|</b> คือขนาดหรือความยาวของเวกเตอร์เดิม</p></section></div><ol class="unit-steps"><li><b>หาขนาดก่อน:</b> คำนวณ |<i class="math-vector">v</i>| จาก √(vₓ² + vᵧ²)</li><li><b>นำไปหาร:</b> นำพิกัด x และ y ของ <i class="math-vector">v</i> หารด้วย |<i class="math-vector">v</i>|</li><li><b>ได้คำตอบ:</b> ผลลัพธ์คือ v̂ ซึ่งมีขนาดเท่ากับ 1</li></ol></div></article>
    <article class="q5-dot-formulas"><h2>องค์ประกอบของสูตร Dot Product ทั้ง 2 แบบ</h2><div class="q5-dot-grid"><section><header><span>สูตรที่ 1</span><b>รู้พิกัดของเวกเตอร์</b></header><div class="formula">B · C = BₓCₓ + BᵧCᵧ</div><ul><li><strong>Bₓ</strong> คือพิกัดแกน x ของ B</li><li><strong>Bᵧ</strong> คือพิกัดแกน y ของ B</li><li><strong>Cₓ</strong> คือพิกัดแกน x ของ C</li><li><strong>Cᵧ</strong> คือพิกัดแกน y ของ C</li></ul><p>นำพิกัดแกนเดียวกันมาคูณกัน แล้วบวกผลลัพธ์ทั้งสองแกน</p></section><section><header><span>สูตรที่ 2</span><b>รู้ขนาดและมุม</b></header><div class="formula">B · C = |B||C| cos θ</div><ul><li><strong>|B|</strong> คือขนาดหรือความยาวของ B</li><li><strong>|C|</strong> คือขนาดหรือความยาวของ C</li><li><strong>θ</strong> คือมุมที่เล็กที่สุดระหว่าง B กับ C</li><li><strong>cos θ</strong> บอกความสัมพันธ์ของทิศทาง</li></ul><p>สูตรทั้งสองให้ค่า dot product เท่ากัน เลือกใช้สูตรที่ตรงกับข้อมูลที่โจทย์ให้</p></section></div></article>
    <article class="q5-method"><header><span>วิธีที่ 1</span><h2>ใช้ค่าเวกเตอร์เต็ม ๆ — ไม่รู้คุณสมบัติของ Unit Vector</h2></header><div class="q5-method-given"><small>โจทย์กำหนดให้</small><strong>B = (-21, 20)</strong><strong>C = (21, -20)</strong><p>จงคำนวณ dot product และหามุม θ ระหว่างเวกเตอร์ B กับ C</p></div><div class="q5-steps"><section><i>1</i><div><b>หาผลคูณจุด</b><p class="formula-reason">เรารู้พิกัดของเวกเตอร์ <strong>B = (-21, 20)</strong> และ <strong>C = (21, -20)</strong> จึงใช้ dot product สูตรที่ 1 สำหรับกรณีที่รู้ส่วนประกอบ x และ y</p><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>B · C = BₓCₓ + BᵧCᵧ</strong></div><div><small>② แทนพิกัดลงในสูตร</small><strong>B · C = (-21)(21) + (20)(-20)</strong></div><div><small>③ คูณแต่ละคู่</small><strong>B · C = -441 + (-400)</strong></div><div><small>④ บวกผลลัพธ์</small><strong>B · C = -441 - 400</strong></div><div class="final"><small>⑤ คำตอบ</small><strong>B · C = -841</strong></div></div></div></section><section><i>2</i><div><b>หาขนาด</b><p>|B| = 29 และ |C| = 29</p></div></section><section><i>3</i><div><b>แทนค่าสูตรโคไซน์</b><p>cos θ = (B · C) / (|B||C|)</p><p>= -841 / (29 × 29) = <strong>-1</strong></p></div></section><section><i>4</i><div><b>หามุม</b><p>θ = cos⁻¹(-1) = <strong>180°</strong></p></div></section></div></article>
    <article class="q5-method alt"><header><span>วิธีที่ 2</span><h2>ใช้คุณสมบัติของเวกเตอร์หนึ่งหน่วย</h2></header><p>เรารู้คุณสมบัติว่า <b>เวกเตอร์หนึ่งหน่วยมีขนาดเท่ากับ 1</b> ดังนั้น |B̂| = |Ĉ| = 1 ทำให้ส่วนของขนาดในสูตรลดเหลือ 1 × 1</p><div class="q5-equation">B̂ · Ĉ = (-21/29)(21/29) + (20/29)(-20/29)<br>= (-441 - 400) / 841<br>= <strong>-1</strong></div><div class="q5-equation">cos θ = (B̂ · Ĉ) / (|B̂||Ĉ|)<br>= -1 / (1 × 1) = -1<br>θ = cos⁻¹(-1) = <strong>180°</strong></div></article>
    <article class="q5-cos-table"><h2>ตารางหามุมด้วย arccos หรือ cos⁻¹</h2><p>เมื่อคำนวณค่า dot product แล้ว ให้หามุมด้วยสูตร <b>θ = cos⁻¹(ค่า dot product)</b> โดย cos⁻¹ อ่านว่า “อาร์กคอส” และไม่ได้หมายถึง 1/cos</p><table><thead><tr><th>ค่า dot product</th><th>แทนค่าใน cos⁻¹</th><th>มุม θ</th><th>ลักษณะของมุมและทิศ</th></tr></thead><tbody><tr><td><strong>1</strong></td><td>cos⁻¹(1)</td><td><b>0°</b></td><td><span class="angle-picture same"><i></i><i></i></span>มุมศูนย์ · ทิศเดียวกัน</td></tr><tr><td><strong>0</strong></td><td>cos⁻¹(0)</td><td><b>90°</b></td><td><span class="angle-picture right"><i></i><i></i></span>มุมฉาก · ตั้งฉากกัน</td></tr><tr class="key"><td><strong>-1</strong></td><td>cos⁻¹(-1)</td><td><b>180°</b></td><td><span class="angle-picture opposite"><i></i><i></i></span>มุมตรง · ทิศตรงข้ามกัน</td></tr></tbody></table><p class="q5-table-note">ในโจทย์นี้ B̂ · Ĉ = -1 ดังนั้น <b>θ = cos⁻¹(-1) = 180°</b></p></article>
    <article class="q5-practice"><small class="practice-badge">โจทย์ฝึกก่อนเจอโจทย์จริง</small><h2>จงคำนวณ dot product ระหว่าง unit vector ของ B กับ unit vector ของ C</h2><div class="q5-practice-given"><span>กำหนดให้</span><strong>B = (3, 4)</strong><strong>C = (-3, -4)</strong></div><p>ทำตามขั้นตอนเดียวกับโจทย์จริง: หาขนาด → ทำเป็น unit vector → คำนวณ dot product → หามุม</p><div class="q5-practice-fields"><label>|B| <input id="q5MagP" inputmode="decimal"></label><label>|C| <input id="q5MagQ" inputmode="decimal"></label><label>B̂ · Ĉ <input id="q5Dot" inputmode="decimal"></label><label>θ (องศา) <input id="q5Angle" inputmode="decimal"></label></div><button id="checkQ5Practice">ตรวจคำตอบ</button><p id="q5PracticeResult"></p></article>
  </section>
  <div class="action-row"><button class="secondary-btn" id="prevBtn">← ห้องเตรียมตัว</button><button class="primary-btn" id="nextBtn" disabled>ทำแบบฝึกให้ถูกก่อน 🔒</button></div>`;
  const magnitudeStep=root.querySelector('.q5-steps section:nth-child(2)>div');magnitudeStep.innerHTML=`<b>หาขนาดของ B และ C</b><p class="formula-reason">ใช้สูตรขนาดเวกเตอร์ <strong>|V| = √(Vₓ² + Vᵧ²)</strong> แล้วแทนพิกัดของ B และ C แยกกัน</p><div class="magnitude-columns"><div><h3>ขนาดของ B = (-21, 20)</h3><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>|B| = √(Bₓ² + Bᵧ²)</strong></div><div><small>② แทนพิกัด</small><strong>|B| = √((-21)² + 20²)</strong></div><div><small>③ ยกกำลังสอง</small><strong>|B| = √(441 + 400)</strong></div><div><small>④ บวกจำนวนใต้ราก</small><strong>|B| = √841</strong></div><div class="final"><small>⑤ ถอดราก</small><strong>|B| = 29</strong></div></div></div><div><h3>ขนาดของ C = (21, -20)</h3><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>|C| = √(Cₓ² + Cᵧ²)</strong></div><div><small>② แทนพิกัด</small><strong>|C| = √(21² + (-20)²)</strong></div><div><small>③ ยกกำลังสอง</small><strong>|C| = √(441 + 400)</strong></div><div><small>④ บวกจำนวนใต้ราก</small><strong>|C| = √841</strong></div><div class="final"><small>⑤ ถอดราก</small><strong>|C| = 29</strong></div></div></div></div>`;
  root.querySelectorAll('.magnitude-columns .vertical-calculation').forEach(calc=>calc.querySelector('.final').insertAdjacentHTML('beforebegin','<button class="root-help-btn">√ ดูวิธีถอดรากแบบตั้งหาร</button>'));root.insertAdjacentHTML('beforeend','<div class="root-help-modal" id="rootHelpModal" hidden><div class="root-help-dialog"><button class="root-help-close" id="rootHelpClose">×</button><small>วิธีถอดรากที่เป็นขั้นตอน ไม่ต้องเดาคำตอบ</small><h2>ถอด √841 แบบตั้งหาร</h2><div class="root-help-rule"><b>เริ่มจากจับคู่ตัวเลขจากขวา</b><span class="root-pairs">8 │ 41</span><span>แต่ละคู่จะให้คำตอบครั้งละ 1 หลัก</span></div><div class="root-help-steps detailed"><p><i>1</i><span><b>ดูคู่แรกคือ 8</b><br>จำนวนเต็มที่ยกกำลังสองแล้วไม่เกิน 8 มากที่สุดคือ 2 เพราะ 2² = 4<br>เขียน 2 เป็นหลักแรก แล้วเหลือเศษ 8 - 4 = 4</span></p><p><i>2</i><span><b>ดึงคู่ถัดไป 41 ลงมา</b><br>นำ 41 ต่อท้ายเศษ 4 จึงได้ 441</span></p><p><i>3</i><span><b>นำคำตอบเดิม 2 มาคูณ 2</b><br>2 × 2 = 4 แล้วเขียนเป็นรูป 4_ × _</span></p><p><i>4</i><span><b>หาตัวเลขใส่ในช่องว่าง</b><br>เลือก 9 เพราะ 49 × 9 = 441 พอดี</span></p><p><i>5</i><span><b>นำ 9 ไปต่อท้าย 2</b><br>จึงได้คำตอบเป็น 29 และไม่มีเศษเหลือ</span></p></div><div class="root-long-result"><span>คู่ตัวเลข</span><b>8 │ 41</b><span>หลักคำตอบ</span><b>2 │ 9</b><strong>√841 = 29</strong></div><div class="root-check">ตรวจย้อนกลับ: 29² = 29 × 29 = 841 ✓</div><p class="root-note">เครื่องหมาย √ หมายถึงรากที่สองหลัก จึงเลือกคำตอบที่ไม่เป็นลบ</p></div></div>');const rootModal=document.querySelector('#rootHelpModal'),openRootHelp=()=>{rootModal.hidden=false;document.body.style.overflow='hidden'},closeRootHelp=()=>{rootModal.hidden=true;document.body.style.overflow=''};root.querySelectorAll('.root-help-btn').forEach(btn=>btn.onclick=openRootHelp);document.querySelector('#rootHelpClose').onclick=closeRootHelp;rootModal.onclick=e=>{if(e.target===rootModal)closeRootHelp()};
  const methodSteps=[...root.querySelectorAll('.q5-steps>section')];methodSteps[0].before(methodSteps[1]);const orderedSteps=[...root.querySelectorAll('.q5-steps>section')];orderedSteps[1].querySelector(':scope>div').innerHTML=`<b>หาเวกเตอร์หนึ่งหน่วย (Unit Vector)</b><p class="formula-reason">เมื่อรู้ |B| = |C| = 29 แล้ว ใช้สูตร <strong>v̂ = v⃗ / |v⃗|</strong> โดยนำพิกัดทุกตัวหารด้วยขนาดของเวกเตอร์นั้น</p><div class="magnitude-columns unit-vector-columns"><div><h3>หา B̂ จาก B = (-21, 20)</h3><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>B̂ = B / |B|</strong></div><div><small>② แทนเวกเตอร์และขนาด</small><strong>B̂ = (-21, 20) / 29</strong></div><div><small>③ หารพิกัดทุกตัวด้วย 29</small><strong>B̂ = (-21/29, 20/29)</strong></div><div class="final"><small>④ เวกเตอร์หนึ่งหน่วยของ B</small><strong>B̂ = (-21/29, 20/29)</strong></div></div></div><div><h3>หา Ĉ จาก C = (21, -20)</h3><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>Ĉ = C / |C|</strong></div><div><small>② แทนเวกเตอร์และขนาด</small><strong>Ĉ = (21, -20) / 29</strong></div><div><small>③ หารพิกัดทุกตัวด้วย 29</small><strong>Ĉ = (21/29, -20/29)</strong></div><div class="final"><small>④ เวกเตอร์หนึ่งหน่วยของ C</small><strong>Ĉ = (21/29, -20/29)</strong></div></div></div></div>`;orderedSteps[2].querySelector(':scope>div').innerHTML=`<b>หาผลคูณจุดของเวกเตอร์หนึ่งหน่วย</b><p class="formula-reason">ตอนนี้เรารู้พิกัดของ <strong>B̂</strong> และ <strong>Ĉ</strong> แล้ว จึงใช้ dot product สูตรส่วนประกอบ</p><div class="vertical-calculation"><div><small>① เขียนสูตร</small><strong>B̂ · Ĉ = B̂ₓĈₓ + B̂ᵧĈᵧ</strong></div><div><small>② แทนพิกัด</small><strong>B̂ · Ĉ = (-21/29)(21/29) + (20/29)(-20/29)</strong></div><div><small>③ คูณเศษและส่วน</small><strong>B̂ · Ĉ = -441/841 + (-400/841)</strong></div><div><small>④ รวมเศษส่วน</small><strong>B̂ · Ĉ = -841/841</strong></div><div class="final"><small>⑤ คำตอบ</small><strong>B̂ · Ĉ = -1</strong></div></div>`;orderedSteps.forEach((section,index)=>section.querySelector(':scope>i').textContent=index+1);
  document.querySelector('#prevBtn').onclick=()=>{state.step=0;renderQuest()};document.querySelector('#checkQ5Practice').onclick=()=>{const vals=['q5MagP','q5MagQ','q5Dot','q5Angle'].map(id=>document.querySelector('#'+id).value.trim()),out=document.querySelector('#q5PracticeResult'),next=document.querySelector('#nextBtn');if(vals.some(v=>v==='')){out.className='practice-bad';out.textContent='กรอกคำตอบให้ครบทั้ง 4 ช่องก่อนนะ';return}const ok=+vals[0]===5&&+vals[1]===5&&+vals[2]===-1&&+vals[3]===180;out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?'✓ ถูกต้อง! |B| = |C| = 5 เมื่อทำเป็น unit vector แล้ว B̂ · Ĉ = -1 จึงได้ θ = 180°':'ยังไม่ถูก ลองหาขนาดของ B และ C ก่อน แล้วหารพิกัดทุกตัวด้วยขนาด';beep(ok);if(ok){next.disabled=false;next.innerHTML='พร้อมสู้จักรพรรดิยูนิต <span>⚔</span>'}};document.querySelector('#nextBtn').onclick=()=>{if(!document.querySelector('#nextBtn').disabled){state.step=2;renderQuest()}}
}

function simplifyQ4Lesson(){const title=document.querySelector('.content-title'),lead=document.querySelector('.content-title + .lead'),proof=document.querySelector('.q4-clean .cos-proof'),given=document.querySelector('.q4-given'),cards=document.querySelectorAll('.q4-step-card');if(title)title.textContent='ฝึกหา B ที่ตั้งฉากกับ A และ C ที่ตั้งฉากกับ -A';if(lead)lead.remove();if(given)given.querySelector('span').outerHTML='<div class="find-negative-a"><b>ทบทวนจากด่าน 2: หา -A โดยคูณทุกพิกัดด้วย -1</b><span>A = (4, -3)</span><i>↓ คูณด้วย -1 ทั้ง x และ y</i><span>-A = -(4, -3)</span><span>= ((-1)×4, (-1)×(-3))</span><strong>= (-4, 3)</strong></div>';if(cards[1])cards[1].querySelector('.q4-calc').insertAdjacentHTML('afterbegin','<span class="formula-before">สูตรก่อนแทนค่า: A · B = AₓBₓ + AᵧBᵧ</span>');if(cards[3])cards[3].querySelector('.q4-calc').insertAdjacentHTML('afterbegin','<span class="formula-before">สูตรก่อนแทนค่า: (-A) · C = (-A)ₓCₓ + (-A)ᵧCᵧ</span>');if(proof)proof.innerHTML='<b>ทำไม dot product = 0 จึงแปลว่ามุม 90°?</b><div class="easy-cos"><p><i>1</i><span>สูตรแบบใช้มุมคือ <strong>A · B = |A||B| cos θ</strong></span></p><p><i>2</i><span>ในข้อนี้ A และ B มีความยาว จึงรู้ว่า <strong>|A||B| ไม่ใช่ 0</strong></span></p><p><i>3</i><span>แต่คำนวณได้ <strong>A · B = 0</strong> ดังนั้นตัวที่ทำให้ผลเป็น 0 ต้องเป็น <strong>cos θ</strong></span></p><p><i>4</i><span>ค่ามุมที่ทำให้ <strong>cos θ = 0</strong> คือ <strong>θ = 90°</strong></span></p></div><strong>สรุป: dot product = 0 → มุม 90° → เวกเตอร์ตั้งฉากกัน</strong>'}

function renderQ4Lesson(){const root=document.querySelector('#questContent');root.innerHTML=`<p class="section-icon">◎ TRAINING CAMP · ด่าน 4</p><h1 class="content-title">ฝึกหา B และ C ที่ตั้งฉาก</h1><p class="lead">หน้านี้ใช้ชื่อ A, -A, B และ C เหมือนโจทย์จริงทุกอย่าง แต่เปลี่ยนพิกัดให้เล็กลงเพื่อฝึกทำ</p><section class="q4-clean"><div class="q4-given"><small>โจทย์ฝึกกำหนดให้</small><strong>A = (4, -3)</strong><span>กลับทุกเครื่องหมาย → -A = (-4, 3)</span></div><div class="q4-rule"><b>กฎเดียวที่ใช้</b><strong>ถ้า (x, y) เวกเตอร์ตั้งฉากเลือกได้เป็น (y, -x)</strong><p>ตรวจคำตอบด้วย dot product: เวกเตอร์ตั้งฉากกันเมื่อผลคูณจุดเท่ากับ 0</p></div><article class="q4-step-card"><i>1</i><div><h3>หา B ที่ตั้งฉากกับ A</h3><p>A = (4, -3) ดังนั้นสลับตำแหน่งและกลับเครื่องหมาย x:</p><div class="q4-calc">(x, y) → (y, -x)<br>(4, -3) → <b>B = (-3, -4)</b></div></div></article><article class="q4-step-card"><i>2</i><div><h3>ตรวจว่า A ตั้งฉากกับ B จริงไหม</h3><div class="q4-calc">A · B = (4)(-3) + (-3)(-4)<br>= -12 + 12<br>= <b>0</b></div><p>จึงได้ A ⟂ B</p></div></article><article class="q4-step-card"><i>3</i><div><h3>หา C ที่ตั้งฉากกับ -A</h3><p>-A = (-4, 3) ใช้กฎเดิม:</p><div class="q4-calc">(x, y) → (y, -x)<br>(-4, 3) → <b>C = (3, 4)</b></div></div></article><article class="q4-step-card"><i>4</i><div><h3>ตรวจว่า -A ตั้งฉากกับ C จริงไหม</h3><div class="q4-calc">(-A) · C = (-4)(3) + (3)(4)<br>= -12 + 12<br>= <b>0</b></div><p>จึงได้ -A ⟂ C</p></div></article><div class="cos-proof"><b>เชื่อมกับมุม 90°</b><span>A · B = |A||B| cos θ = 0</span><span>ขนาดไม่เป็น 0 จึงได้ cos θ = 0</span><strong>cos 90° = 0 → θ = 90° → ตั้งฉาก</strong></div><div class="q4-practice-clean"><h3>ลองทำด้วยตัวเอง</h3><p>กรอกคำตอบจากตัวอย่างข้างบนให้ครบ แล้วกดตรวจ</p><div><label>Bₓ <input id="cleanBx" inputmode="decimal"></label><label>Bᵧ <input id="cleanBy" inputmode="decimal"></label><label>Cₓ <input id="cleanCx" inputmode="decimal"></label><label>Cᵧ <input id="cleanCy" inputmode="decimal"></label></div><button id="checkCleanQ4">ตรวจคำตอบและแสดงกราฟ</button><p id="cleanQ4Result"></p><canvas id="cleanQ4Graph" width="600" height="600"></canvas></div><details class="q4-trig"><summary>เปิดดูตาราง cos ที่ใช้กับ dot product</summary><div>cos 0° = 1 · cos 30° = √3/2 · cos 45° = √2/2 · cos 60° = 1/2 · <b>cos 90° = 0</b> · cos 180° = -1</div></details></section><div class="action-row"><button class="secondary-btn" id="prevBtn">← ห้องเตรียมตัว</button><button class="primary-btn" id="nextBtn" disabled>ทำแบบฝึกให้ถูกก่อน 🔒</button></div>`;document.querySelector('#prevBtn').onclick=()=>{state.step=0;renderQuest()};document.querySelector('#checkCleanQ4').onclick=()=>{const bx=+document.querySelector('#cleanBx').value,by=+document.querySelector('#cleanBy').value,cx=+document.querySelector('#cleanCx').value,cy=+document.querySelector('#cleanCy').value,ok=bx===-3&&by===-4&&cx===3&&cy===4,out=document.querySelector('#cleanQ4Result'),next=document.querySelector('#nextBtn');out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?'✓ ถูกต้อง! A · B = 0 และ (-A) · C = 0 กราฟแสดงมุมฉากทั้งสองคู่ด้านล่าง':'ยังไม่ถูก ลองไล่ตามขั้น 1-4 อีกครั้ง';beep(ok);if(ok){drawCleanQ4Graph();next.disabled=false;next.innerHTML='พร้อมสู้บอส <span>⚔</span>'}};document.querySelector('#nextBtn').onclick=()=>{if(!document.querySelector('#nextBtn').disabled){state.step=2;renderQuest()}}}

function drawCleanQ4Graph(){const c=document.querySelector('#cleanQ4Graph'),x=c.getContext('2d'),o=300,s=50,vs=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff'],[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']];x.fillStyle='#06172f';x.fillRect(0,0,600,600);for(let i=-5;i<=5;i++){const p=o+i*s;x.strokeStyle=i===0?'#e4efff':'rgba(100,157,211,.25)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,25);x.lineTo(p,575);x.moveTo(25,p);x.lineTo(575,p);x.stroke()}vs.forEach(v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);x.strokeStyle=x.fillStyle=v[3];x.lineWidth=9;x.shadowBlur=14;x.shadowColor=v[3];x.beginPath();x.moveTo(o,o);x.lineTo(ex,ey);x.stroke();x.shadowBlur=0;x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));x.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));x.closePath();x.fill()});const mark=(v1,v2)=>{const n1=Math.hypot(v1[0],v1[1]),n2=Math.hypot(v2[0],v2[1]),u=[v1[0]/n1,-v1[1]/n1],v=[v2[0]/n2,-v2[1]/n2],r=48,p1=[o+u[0]*r,o+u[1]*r],corner=[o+(u[0]+v[0])*r,o+(u[1]+v[1])*r],p2=[o+v[0]*r,o+v[1]*r],lx=o+(u[0]+v[0])*75,ly=o+(u[1]+v[1])*75;x.save();x.fillStyle='rgba(255,88,211,.25)';x.strokeStyle='#ff75dc';x.lineWidth=7;x.shadowBlur=20;x.shadowColor='#ff4fcf';x.beginPath();x.moveTo(o,o);x.lineTo(p1[0],p1[1]);x.lineTo(corner[0],corner[1]);x.lineTo(p2[0],p2[1]);x.closePath();x.fill();x.stroke();x.shadowBlur=0;x.fillStyle='#ff9be4';x.font='900 23px Chakra Petch';x.textAlign='center';x.fillText('90°',lx,ly+8);x.restore()};mark(vs[0],vs[2]);mark(vs[1],vs[3])}

const drawCleanQ4GraphBase=drawCleanQ4Graph;
drawCleanQ4Graph=function(){drawCleanQ4GraphBase();const c=document.querySelector('#cleanQ4Graph'),x=c.getContext('2d'),o=300,s=50,vs=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff'],[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']],offsets=[[-104,46],[104,-42],[104,44],[-104,-42]];vs.forEach((v,i)=>{const ex=o+v[0]*s,ey=o-v[1]*s,lx=ex+offsets[i][0],ly=ey+offsets[i][1],label=`${v[2]} (${v[0]}, ${v[1]})`;x.save();x.strokeStyle=v[3];x.lineWidth=2;x.setLineDash([6,5]);x.beginPath();x.moveTo(ex,ey);x.lineTo(lx,ly);x.stroke();x.setLineDash([]);x.shadowBlur=18;x.shadowColor=v[3];x.fillStyle='#ffffff';x.beginPath();x.arc(ex,ey,13,0,Math.PI*2);x.fill();x.fillStyle=v[3];x.beginPath();x.arc(ex,ey,8,0,Math.PI*2);x.fill();x.shadowBlur=0;x.font='800 16px Chakra Petch';const w=x.measureText(label).width+18;x.fillStyle='rgba(4,18,39,.94)';x.strokeStyle=v[3];x.lineWidth=3;x.beginPath();x.roundRect(lx-w/2,ly-17,w,34,9);x.fill();x.stroke();x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';x.fillText(label,lx,ly+1);x.restore()})};

const drawCleanQ4GraphWithPoints=drawCleanQ4Graph;
drawCleanQ4Graph=function(){drawCleanQ4GraphWithPoints();const c=document.querySelector('#cleanQ4Graph'),x=c.getContext('2d'),o=300,s=50;x.save();x.font='700 14px Chakra Petch';x.textBaseline='middle';for(let i=-5;i<=5;i++){if(i===0)continue;const p=o+i*s;x.fillStyle='#d6e8fb';x.textAlign='center';x.fillText(String(i),p,o+18);x.textAlign='right';x.fillText(String(-i),o-9,p)}x.fillStyle='#fff08a';x.font='800 14px Chakra Petch';x.textAlign='right';x.fillText('0',o-9,o+17);x.fillStyle='#9fe9ff';x.font='900 17px Chakra Petch';x.textAlign='center';x.fillText('x',574,o-14);x.fillText('y',o+16,27);const theta=(px,py)=>{x.fillStyle='rgba(45,5,48,.96)';x.strokeStyle='#ff78dc';x.lineWidth=3;x.beginPath();x.roundRect(px-55,py-19,110,38,10);x.fill();x.stroke();x.fillStyle='#ff9ee7';x.font='900 20px Chakra Petch';x.textAlign='center';x.fillText('θ = 90°',px,py+1)};theta(o+83,o-52);theta(o-86,o+55);x.restore()};

function setupPerpendicularReference(){const step2=document.querySelector('.lesson-step:nth-child(2) div');if(step2)step2.innerHTML='สำหรับ <b>P = (3, 2)</b> ให้ x = 3 และ y = 2 แล้วเลือก Q = (y, -x) จึงได้ <b>Q = (2, -3)</b>';const html=`<section class="perpendicular-reference"></section>`;document.querySelector('.action-row').insertAdjacentHTML('beforebegin',html)}

function drawQ4AnswerGraph(){const c=document.querySelector('#q4AnswerGraph');if(!c)return;const x=c.getContext('2d'),o=310,s=11,vs=[[-20,-21,'A','#49d9ff'],[20,21,'-A','#b678ff'],[-21,20,'B','#ffe067'],[21,-20,'C','#66f0b7']];x.fillStyle='#06172f';x.fillRect(0,0,620,620);for(let i=-25;i<=25;i+=5){const p=o+i*s;x.strokeStyle=i===0?'#dcecff':'rgba(100,158,211,.24)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,25);x.lineTo(p,595);x.moveTo(25,p);x.lineTo(595,p);x.stroke()}vs.forEach(v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);x.strokeStyle=x.fillStyle=v[3];x.lineWidth=7;x.beginPath();x.moveTo(o,o);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));x.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));x.closePath();x.fill();x.font='800 16px Chakra Petch';x.textAlign=v[0]>0?'right':'left';x.fillText(`${v[2]} (${v[0]}, ${v[1]})`,ex+(v[0]>0?-8:8),ey-10)})}

function renderGraphTrainer(q){
  const targets={1:[3,2],2:[-3,-2],3:[3,4],4:[2,-3],5:[-3,-4]},target=targets[q.id],labels={1:'วาด P = (3, 2)',2:'วาด -P = (-3, -2)',3:'วาด P = (3, 4)',4:'วาดเวกเตอร์ตั้งฉาก (2, -3)',5:'วาด Q = (-3, -4)'};
  document.querySelector('.action-row').insertAdjacentHTML('beforebegin',`<section class="graph-training"><div class="graph-head"><div><span>✎ ลงมือวาดจริง</span><h3>${labels[q.id]}</h3></div><div class="graph-coord" id="graphCoord">จุดปลาย: (?, ?)</div></div>${q.id===4?'<div class="swap-explainer"><b>ดูการสลับพิกัดทีละจุด</b><div><span class="p-chip">P = (<i>3</i>, <em>2</em>)</span><strong>① สลับตำแหน่ง</strong><span>(<em>2</em>, <i>3</i>)</span><strong>② กลับเครื่องหมายหนึ่งตัว</strong><span class="q-chip">Q = (<em>2</em>, <i>-3</i>)</span></div><p>จำง่าย: <em>y เดิมย้ายมาข้างหน้า</em> และ <i>x เดิมย้ายไปข้างหลังพร้อมเปลี่ยนเครื่องหมาย</i></p></div>':''}<p>คลิกช่องบนกราฟเพื่อกำหนดปลายลูกศร โดยจุดเริ่มอยู่ที่ (0, 0)</p><canvas id="practiceGraph" width="600" height="600"></canvas><div class="graph-result" id="graphResult">ลองคลิกตำแหน่งปลายเวกเตอร์</div></section>`);
  const c=document.querySelector('#practiceGraph'),x=c.getContext('2d'),size=600,step=50,origin=300;let pick=null;
  function practiceArrow(v,color,label){const ex=origin+v[0]*step,ey=origin-v[1]*step,ang=Math.atan2(ey-origin,ex-origin);x.strokeStyle=color;x.fillStyle=color;x.shadowBlur=18;x.shadowColor=color;x.lineWidth=7;x.beginPath();x.moveTo(origin,origin);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-22*Math.cos(ang-.52),ey-22*Math.sin(ang-.52));x.lineTo(ex-22*Math.cos(ang+.52),ey-22*Math.sin(ang+.52));x.closePath();x.fill();x.shadowBlur=0;x.font='700 17px Chakra Petch';x.textAlign=v[0]>=0?'left':'right';x.fillText(`${label} (${v[0]},${v[1]})`,ex+(v[0]>=0?9:-9),ey-10)}
  function rightAngleMark(){const n=Math.sqrt(13),a=[3/n,-2/n],b=[2/n,3/n],r=42;x.save();x.strokeStyle='#ff73dc';x.lineWidth=6;x.shadowBlur=16;x.shadowColor='#ff5bd3';x.beginPath();x.moveTo(origin+a[0]*r,origin+a[1]*r);x.lineTo(origin+(a[0]+b[0])*r,origin+(a[1]+b[1])*r);x.lineTo(origin+b[0]*r,origin+b[1]*r);x.stroke();x.shadowBlur=0;x.fillStyle='rgba(45,5,48,.96)';x.beginPath();x.roundRect(origin+42,origin+8,105,36,9);x.fill();x.strokeStyle='#ff73dc';x.lineWidth=2;x.stroke();x.fillStyle='#ffd9f5';x.font='800 18px Chakra Petch';x.textAlign='center';x.fillText('θ = 90°',origin+94,origin+32);x.restore()}
  function draw(){x.clearRect(0,0,size,size);const bg=x.createLinearGradient(0,0,size,size);bg.addColorStop(0,'#071a38');bg.addColorStop(1,'#0d2c55');x.fillStyle=bg;x.fillRect(0,0,size,size);for(let i=-5;i<=5;i++){const p=origin+i*step;x.strokeStyle=i===0?'#d4e7ff':'rgba(114,166,218,.28)';x.lineWidth=i===0?3:1;x.beginPath();x.moveTo(p,25);x.lineTo(p,575);x.stroke();x.beginPath();x.moveTo(25,p);x.lineTo(575,p);x.stroke();x.fillStyle='#adc7e8';x.font='16px Chakra Petch';x.textAlign='center';if(i!==0){x.fillText(i,p,origin+21);x.textAlign='right';x.fillText(-i,origin-9,p+5)}}x.fillStyle='#ffd75d';x.beginPath();x.arc(origin,origin,6,0,Math.PI*2);x.fill();if(q.id===2||q.id===4)practiceArrow([3,2],'#48d8ff','P');if(pick){const ok=pick[0]===target[0]&&pick[1]===target[1];practiceArrow(pick,ok?'#ffd75d':'#ff7b8b',q.id===2?'-P':q.id===4?'Q':'คำตอบ');if(q.id===4&&ok)rightAngleMark()}}
  c.onclick=e=>{const r=c.getBoundingClientRect();let gx=Math.round((((e.clientX-r.left)*600/r.width)-origin)/step),gy=Math.round((origin-((e.clientY-r.top)*600/r.height))/step);gx=Math.max(-5,Math.min(5,gx));gy=Math.max(-5,Math.min(5,gy));pick=[gx,gy];document.querySelector('#graphCoord').textContent=`จุดปลาย: (${gx}, ${gy})`;const ok=gx===target[0]&&gy===target[1],result=document.querySelector('#graphResult'),next=document.querySelector('#nextBtn');result.className=`graph-result ${ok?'correct':'wrong'}`;result.textContent=ok?`✓ ถูกต้อง! ลูกศรจาก (0,0) ไป (${gx},${gy})`:`ยังไม่ถูก ตอนนี้วาดไปที่ (${gx},${gy}) ลองนับช่องใหม่`;if(ok){beep(true);draw();if(q.id===2){delete next.dataset.ready;next.textContent='ตอบมุมให้ถูกก่อน 🔒';showAngleGate(c,x,origin,result,next,false)}else{next.dataset.ready='1';next.innerHTML='พร้อมสู้บอส <span>⚔</span>'}}else{delete next.dataset.ready;next.textContent='วาดกราฟให้ผ่านก่อน 🔒';beep(false);draw()}};draw()
}

function showAngleGate(canvas,ctx,origin,result,next,isBoss){
  const id=isBoss?'bossAngleGate':'practiceAngleGate';if(document.querySelector(`#${id}`))return;const panel=document.createElement('div');panel.id=id;panel.className='angle-gate';panel.innerHTML=`<div><b>∠ มุมระหว่างเวกเตอร์ทั้งสองเท่าไร?</b><small>ดูทิศของลูกศร P กับ -P แล้วกรอกหน่วยองศา</small></div><div class="angle-entry"><input type="number" inputmode="numeric" placeholder="?" aria-label="ค่ามุมระหว่างเวกเตอร์"><span>องศา</span><button>ตรวจมุม</button></div><p></p>`;result.insertAdjacentElement('afterend',panel);const input=panel.querySelector('input'),msg=panel.querySelector('p');
  const arc=label=>{ctx.save();const radius=isBoss?122:92,start=isBoss?Math.atan2(-21,20):Math.atan2(-2,3),end=start+Math.PI,angleColor='#ff72d2';ctx.beginPath();ctx.moveTo(origin,origin);ctx.arc(origin,origin,radius,start,end,false);ctx.closePath();ctx.fillStyle='rgba(255,75,197,.13)';ctx.fill();ctx.strokeStyle=angleColor;ctx.lineWidth=8;ctx.shadowBlur=18;ctx.shadowColor='#ff45c1';ctx.beginPath();ctx.arc(origin,origin,radius,start,end,false);ctx.stroke();ctx.shadowBlur=0;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(origin,origin);ctx.lineTo(origin+Math.cos(start)*radius,origin+Math.sin(start)*radius);ctx.moveTo(origin,origin);ctx.lineTo(origin+Math.cos(end)*radius,origin+Math.sin(end)*radius);ctx.stroke();const mid=(start+end)/2,lx=origin+Math.cos(mid)*(radius*.62),ly=origin+Math.sin(mid)*(radius*.62),bw=isBoss?126:112,bh=36;ctx.fillStyle='rgba(39,8,52,.95)';ctx.strokeStyle=angleColor;ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(lx-bw/2,ly-bh/2,bw,bh,12);ctx.fill();ctx.stroke();ctx.fillStyle='#ffd9f4';ctx.font=`700 ${isBoss?20:18}px Chakra Petch`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,lx,ly+1);ctx.restore()};arc('θ = ?');
  const gateButton=panel.querySelector('button');const check=()=>{if(+input.value===180){msg.className='angle-ok';msg.textContent='✓ ถูกต้อง! เวกเตอร์ชี้ตรงข้ามกันจึงทำมุม 180°';arc('θ = 180°');beep(true);input.disabled=true;if(isBoss){canvas.dataset.complete='1';const original=document.querySelector('#angle');if(original)original.value='180';result.className='graph-result correct';result.textContent='✓ วาดกราฟและตอบมุมครบแล้ว พร้อมโจมตีบอส!';gateButton.textContent='ไปปุ่มโจมตีบอส ↓';gateButton.onclick=()=>document.querySelector('#attackBtn').scrollIntoView({behavior:'smooth',block:'center'})}else{next.dataset.ready='1';next.innerHTML='พร้อมสู้บอส <span>⚔</span>';gateButton.textContent='ไปโจทย์จริง →';gateButton.onclick=()=>{state.step=2;renderQuest()}}}else{msg.className='angle-bad';msg.textContent='ยังไม่ถูก ลองสังเกตว่าลูกศรอยู่แนวเดียวกันแต่ชี้คนละทาง';beep(false)}};gateButton.onclick=check;input.onkeydown=e=>{if(e.key==='Enter')check()};input.focus()
}
function renderChallenge(q){document.querySelector('#questContent').innerHTML=`<p class="section-icon">⚔ BOSS BATTLE</p><h1 class="content-title">โจทย์จริงข้อ ${q.id}</h1><div class="boss-back-row"><button id="backPrepBtn">← ห้องเตรียมตัว</button><button id="backTrainingBtn">↶ ห้องฝึกซ้อม</button></div><div class="challenge-box"><p class="question-label">คำสั่งจากบอส</p><p class="question">${q.question}</p><button class="guide-npc" id="guideNpcBtn"><span>💧</span><div><b>พิโกะ ผู้ช่วยคิด</b><small>แตะเพื่อรับคำใบ้ทีละขั้น</small></div><i>?</i></button><div class="guide-hint" id="guideHint"><div class="guide-hint-head"><b>คำใบ้ขั้นที่ <span id="hintLevel">1</span></b><small id="hintProgress">1 / 3</small></div><p id="hintText"></p><button id="nextHintBtn">ขอคำใบ้เพิ่ม →</button></div><div class="inputs">${q.inputs.map(([k,l])=>`<div class="field"><label for="${k}">${l}</label><input id="${k}" name="${k}" inputmode="decimal" autocomplete="off" aria-label="${l}"></div>`).join('')}</div>${q.prefill?'<button class="text-btn" id="prefillBtn" style="margin-top:14px">เติมตัวอย่างที่แนะนำ</button>':''}<div class="feedback" id="feedback" role="alert"></div></div><div class="action-row"><span></span><button class="primary-btn" id="attackBtn">โจมตีด้วยคำตอบ <span>⚔</span></button></div>`;document.querySelector('#backPrepBtn').onclick=()=>{state.step=0;renderQuest()};document.querySelector('#backTrainingBtn').onclick=()=>{state.step=1;renderQuest()};setupGuideHints(q);if(q.id===3)setupBossScratch();if(q.prefill)document.querySelector('#prefillBtn').onclick=()=>Object.entries(q.prefill).forEach(([k,v])=>document.querySelector(`#${k}`).value=v);document.querySelector('#attackBtn').onclick=()=>{if(ensureBossGraph(q))checkAnswer(q)};document.querySelectorAll('input').forEach(i=>i.addEventListener('keydown',e=>{if(e.key==='Enter'&&ensureBossGraph(q))checkAnswer(q)}));renderBossGraph(q)}

function setupBossScratch(){
  const inputs=document.querySelector('.challenge-box .inputs');
  inputs.insertAdjacentHTML('beforebegin','<div class="boss-vector-given"><small>เวกเตอร์ A ที่โจทย์กำหนด</small><strong>A = -20i - 21j</strong><span>A = (-20, -21)</span><div class="opposite-transform"><b>กลับเครื่องหมายทุกองค์ประกอบ</b><em>A = (-20, -21)</em><i>→ คูณด้วย -1 →</i><em>-A = (20, 21)</em></div><p>โจทย์ให้หาขนาดของทั้ง A และ -A</p></div><div class="boss-scratch"><div class="paper-label"><b>กระดาษทดศึกบอส — เขียนด้วยเมาส์หรือปลายนิ้ว</b><div class="practice-paper-tools" id="bossPaperTools"><button class="active" data-boss-paper-tool="pen">✎ ปากกา</button><button data-boss-paper-tool="highlight">▰ ไฮไลต์</button><button data-boss-paper-tool="eraser">▱ ยางลบ</button><button id="clearBossScratch">ล้างกระดาษ</button></div></div><canvas class="scratch-canvas" id="bossScratch" data-mode="pen" width="900" height="300"></canvas></div>');
  const c=document.querySelector('#bossScratch'),x=c.getContext('2d');x.lineCap='round';x.lineJoin='round';let drawing=false,last=null;
  const point=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};
  c.onpointerdown=e=>{drawing=true;c.setPointerCapture(e.pointerId);last=point(e);e.preventDefault()};
  c.onpointermove=e=>{if(!drawing)return;const p=point(e),mode=c.dataset.mode||'pen';x.globalCompositeOperation=mode==='eraser'?'destination-out':'source-over';x.globalAlpha=mode==='highlight'?.14:1;x.strokeStyle=mode==='highlight'?'#ffd91f':'#17385f';x.lineWidth=mode==='eraser'?34:mode==='highlight'?30:4;x.beginPath();x.moveTo(last[0],last[1]);x.lineTo(p[0],p[1]);x.stroke();last=p;e.preventDefault()};
  c.onpointerup=c.onpointercancel=()=>{drawing=false;last=null;x.globalCompositeOperation='source-over';x.globalAlpha=1};
  document.querySelectorAll('[data-boss-paper-tool]').forEach(btn=>btn.onclick=()=>{c.dataset.mode=btn.dataset.bossPaperTool;document.querySelectorAll('[data-boss-paper-tool]').forEach(tool=>tool.classList.toggle('active',tool===btn))});
  document.querySelector('#clearBossScratch').onclick=()=>x.clearRect(0,0,c.width,c.height)
}

function setupMagnitudeWorkshop(targetSelector){
  const exercises=[
    {v:'P = (3, 4)',answer:'5',work:['|P| = √(3² + 4²)','= √(9 + 16)','= √25','= 5']},
    {v:'Q = (-5, 12)',answer:'13',work:['|Q| = √((-5)² + 12²)','= √(25 + 144)','= √169','= 13']},
    {v:'R = (-8, -15)',answer:'17',work:['|R| = √((-8)² + (-15)²)','= √(64 + 225)','= √289','= 17']}
  ];
  const radical=s=>`<span class="radical"><span>${s}</span></span>`;
  const html=`<section class="magnitude-workshop"><div class="pythagoras-card"><small>สูตรสำคัญประจำวิหาร magnitude</small><h3>สูตรหาขนาดของเวกเตอร์</h3><div class="triangle-formula">|V| = ${radical('x² + y²')}</div><p>นำองค์ประกอบ x และ y ยกกำลังสอง บวกกันไว้ใต้เครื่องหมายราก แล้วถอดรากเพื่อหาขนาดของเวกเตอร์</p></div><h3 class="workshop-title">โจทย์ฝึกทั้งค่าบวกและค่าลบ</h3>${exercises.map((e,i)=>`<article class="practice-paper"><header><b>โจทย์ฝึก ${i+1}</b><span>จงหา |${e.v[0]}| เมื่อ ${e.v}</span></header><div class="paper-label"><b>กระดาษทด — ใช้เมาส์หรือปลายนิ้วเขียนได้</b><div class="practice-paper-tools"><button class="active" data-paper-tool="${i}:pen">✎ ปากกา</button><button data-paper-tool="${i}:highlight">▰ ไฮไลต์</button><button data-paper-tool="${i}:eraser">▱ ยางลบ</button><button data-clear="${i}">ล้างกระดาษ</button></div></div><canvas class="scratch-canvas" data-scratch="${i}" data-mode="pen" width="900" height="300" aria-label="กระดาษทดโจทย์ ${i+1}"></canvas><div class="practice-answer"><input inputmode="decimal" aria-label="คำตอบโจทย์ฝึก ${i+1}" placeholder="คำตอบ"><button data-check="${i}">ตรวจคำตอบ</button><span></span></div><button class="solution-toggle" data-solution="${i}">ดูวิธีทำทีละขั้น</button><div class="worked-solution" id="magSolution${i}"><ol>${e.work.map((s,n)=>`<li><i>${n+1}</i><span>${s.replace(/√(.+)/,(_,inside)=>radical(inside))}</span></li>`).join('')}</ol></div></article>`).join('')}<div class="boss-divider"><span>⚔</span><b>ฝึกครบแล้ว กด “พร้อมสู้บอส” เพื่อไปทำโจทย์จริง</b></div></section>`;
  document.querySelector(targetSelector).insertAdjacentHTML('beforebegin',html);
  document.querySelectorAll('[data-scratch]').forEach(c=>{const x=c.getContext('2d');x.lineCap='round';x.lineJoin='round';let drawing=false,last=null;const point=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};c.onpointerdown=e=>{drawing=true;c.setPointerCapture(e.pointerId);last=point(e)};c.onpointermove=e=>{if(!drawing)return;const p=point(e),mode=c.dataset.mode||'pen';x.globalCompositeOperation=mode==='eraser'?'destination-out':'source-over';x.globalAlpha=mode==='highlight'?.16:1;x.strokeStyle=mode==='highlight'?'#ffd91f':'#17385f';x.lineWidth=mode==='eraser'?34:mode==='highlight'?30:4;x.beginPath();x.moveTo(last[0],last[1]);x.lineTo(p[0],p[1]);x.stroke();last=p};c.onpointerup=c.onpointercancel=()=>{drawing=false;last=null;x.globalCompositeOperation='source-over';x.globalAlpha=1}});document.querySelectorAll('[data-paper-tool]').forEach(btn=>btn.onclick=()=>{const [i,mode]=btn.dataset.paperTool.split(':'),canvas=document.querySelector(`[data-scratch="${i}"]`);canvas.dataset.mode=mode;btn.closest('.practice-paper-tools').querySelectorAll('[data-paper-tool]').forEach(x=>x.classList.toggle('active',x===btn))});
  document.querySelectorAll('[data-clear]').forEach(btn=>btn.onclick=()=>{const c=document.querySelector(`[data-scratch="${btn.dataset.clear}"]`);c.getContext('2d').clearRect(0,0,c.width,c.height)});
  document.querySelectorAll('[data-check]').forEach(btn=>btn.onclick=()=>{const i=+btn.dataset.check,box=btn.parentElement,input=box.querySelector('input'),msg=box.querySelector('span'),ok=input.value.trim()===exercises[i].answer;msg.className=ok?'practice-ok':'practice-bad';msg.textContent=ok?'✓ ถูกต้อง!':'ยังไม่ถูก ลองเปิดวิธีทำดู';beep(ok)});
  document.querySelectorAll('[data-solution]').forEach(btn=>btn.onclick=()=>{const panel=document.querySelector(`#magSolution${btn.dataset.solution}`),open=panel.classList.toggle('show');btn.textContent=open?'ซ่อนวิธีทำ':'ดูวิธีทำทีละขั้น'});
}

function setupGuideHints(q){
  const allHints={
    1:['เริ่มวาดจากจุดกำเนิด (0,0) เสมอ','ดูเครื่องหมายทีละแกน: ค่าลบของ x เดินไปทางซ้าย และค่าลบของ y เดินลง','นับจากจุดกำเนิดไปทางซ้ายตามค่า x แล้วลงตามค่า y ก่อนคลิกจุดปลาย'],
    2:['เวกเตอร์ตรงข้ามหาได้โดยคูณเวกเตอร์เดิมด้วย -1','เมื่อคูณด้วย -1 เครื่องหมายขององค์ประกอบ x และ y จะเปลี่ยนทั้งคู่','วาดจาก (0,0) ไปยังจุดที่ได้หลังเปลี่ยนเครื่องหมายทั้งสองแกน'],
    3:['ใช้สูตรขนาดเวกเตอร์ |V| = √(x² + y²)','แทนค่า x และ y โดยใส่วงเล็บให้ค่าลบก่อนยกกำลังสอง','คำนวณค่าภายในราก แล้วถอดราก และจำไว้ว่าการกลับทิศไม่เปลี่ยนขนาด'],
    4:['เวกเตอร์ตั้งฉากกันเมื่อ dot product เท่ากับ 0','สำหรับ (x,y) ลองสลับตำแหน่งเป็น (y,x) แล้วกลับเครื่องหมายเพียงหนึ่งตัว','แทนค่ากลับไปตรวจด้วย x₁x₂ + y₁y₂ ถ้าได้ 0 แสดงว่าถูก'],
    5:['Unit vector เกิดจากนำแต่ละองค์ประกอบหารด้วยขนาดของเวกเตอร์','ทำ B และ C ให้มีความยาว 1 ก่อน แล้วจึงคำนวณ dot product','สังเกตทิศของ B และ C: ทิศเดียวกันให้ 1 ตรงข้ามกันให้ -1']
  };
  const hints=allHints[q.id];let level=0;
  const box=document.querySelector('#guideHint'),text=document.querySelector('#hintText'),button=document.querySelector('#nextHintBtn'),npc=document.querySelector('#guideNpcBtn');
  const show=()=>{box.classList.add('show');text.textContent=hints[level];document.querySelector('#hintLevel').textContent=level+1;document.querySelector('#hintProgress').textContent=`${level+1} / ${hints.length}`;button.textContent=level===hints.length-1?'เริ่มคิดจากคำใบ้นี้ ✓':'ขอคำใบ้เพิ่ม →';npc.classList.add('active')};
  npc.onclick=()=>{if(box.classList.contains('show')){box.classList.remove('show');npc.classList.remove('active')}else{show()}};
  button.onclick=()=>{if(level<hints.length-1){level++;show()}else{box.classList.remove('show');npc.classList.remove('active')}};
}

function ensureBossGraph(q){const g=document.querySelector('#bossGraph');if(!g||g.dataset.complete==='1')return true;const f=document.querySelector('#feedback');f.className='feedback bad show';f.textContent=q.id===4?'ยังวาดไม่ครบ — ต้องวาด B และ C บนกราฟก่อนโจมตี':'ยังไม่ได้วาดเวกเตอร์จริงบนกราฟ คลิกจุดปลายให้ถูกก่อนโจมตี';g.scrollIntoView({behavior:'smooth',block:'center'});beep(false);return false}

function renderBossGraph(q){
  if(![1,2,4].includes(q.id))return;const sequences=q.id===1?[[-20,-21,'A','#55e6d9']]:q.id===2?[[20,21,'-A','#ffd166']]:[[-21,20,'B','#55e6d9'],[21,-20,'C','#ffd166']];
  document.querySelector('.action-row').insertAdjacentHTML('beforebegin',`<section class="graph-training boss-graph-training"><div class="graph-head"><div><span>⚔ ภารกิจวาดกราฟจริง</span><h3>${q.id===4?'วาด B แล้ววาด C ตามพิกัดที่กรอก':'วาด '+sequences[0][2]+' บนระนาบพิกัด xy'}</h3></div><div class="graph-coord" id="bossGraphCoord">รอวาด ${sequences[0][2]}</div></div>${q.id===2||q.id===4?'<div class="vector-given"><b>เวกเตอร์ที่โจทย์กำหนด</b><span><i></i> A = (-20, -21) แสดงบนกราฟ xy ให้แล้ว</span><small>'+(q.id===4?'กราฟแสดง A และ -A ให้แล้ว จากนั้นกรอกและวาด B กับ C':'ภารกิจของเจ้า: วาดเวกเตอร์ -A ลงบนระนาบพิกัด xy')+'</small></div>':''}<p>กราฟจริงใช้ช่วง -25 ถึง 25 คลิกตำแหน่งปลายลูกศรตามค่าที่ตอบ</p><canvas id="bossGraph" width="650" height="650"></canvas><div class="graph-result" id="bossGraphResult">${q.id===4?'กรอกพิกัด B และ C ก่อน แล้วคลิกวาด B เป็นลำดับแรก':'คลิกจุดปลายของเวกเตอร์'}</div></section>`);
  const c=document.querySelector('#bossGraph'),x=c.getContext('2d'),origin=325,step=12,drawn=q.id===2?[[-20,-21,'A','#48d8ff']]:q.id===4?[[-20,-21,'A','#48d8ff'],[20,21,'-A','#b77cff']]:[];let stage=0,preview=null;
  function arrow(v){const ex=origin+v[0]*step,ey=origin-v[1]*step,ang=Math.atan2(ey-origin,ex-origin),label=`${v[2]} (${v[0]}, ${v[1]})`;x.save();x.strokeStyle=v[3];x.fillStyle=v[3];x.shadowBlur=18;x.shadowColor=v[3];x.lineWidth=7;x.beginPath();x.moveTo(origin,origin);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-22*Math.cos(ang-.5),ey-22*Math.sin(ang-.5));x.lineTo(ex-22*Math.cos(ang+.5),ey-22*Math.sin(ang+.5));x.closePath();x.fill();x.shadowBlur=0;let lx=ex+(v[0]>0?-88:88),ly=ey+(v[1]>0?-34:34);lx=Math.max(78,Math.min(572,lx));ly=Math.max(35,Math.min(615,ly));x.strokeStyle=v[3];x.lineWidth=2;x.setLineDash([6,6]);x.beginPath();x.moveTo(ex,ey);x.lineTo(lx,ly);x.stroke();x.setLineDash([]);x.font='800 17px Chakra Petch';const w=x.measureText(label).width+18;x.fillStyle='rgba(4,18,39,.94)';x.strokeStyle=v[3];x.lineWidth=2;x.beginPath();x.roundRect(lx-w/2,ly-17,w,34,9);x.fill();x.stroke();x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';x.fillText(label,lx,ly);x.restore()}
  function angleMark(a,b,slot){const na=Math.hypot(a[0],a[1]),nb=Math.hypot(b[0],b[1]);if(!na||!nb)return;const dot=a[0]*b[0]+a[1]*b[1],degrees=Math.round(Math.acos(Math.max(-1,Math.min(1,dot/(na*nb))))*180/Math.PI),start=Math.atan2(-a[1],a[0]);let delta=Math.atan2(-b[1],b[0])-start;while(delta>Math.PI)delta-=Math.PI*2;while(delta< -Math.PI)delta+=Math.PI*2;const radius=slot?66:45,mid=start+delta/2,lx=origin+Math.cos(mid)*(slot?105:82),ly=origin+Math.sin(mid)*(slot?105:82);x.save();x.strokeStyle='#ff78dc';x.fillStyle='rgba(255,83,210,.2)';x.lineWidth=5;x.beginPath();x.moveTo(origin,origin);x.arc(origin,origin,radius,start,start+delta,delta<0);x.closePath();x.fill();x.stroke();const label=`θ = ${degrees}°`;x.font='900 18px Chakra Petch';const w=x.measureText(label).width+18;x.fillStyle='rgba(48,5,53,.96)';x.strokeStyle='#ff78dc';x.lineWidth=2;x.beginPath();x.roundRect(lx-w/2,ly-17,w,34,9);x.fill();x.stroke();x.fillStyle='#ff9ee7';x.textAlign='center';x.textBaseline='middle';x.fillText(label,lx,ly);x.restore()}
  function draw(){x.clearRect(0,0,650,650);x.fillStyle='#06172f';x.fillRect(0,0,650,650);for(let i=-25;i<=25;i++){const p=origin+i*step,major=i%5===0;x.strokeStyle=i===0?'#e7f2ff':major?'rgba(113,178,235,.42)':'rgba(91,142,195,.14)';x.lineWidth=i===0?3:major?1.6:.7;x.beginPath();x.moveTo(p,25);x.lineTo(p,625);x.stroke();x.beginPath();x.moveTo(25,p);x.lineTo(625,p);x.stroke();if(major&&i!==0){x.fillStyle='#b9d5ef';x.font='13px Chakra Petch';x.textAlign='center';x.fillText(i,p,origin+19);x.textAlign='right';x.fillText(-i,origin-8,p+4)}}x.fillStyle='#fff';x.font='700 17px Chakra Petch';x.textAlign='center';x.fillText('x',632,origin-10);x.fillText('y',origin+17,18);x.fillStyle='#ffd65b';x.beginPath();x.arc(origin,origin,6,0,Math.PI*2);x.fill();drawn.forEach(arrow);if(q.id===4&&drawn.length>=4){angleMark(drawn[0],drawn[2],0);angleMark(drawn[1],drawn[3],1)}if(preview)arrow(preview)}
  c.onclick=e=>{if(stage>=sequences.length)return;const result=document.querySelector('#bossGraphResult');let target=sequences[stage];if(q.id===4){const ids=stage===0?['bx','by']:['cx','cy'],els=ids.map(id=>document.querySelector('#'+id));if(els.some(el=>!el.value.trim())){result.className='graph-result wrong';result.textContent=`กรอกพิกัด ${stage===0?'B':'C'} ให้ครบก่อนคลิกบนกราฟ`;els.find(el=>!el.value.trim())?.focus();return}target=[+els[0].value,+els[1].value,stage===0?'B':'C',stage===0?'#55e6d9':'#ffd166']}const r=c.getBoundingClientRect();let gx=Math.round((((e.clientX-r.left)*650/r.width)-origin)/step),gy=Math.round((origin-((e.clientY-r.top)*650/r.height))/step);gx=Math.max(-25,Math.min(25,gx));gy=Math.max(-25,Math.min(25,gy));const ok=gx===target[0]&&gy===target[1];preview=[gx,gy,target[2],ok?target[3]:'#ff6f82'];document.querySelector('#bossGraphCoord').textContent=`เลือก (${gx}, ${gy})`;if(ok){drawn.push(target);preview=null;stage++;beep(true);draw();if(stage===sequences.length){result.className='graph-result correct';document.querySelector('#bossGraphCoord').textContent='วาดสำเร็จ';if(q.id===2){result.textContent='✓ วาด -A ถูกต้องแล้ว ต่อไปตอบค่ามุม';showAngleGate(c,x,origin,result,null,true)}else{c.dataset.complete='1';result.textContent=q.id===4?'✓ วาด B และ C ตรงกับพิกัดที่กรอกแล้ว กดโจมตีเพื่อตรวจการตั้งฉาก':'✓ วาดกราฟโจทย์จริงครบและถูกต้อง พร้อมโจมตีบอส!'}}else{result.className='graph-result correct';const next=q.id===4?[+document.querySelector('#cx').value,+document.querySelector('#cy').value]:sequences[1];result.textContent=`✓ B ตรงกับพิกัดที่กรอก — ขั้นที่ 2/2: วาด C = (${next[0]},${next[1]})`;document.querySelector('#bossGraphCoord').textContent='รอวาด C'}}else{result.className='graph-result wrong';result.textContent=`จุดที่คลิก (${gx},${gy}) ไม่ตรงกับ ${target[2]} = (${target[0]},${target[1]}) ที่กรอกไว้`;beep(false);draw()}};draw()
}
function checkAnswer(q){const values={};q.inputs.forEach(([k])=>values[k]=document.querySelector(`#${k}`).value.trim());const f=document.querySelector('#feedback');if(Object.values(values).some(v=>v==='')){f.className='feedback bad show';f.textContent='ยังใส่คำตอบไม่ครบ ลองเติมทุกช่องก่อนนะ';beep(false);return}if(q.validate(values)){if(q.id===4){state.b={x:+values.bx,y:+values.by};state.c={x:+values.cx,y:+values.cy};const unitDot=expectedFinalDot(),opposite=unitDot<0,relation=opposite?'ชี้ตรงข้ามกัน':'ชี้ทิศเดียวกัน',angle=opposite?'180°':'0°';quests[4].explain=`ชัยชนะ! B = (${state.b.x}, ${state.b.y}) ตั้งฉากกับ A และ C = (${state.c.x}, ${state.c.y}) ตั้งฉากกับ -A ดังนั้น B และ C จึงอยู่บนแนวเดียวกัน สำหรับคำตอบนี้ เมื่อทำ B และ C เป็น Unit Vector แล้ว จะได้ B̂ · Ĉ = ${unitDot.toFixed(0)} แปลว่า Unit Vector ทั้งสอง${relation}และทำมุม ${angle} กัน โดยเฉพาะ B̂ · Ĉ = -1 หมายถึงชี้ตรงข้ามกันและทำมุม 180°`}
    f.className='feedback good show';beep(true);document.querySelector('#bossHpBar').style.width='0%';document.querySelector('#bossHpText').textContent='0%';document.querySelector('#attackBtn').disabled=true;if(q.id===3){f.innerHTML=`<div class="boss-worked"><h3>✓ ปราบแมกนิทูนสำเร็จ — ดูวิธีทำก่อนรับรางวัล</h3><section><b>ขนาดของ A = (-20, -21)</b><ol><li><i>1</i><span>ใช้สูตร <strong>|A| = √(x² + y²)</strong></span></li><li><i>2</i><span>แทนค่า: |A| = √((-20)² + (-21)²)</span></li><li><i>3</i><span>= √(400 + 441)</span></li><li><i>4</i><span>= √841 = <strong>29</strong></span></li></ol></section><section><b>กลับด้านเวกเตอร์ A เพื่อหา -A</b><div class="solution-flip"><span>A = (-20, -21)</span><i>คูณทุกพิกัดด้วย -1</i><span>-A = (20, 21)</span></div></section><section><b>ขนาดของ -A = (20, 21)</b><ol><li><i>1</i><span>ใช้สูตร <strong>|-A| = √(x² + y²)</strong></span></li><li><i>2</i><span>แทนค่า: |-A| = √(20² + 21²)</span></li><li><i>3</i><span>= √(400 + 441)</span></li><li><i>4</i><span>= √841 = <strong>29</strong></span></li></ol></section><p>สรุป: <strong>|A| = |-A| = 29</strong> เพราะการกลับด้านเปลี่ยนทิศและเครื่องหมาย แต่ไม่เปลี่ยนขนาดของเวกเตอร์</p><button class="primary-btn" id="claimRewardBtn">ไปรับรางวัล <span>→</span></button></div>`;document.querySelector('#claimRewardBtn').onclick=()=>completeQuest(q);f.scrollIntoView({behavior:'smooth',block:'start'})}else{f.innerHTML=`<b>โจมตีสำเร็จ!</b><br>${q.explain}`;setTimeout(()=>completeQuest(q),1700)}}else{state.hp=Math.max(1,state.hp-1);save();f.className='feedback bad show';f.innerHTML='<b>การโจมตียังไม่โดนจุดอ่อน</b><br>ลองตรวจเครื่องหมายและคำนวณทีละแกน พลังชีวิตลด 1 แต่ไม่เป็นไร — ในโหมดฝึก พลังจะไม่ต่ำกว่า 1 และขอคำใบ้ได้เสมอ';document.querySelector('#hintPanel').classList.add('show');beep(false)}}
function completeQuest(q){if(!state.completed.includes(q.id)){state.completed.push(q.id);state.xp+=100;state.hp=5}state.showReward=q.id;save();renderQuest()}
function renderReward(q){const final=q.id===5;document.querySelector('#bossHpBar').style.width='0%';document.querySelector('#bossHpText').textContent='พ่ายแพ้';document.querySelector('#questContent').innerHTML=`<div class="reward"><div class="reward-glyph">${final?'♛':'◇'}</div><p class="section-icon">${final?'KINGDOM RESTORED':'DUNGEON CLEARED'}</p><h2>${final?'พิชิตข้อสอบครบทั้ง 5 ข้อ!':'ได้รับ'+q.rune}</h2><p>${q.explain}</p>${q.vectors?`<div class="canvas-wrap"><canvas class="vector-canvas" id="vectorCanvas" width="620" height="620"></canvas><div class="canvas-caption"><b>ภาพสรุปบนระนาบ xy</b><br>แกนนอนคือ x แกนตั้งคือ y ลูกศรเริ่มที่จุดกำเนิด (0,0)</div></div>`:''}<div class="reward-items"><span>◆ +100 ความรู้</span><span>♥ ฟื้นพลังเต็ม</span></div><button class="primary-btn" id="rewardBtn">${final?'ดูแผนที่ชัยชนะ':'สำรวจชั้นถัดไป'} <span>→</span></button></div>`;if(q.vectors)requestAnimationFrame(()=>drawVectors(q.vectors));document.querySelector('#rewardBtn').onclick=()=>final?showMap():showAdventure()}
function drawVectors(vectors){const c=document.querySelector('#vectorCanvas');if(!c)return;const x=c.getContext('2d'),w=c.width,h=c.height,mid=w/2;const max=Math.max(5,...vectors.flatMap(v=>[Math.abs(v[0]),Math.abs(v[1])]))*1.25,scale=(w/2-38)/max;x.clearRect(0,0,w,h);x.strokeStyle='#1e3150';x.lineWidth=1;for(let i=-max;i<=max;i+=max/5){x.beginPath();x.moveTo(0,mid-i*scale);x.lineTo(w,mid-i*scale);x.stroke();x.beginPath();x.moveTo(mid+i*scale,0);x.lineTo(mid+i*scale,h);x.stroke()}x.strokeStyle='#75859f';x.lineWidth=2;x.beginPath();x.moveTo(18,mid);x.lineTo(w-18,mid);x.moveTo(mid,18);x.lineTo(mid,h-18);x.stroke();x.fillStyle='#9babc6';x.font='20px Chakra Petch';x.fillText('x',w-30,mid-12);x.fillText('y',mid+12,25);vectors.forEach(([vx,vy,label,color])=>{const ex=mid+vx*scale,ey=mid-vy*scale,ang=Math.atan2(ey-mid,ex-mid);x.strokeStyle=color;x.fillStyle=color;x.lineWidth=5;x.beginPath();x.moveTo(mid,mid);x.lineTo(ex,ey);x.stroke();x.beginPath();x.moveTo(ex,ey);x.lineTo(ex-18*Math.cos(ang-.5),ey-18*Math.sin(ang-.5));x.lineTo(ex-18*Math.cos(ang+.5),ey-18*Math.sin(ang+.5));x.closePath();x.fill();x.font='600 19px Chakra Petch';x.fillText(canvasVectorLabel(label),ex+(vx>=0?8:-70),ey+(vy>=0?-10:24))})}

function canvasVectorLabel(label){return /[̂Ĉ]/u.test(label)?label:label.replace(/([ABCOPQV])$/u,'$1⃗')}

function applyVectorArrowsEverywhere(root=document.querySelector('#app')){if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),targets=[];let node;while(node=walker.nextNode()){const parent=node.parentElement;if(!parent||parent.closest('.math-vector,.fixed-vector-symbol,.q5-formulas,.unit-steps')||parent.closest('script,style,input,textarea,button')||!/[ABCPQVv]/.test(node.nodeValue))continue;if(/(?:A|B|C|P|Q|V|v)̂/u.test(node.nodeValue))continue;targets.push(node)}targets.forEach(textNode=>{const parts=textNode.nodeValue.split(/\b([ABCPQVv])\b(?!̂)/gu);if(parts.length<2)return;const fragment=document.createDocumentFragment();parts.forEach((part,index)=>{if(index%2===1){const span=document.createElement('span');span.className='math-vector global-vector';span.textContent=part;fragment.append(span)}else fragment.append(document.createTextNode(part))});textNode.replaceWith(fragment)})}

const renderQuestBeforeGlobalVectorArrows=renderQuest;
renderQuest=function(){renderQuestBeforeGlobalVectorArrows();applyVectorArrowsEverywhere()};

const renderQuestWithClickableSteps=renderQuest;
renderQuest=function(){renderQuestWithClickableSteps();document.querySelectorAll('#stepper .step').forEach((el,i)=>{el.dataset.step=i;el.classList.add('clickable');el.setAttribute('role','button');el.tabIndex=0;el.title=i===0?'ไปห้องเตรียมตัว':i===1?'ไปห้องฝึกซ้อม':'ไปศึกบอส';const go=()=>{state.step=i;state.showReward=0;save();renderQuest()};el.onclick=go;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}})};

/* Remember form answers separately for each floor and room. */
let answerHistoryTimer=0;
function restoreAndTrackQuestAnswers(){
  if(state.step!==1&&state.step!==2)return;
  const q=quests[state.current],root=document.querySelector('#questContent');
  if(!q||!root)return;
  state.answerHistory=state.answerHistory||{};
  const room=state.step===1?'training':'boss';
  const saved=state.answerHistory[q.id]?.[room]||{};
  const fields=()=>[...root.querySelectorAll('input, textarea, select')].filter(el=>el.id||el.name);
  fields().forEach(el=>{const key=el.id||el.name;if(Object.prototype.hasOwnProperty.call(saved,key)){if(el.type==='checkbox'||el.type==='radio')el.checked=Boolean(saved[key]);else el.value=saved[key]}});
  const store=()=>{const values={};fields().forEach(el=>{const key=el.id||el.name;values[key]=el.type==='checkbox'||el.type==='radio'?el.checked:el.value});state.answerHistory[q.id]=state.answerHistory[q.id]||{};state.answerHistory[q.id][room]=values;clearTimeout(answerHistoryTimer);answerHistoryTimer=setTimeout(save,120)};
  root.addEventListener('input',store);root.addEventListener('change',store);root.addEventListener('click',()=>setTimeout(store,0));
}
const renderQuestBeforeAnswerHistory=renderQuest;
renderQuest=function(){renderQuestBeforeAnswerHistory();restoreAndTrackQuestAnswers()};

const renderChallengeWithBossGiven=renderChallenge;
renderChallenge=function(q){renderChallengeWithBossGiven(q);const inputs=document.querySelector('.challenge-box .inputs');if(q.id===4){inputs.insertAdjacentHTML('beforebegin','<div class="q4-boss-given"><small>เวกเตอร์ A ที่โจทย์กำหนดจากข้อ 1</small><strong>A = -20i - 21j</strong><span>A = (-20, -21)</span><div>กลับเครื่องหมายทุกพิกัด → <b>-A = (20, 21)</b></div><p>ภารกิจบอส: หา B ที่ตั้งฉากกับ A และ C ที่ตั้งฉากกับ -A</p></div>')}inputs.insertAdjacentHTML('beforebegin','<button class="boss-scratch-btn" id="bossScratchBtn">✎ เปิดกระดาษทด — พิมพ์ วาด และลบได้</button>');document.querySelector('#bossScratchBtn').onclick=()=>document.querySelector('#universalScratch')?.classList.add('open')};

function setupUniversalScratchpad(){if(document.querySelector('#universalScratch'))return;document.body.insertAdjacentHTML('beforeend','<aside class="universal-scratch" id="universalScratch"><button class="scratch-toggle" id="scratchToggle">✎ กระดาษทด</button><div class="scratch-panel"><header><b>กระดาษทดทุกหน้า</b><button id="closeScratch">×</button></header><textarea id="scratchText" placeholder="พิมพ์วิธีทำหรือบันทึกตรงนี้…"></textarea><div class="scratch-tools"><button id="penTool" class="active">✎ ปากกา</button><button id="eraserTool">▱ ยางลบ</button><button id="clearDrawing">ล้างรูปวาด</button><button id="clearAllScratch">ล้างทั้งหมด</button></div><canvas id="universalScratchCanvas" width="900" height="420"></canvas><small>ใช้เมาส์หรือปลายนิ้ววาดได้ · ข้อความจะจำไว้ขณะเปลี่ยนหน้า</small></div></aside>');const root=document.querySelector('#universalScratch'),panel=root.querySelector('.scratch-panel'),toggle=document.querySelector('#scratchToggle'),close=document.querySelector('#closeScratch'),text=document.querySelector('#scratchText'),c=document.querySelector('#universalScratchCanvas'),x=c.getContext('2d');text.value=localStorage.getItem('vectoriaScratchText')||'';text.oninput=()=>localStorage.setItem('vectoriaScratchText',text.value);toggle.onclick=()=>root.classList.toggle('open');close.onclick=()=>root.classList.remove('open');x.lineWidth=5;x.lineCap='round';x.lineJoin='round';x.strokeStyle='#193c63';let drawing=false,erase=false;const point=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};c.onpointerdown=e=>{drawing=true;c.setPointerCapture(e.pointerId);const p=point(e);x.beginPath();x.moveTo(p[0],p[1])};c.onpointermove=e=>{if(!drawing)return;const p=point(e);x.globalCompositeOperation=erase?'destination-out':'source-over';x.lineWidth=erase?35:5;x.lineTo(p[0],p[1]);x.stroke()};c.onpointerup=c.onpointercancel=()=>{drawing=false;x.globalCompositeOperation='source-over'};document.querySelector('#penTool').onclick=()=>{erase=false;document.querySelector('#penTool').classList.add('active');document.querySelector('#eraserTool').classList.remove('active')};document.querySelector('#eraserTool').onclick=()=>{erase=true;document.querySelector('#eraserTool').classList.add('active');document.querySelector('#penTool').classList.remove('active')};document.querySelector('#clearDrawing').onclick=()=>x.clearRect(0,0,c.width,c.height);document.querySelector('#clearAllScratch').onclick=()=>{x.clearRect(0,0,c.width,c.height);text.value='';localStorage.removeItem('vectoriaScratchText')}}

// Q4 graph: collect both points first, then validate once. Coordinate guides stay visual-only.
setupInteractiveCleanGraph=function(){
  const c=document.querySelector('#cleanQ4Graph'),box=document.querySelector('.q4-practice-clean');if(!c||!box)return;
  box.querySelector('h3').insertAdjacentHTML('afterend','<span id="cleanClickCoord" hidden></span>');
  const ctx=c.getContext('2d'),o=300,s=50,given=[[4,-3,'A','#48d8ff'],[-4,3,'-A','#b77cff']],answers=[[-3,-4,'B','#ffe066'],[3,4,'C','#65efb6']];
  let picks=[],complete=false;
  const inputs=()=>['cleanBx','cleanBy','cleanCx','cleanCy'].map(id=>document.querySelector('#'+id));
  const fieldsReady=()=>inputs().every(el=>el&&el.value.trim()!=='');
  const arrow=v=>{const ex=o+v[0]*s,ey=o-v[1]*s,a=Math.atan2(ey-o,ex-o);ctx.save();ctx.strokeStyle=ctx.fillStyle=v[3];ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(o,o);ctx.lineTo(ex,ey);ctx.stroke();ctx.beginPath();ctx.moveTo(ex,ey);ctx.lineTo(ex-20*Math.cos(a-.5),ey-20*Math.sin(a-.5));ctx.lineTo(ex-20*Math.cos(a+.5),ey-20*Math.sin(a+.5));ctx.closePath();ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex,ey,11,0,Math.PI*2);ctx.fill();ctx.fillStyle=v[3];ctx.beginPath();ctx.arc(ex,ey,7,0,Math.PI*2);ctx.fill();const label=`${v[2]} = (${v[0]}, ${v[1]})`,lx=ex+(v[0]>0?-78:78),ly=ey+(v[1]>0?-25:28);ctx.font='800 15px Chakra Petch';const w=ctx.measureText(label).width+16;ctx.fillStyle='rgba(4,18,39,.94)';ctx.strokeStyle=v[3];ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(lx-w/2,ly-16,w,32,8);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,lx,ly);ctx.restore()};
  const guides=v=>{const ex=o+v[0]*s,ey=o-v[1]*s;ctx.save();ctx.strokeStyle=v[3];ctx.globalAlpha=.65;ctx.lineWidth=2;ctx.setLineDash([7,7]);ctx.beginPath();ctx.moveTo(ex,ey);ctx.lineTo(ex,o);ctx.moveTo(ex,ey);ctx.lineTo(o,ey);ctx.stroke();ctx.restore()};
  const theta=(px,py)=>{ctx.save();ctx.fillStyle='rgba(45,5,48,.96)';ctx.strokeStyle='#ff78dc';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(px-55,py-19,110,38,10);ctx.fill();ctx.stroke();ctx.fillStyle='#ff9ee7';ctx.font='900 20px Chakra Petch';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('θ = 90°',px,py);ctx.restore()};
  const draw=()=>{ctx.fillStyle='#06172f';ctx.fillRect(0,0,600,600);for(let i=-5;i<=5;i++){const p=o+i*s;ctx.strokeStyle=i===0?'#e6f0ff':'rgba(101,158,211,.25)';ctx.lineWidth=i===0?3:1;ctx.beginPath();ctx.moveTo(p,25);ctx.lineTo(p,575);ctx.moveTo(25,p);ctx.lineTo(575,p);ctx.stroke();if(i!==0){ctx.fillStyle='#c9def2';ctx.font='13px Chakra Petch';ctx.textAlign='center';ctx.fillText(i,p,o+18);ctx.textAlign='right';ctx.fillText(-i,o-8,p+4)}}[...given,...picks].forEach(v=>{guides(v);arrow(v)});if(complete){theta(o+83,o-52);theta(o-86,o+55)}};
  inputs().forEach(el=>el?.addEventListener('input',()=>{if(!picks.length)document.querySelector('#cleanClickCoord').textContent=fieldsReady()?'ขั้นที่ 1: คลิกพิกัดปลาย B':'รอกรอกพิกัดให้ครบ'}));
  c.style.cursor='crosshair';c.onclick=e=>{const status=document.querySelector('#cleanClickCoord'),result=document.querySelector('#cleanQ4Result');if(complete)return;if(!fieldsReady()){result.className='practice-bad';result.textContent='กรอกพิกัด B และ C ให้ครบทั้ง 4 ช่องก่อน แล้วจึงวาดบนกราฟ';inputs().find(el=>!el.value.trim())?.focus();return}const r=c.getBoundingClientRect(),gx=Math.max(-5,Math.min(5,Math.round((((e.clientX-r.left)*600/r.width)-o)/s))),gy=Math.max(-5,Math.min(5,Math.round((o-((e.clientY-r.top)*600/r.height))/s))),index=picks.length,label=index===0?'B':'C',color=index===0?'#ffe066':'#65efb6';picks.push([gx,gy,label,color]);draw();if(picks.length===1){status.textContent=`B = (${gx}, ${gy}) · ขั้นที่ 2: คลิกพิกัดปลาย C`;result.className='';result.textContent='เลือก B แล้ว — เลือก C ให้ครบก่อนตรวจคำตอบ';return}const ok=picks.every((v,i)=>v[0]===answers[i][0]&&v[1]===answers[i][1]);if(ok){complete=true;beep(true);status.textContent=`B = (${picks[0][0]}, ${picks[0][1]}) · C = (${picks[1][0]}, ${picks[1][1]}) · θ = 90°`;result.className='practice-ok';result.textContent='✓ พิกัดและมุมถูกต้อง: ทั้ง A ⟂ B และ -A ⟂ C';draw()}else{beep(false);status.textContent=`B = (${picks[0][0]}, ${picks[0][1]}) · C = (${picks[1][0]}, ${picks[1][1]})`;result.className='practice-bad';result.textContent='พิกัด B หรือ C ยังไม่ถูก ตรวจทั้งสองจุดแล้วคลิกวาดใหม่อีกครั้ง';picks=[];setTimeout(()=>{status.textContent='ขั้นที่ 1: คลิกพิกัดปลาย B';draw()},700)}};draw()
};

/* Floor 4 manual plotting: start with an empty graph and let the learner plot every vector. */
showManualQ4Coordinates=function(){
  const section=document.querySelector('.manual-q4-draw'),p=section?.querySelector('p');
  if(!p)return;
  p.outerHTML='<div class="manual-instructions easy manual-only"><b>พล็อตเวกเตอร์ด้วยตัวเองให้ครบ 4 ตัว</b><ol><li>พล็อต A = (4, -3)</li><li>พล็อต -A = (-4, 3)</li><li>พล็อต B ที่ตั้งฉากกับ A</li><li>พล็อต C ที่ตั้งฉากกับ -A</li></ol><small>กราฟจะไม่วาดคำตอบให้อัตโนมัติ คลิกพิกัดปลายเวกเตอร์ตามลำดับ</small></div>';
};

enhanceManualQ4Canvas=function(){};

setupManualQ4Drawing=function(){};

const simplifyQ4LessonBeforeHeading=simplifyQ4Lesson;
simplifyQ4Lesson=function(){
  simplifyQ4LessonBeforeHeading();
  const title=document.querySelector('#questContent .content-title');if(!title)return;
  title.textContent='ไขรหัสมุมฉาก พิชิตเส้นทาง 90°';
  title.insertAdjacentHTML('afterend','<p class="q4-training-subtitle">ฝึกหา B ที่ตั้งฉากกับ A และ C ที่ตั้งฉากกับ -A</p>');
};

setupUniversalScratchpad=function(){
  if(document.querySelector('#universalScratch'))return;
  document.body.insertAdjacentHTML('beforeend','<aside class="universal-scratch" id="universalScratch"><button class="scratch-toggle" id="scratchToggle">✎ กระดาษทด</button><div class="scratch-panel"><header id="scratchDragHandle"><b>สมุดกระดาษทด <small>ลากเพื่อย้าย</small></b><div class="scratch-window-actions"><button id="minimizeScratch" title="ย่อสมุด">−</button><button id="maximizeScratch" title="ขยายเต็มจอ">□</button><button id="closeScratch" title="ปิดสมุด">×</button></div></header><nav class="scratch-pages"><button id="prevScratchPage">← ก่อนหน้า</button><strong id="scratchPageLabel">หน้า 1 / 1</strong><button id="nextScratchPage">ถัดไป →</button><button id="addScratchPage">＋ เพิ่มหน้า</button><button id="deleteScratchPage">ลบหน้านี้</button></nav><textarea id="scratchText" placeholder="พิมพ์วิธีทำหรือบันทึกของหน้านี้…"></textarea><div class="scratch-tools"><button id="penTool" class="active">✎ ปากกา</button><button id="highlightTool">▰ ไฮไลต์</button><button id="eraserTool">▱ ยางลบ</button><button id="clearDrawing">ล้างรูปวาด</button><button id="clearAllScratch">ล้างหน้านี้</button></div><canvas id="universalScratchCanvas" width="900" height="420"></canvas><small>ลากหัวสมุดเพื่อย้าย · ลากมุมขวาล่างเพื่อปรับขนาด · เพิ่มได้สูงสุด 10 หน้า</small></div></aside>');
  const root=document.querySelector('#universalScratch'),panel=root.querySelector('.scratch-panel'),handle=document.querySelector('#scratchDragHandle'),text=document.querySelector('#scratchText'),c=document.querySelector('#universalScratchCanvas'),ctx=c.getContext('2d'),label=document.querySelector('#scratchPageLabel');
  let drag=null,restoreBox=null;const keepScratchOnScreen=()=>{if(!root.classList.contains('scratch-floating'))return;const r=root.getBoundingClientRect(),left=Math.max(8,Math.min(innerWidth-r.width-8,r.left)),top=Math.max(8,Math.min(innerHeight-r.height-8,r.top));root.style.left=`${left}px`;root.style.top=`${top}px`};handle.onpointerdown=e=>{if(e.target.closest('button'))return;const r=root.getBoundingClientRect();root.classList.add('scratch-floating');root.style.left=`${r.left}px`;root.style.top=`${r.top}px`;root.style.right='auto';root.style.bottom='auto';drag={x:e.clientX,y:e.clientY,left:r.left,top:r.top};handle.setPointerCapture(e.pointerId);e.preventDefault()};handle.onpointermove=e=>{if(!drag)return;const maxX=Math.max(8,innerWidth-root.offsetWidth-8),maxY=Math.max(8,innerHeight-root.offsetHeight-8);root.style.left=`${Math.max(8,Math.min(maxX,drag.left+e.clientX-drag.x))}px`;root.style.top=`${Math.max(8,Math.min(maxY,drag.top+e.clientY-drag.y))}px`};handle.onpointerup=handle.onpointercancel=()=>drag=null;document.querySelector('#minimizeScratch').onclick=()=>{panel.classList.toggle('minimized');document.querySelector('#minimizeScratch').textContent=panel.classList.contains('minimized')?'＋':'−';keepScratchOnScreen()};document.querySelector('#maximizeScratch').onclick=()=>{if(panel.classList.toggle('maximized')){const r=root.getBoundingClientRect();restoreBox={left:r.left,top:r.top,width:panel.offsetWidth,height:panel.offsetHeight};root.classList.add('scratch-floating');root.style.left='8px';root.style.top='8px';panel.style.width='calc(100vw - 16px)';panel.style.height='calc(100vh - 16px)'}else if(restoreBox){root.style.left=`${restoreBox.left}px`;root.style.top=`${restoreBox.top}px`;panel.style.width=`${restoreBox.width}px`;panel.style.height=`${restoreBox.height}px`}};addEventListener('resize',keepScratchOnScreen);
  let pages;try{pages=JSON.parse(localStorage.getItem('vectoriaScratchPages')||'null')}catch(e){pages=null}if(!Array.isArray(pages)||!pages.length)pages=[{text:localStorage.getItem('vectoriaScratchText')||'',image:''}];let page=0,drawing=false,erase=false,highlight=false;
  const persist=()=>{try{localStorage.setItem('vectoriaScratchPages',JSON.stringify(pages))}catch(e){toast('พื้นที่บันทึกกระดาษทดเต็ม ลองลบหน้าที่ไม่ใช้')}};
  const savePage=()=>{pages[page].text=text.value;pages[page].image=c.toDataURL('image/png');persist()};
  const loadPage=()=>{text.value=pages[page].text||'';ctx.clearRect(0,0,c.width,c.height);if(pages[page].image){const img=new Image();img.onload=()=>ctx.drawImage(img,0,0);img.src=pages[page].image}label.textContent=`หน้า ${page+1} / ${pages.length}`;document.querySelector('#prevScratchPage').disabled=page===0;document.querySelector('#nextScratchPage').disabled=page===pages.length-1;document.querySelector('#deleteScratchPage').disabled=pages.length===1};
  document.querySelector('#scratchToggle').onclick=()=>root.classList.add('open');document.querySelector('#closeScratch').onclick=()=>{savePage();root.classList.remove('open')};text.oninput=()=>{pages[page].text=text.value;persist()};
  document.querySelector('#prevScratchPage').onclick=()=>{if(page>0){savePage();page--;loadPage()}};document.querySelector('#nextScratchPage').onclick=()=>{if(page<pages.length-1){savePage();page++;loadPage()}};
  document.querySelector('#addScratchPage').onclick=()=>{if(pages.length>=10){toast('กระดาษทดเพิ่มได้สูงสุด 10 หน้า');return}savePage();pages.push({text:'',image:''});page=pages.length-1;persist();loadPage()};
  document.querySelector('#deleteScratchPage').onclick=()=>{if(pages.length===1)return;pages.splice(page,1);page=Math.min(page,pages.length-1);persist();loadPage()};
  ctx.lineCap='round';ctx.lineJoin='round';const point=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};c.onpointerdown=e=>{drawing=true;c.setPointerCapture(e.pointerId);c._lastScratchPoint=point(e)};c.onpointermove=e=>{if(!drawing)return;const p=point(e),last=c._lastScratchPoint||p;ctx.globalCompositeOperation=erase?'destination-out':'source-over';ctx.globalAlpha=highlight?.11:1;ctx.strokeStyle=highlight?'#ffe02f':'#193c63';ctx.lineWidth=erase?35:highlight?28:5;ctx.beginPath();ctx.moveTo(last[0],last[1]);ctx.lineTo(p[0],p[1]);ctx.stroke();c._lastScratchPoint=p};c.onpointerup=c.onpointercancel=()=>{if(!drawing)return;drawing=false;c._lastScratchPoint=null;ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;savePage()};
  const activate=id=>['penTool','highlightTool','eraserTool'].forEach(tool=>document.querySelector('#'+tool).classList.toggle('active',tool===id));document.querySelector('#penTool').onclick=()=>{erase=false;highlight=false;activate('penTool')};document.querySelector('#highlightTool').onclick=()=>{erase=false;highlight=true;activate('highlightTool')};document.querySelector('#eraserTool').onclick=()=>{erase=true;highlight=false;activate('eraserTool')};document.querySelector('#clearDrawing').onclick=()=>{ctx.clearRect(0,0,c.width,c.height);savePage()};document.querySelector('#clearAllScratch').onclick=()=>{ctx.clearRect(0,0,c.width,c.height);text.value='';pages[page]={text:'',image:''};persist()};loadPage()
};

const renderQ5LessonBeforeFractionLayout=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeFractionLayout();const modal=document.querySelector('#rootHelpModal'),dialog=modal?.querySelector('.root-help-dialog');if(dialog){dialog.innerHTML='<button class="root-help-close" id="rootHelpClose">×</button><small>วิธีถอดรากแบบง่ายสำหรับผู้เริ่มต้น</small><h2>ทำไม √841 = 29?</h2><div class="root-help-rule"><b>ความหมายของ √841</b><span>หา “จำนวนบวก” ที่นำมาคูณตัวเองแล้วได้ 841</span></div><div class="easy-root-range"><div><small>ลอง 28</small><b>28² = 784</b><span>ยังน้อยกว่า 841</span></div><div class="correct"><small>ลอง 29</small><b>29² = 841</b><span>พอดี ✓</span></div><div><small>ลอง 30</small><b>30² = 900</b><span>มากกว่า 841</span></div></div><div class="easy-root-result"><span>เพราะ</span><b>29 × 29 = 841</b><strong>ดังนั้น √841 = 29</strong></div><div class="root-check">ตรวจย้อนกลับ: 29² = 29 × 29 = 841 ✓</div><p class="root-note">เราเลือก 29 ไม่ใช่ -29 เพราะเครื่องหมาย √ หมายถึงรากที่สองหลัก ซึ่งเป็นค่าที่ไม่ติดลบ</p>';dialog.querySelector('#rootHelpClose').onclick=()=>{modal.hidden=true;document.body.style.overflow=''}}const unitColumns=document.querySelector('.unit-vector-columns');if(!unitColumns)return;const unitSection=unitColumns.closest('section');const reason=unitSection.querySelector('.formula-reason');reason.innerHTML='เมื่อรู้ |B| = |C| = 29 แล้ว ใช้สูตร <strong class="inline-unit-formula">v̂ = <span class="stack-fraction"><i class="math-vector">v</i><i>|<span class="math-vector">v</span>|</i></span></strong> โดยนำพิกัดทุกตัวหารด้วยขนาดของเวกเตอร์นั้น';const cards=unitColumns.querySelectorAll(':scope>div');const frac=(top)=>`<span class="stack-fraction coordinate-fraction"><i>${top}</i><i>29</i></span>`;const setFormula=(card,name,x,y)=>{const rows=card.querySelectorAll('.vertical-calculation>div');rows[0].querySelector('strong').innerHTML=`${name}̂ = <span class="stack-fraction"><i>${name}</i><i>|${name}|</i></span>`;rows[1].querySelector('strong').innerHTML=`${name}̂ = <span class="stack-fraction"><i>(${x}, ${y})</i><i>29</i></span>`;rows[2].querySelector('small').textContent='③ หารพิกัด x และ y แยกทีละค่า';rows[2].querySelector('strong').innerHTML=`<span class="coordinate-work"><span><b>พิกัด x</b>${frac(x)}</span><span><b>พิกัด y</b>${frac(y)}</span></span>`;rows[3].querySelector('small').textContent=`④ รวมเป็นเวกเตอร์หนึ่งหน่วยของ ${name}`;rows[3].querySelector('strong').innerHTML=`${name}̂ = (${frac(x)}, ${frac(y)})`};setFormula(cards[0],'B','21','-20');setFormula(cards[1],'C','-21','20')};

const renderQ5LessonBeforeQuestionCaption=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeQuestionCaption();const givenQuestion=document.querySelector('.q5-method-given p');if(givenQuestion)givenQuestion.textContent='จงคำนวณ dot product ระหว่าง unit vector ของ B กับ unit vector ของ C';const heading=[...document.querySelectorAll('.q5-steps section>div>b')].find(el=>el.textContent.includes('หาผลคูณจุดของเวกเตอร์หนึ่งหน่วย'));if(heading&&!heading.parentElement.querySelector('.step-question'))heading.insertAdjacentHTML('afterend','<p class="step-question">จงคำนวณ dot product ระหว่าง unit vector ของ B กับ unit vector ของ C</p>')};

const renderQ5LessonBeforeDotFractions=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeDotFractions();const heading=[...document.querySelectorAll('.q5-steps section>div>b')].find(el=>el.textContent.includes('หาผลคูณจุดของเวกเตอร์หนึ่งหน่วย'));const calc=heading?.parentElement.querySelector('.vertical-calculation');if(!calc)return;const f=(top,bottom)=>`<span class="stack-fraction dot-fraction"><i>${top}</i><i>${bottom}</i></span>`;calc.innerHTML=`
<div><small>① สูตรที่ 1: Dot Product แบบส่วนประกอบ</small><strong>B̂ · Ĉ = B̂ₓĈₓ + B̂ᵧĈᵧ</strong></div>
<div><small>② แทนพิกัดของ B̂ และ Ĉ</small><strong>B̂ · Ĉ = ${f('-21','29')} × ${f('21','29')} + ${f('20','29')} × ${f('-20','29')}</strong></div>
<div><small>③ คูณเศษกับเศษ และส่วนกับส่วน</small><strong>B̂ · Ĉ = ${f('(21)(-21)','(29)(29)')} + ${f('(-20)(20)','(29)(29)')}</strong></div>
<div><small>④ คำนวณแต่ละเศษส่วน</small><strong>B̂ · Ĉ = ${f('-441','841')} + ${f('-400','841')}</strong></div>
<div><small>⑤ ตัวส่วนเท่ากัน จึงนำตัวเศษมาบวกกัน</small><strong>B̂ · Ĉ = ${f('-441 + (-400)','841')} = ${f('-841','841')}</strong></div>
<div class="final"><small>⑥ คำตอบ</small><strong>B̂ · Ĉ = -1</strong></div>`};

const renderQ5LessonBeforeRemoveAngle=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveAngle();const angleHeading=[...document.querySelectorAll('.q5-steps section>div>b')].find(el=>el.textContent.trim()==='หามุม');angleHeading?.closest('section')?.remove();document.querySelectorAll('.q5-steps section').forEach((section,index)=>{const badge=section.querySelector(':scope>i');if(badge)badge.textContent=index+1})};

const renderQ5LessonBeforeMethod2Given=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2Given();const method=document.querySelector('.q5-method.alt');if(!method)return;const title=method.querySelector('header h2');if(title)title.textContent='รู้คุณสมบัติของเวกเตอร์หนึ่งหน่วย';if(!method.querySelector('.method2-given'))method.querySelector('header').insertAdjacentHTML('afterend','<div class="q5-method-given method2-given"><small>โจทย์กำหนดให้</small><strong>B = (-21, 20)</strong><strong>C = (21, -20)</strong><p>จงคำนวณ dot product ระหว่าง unit vector ของ B กับ unit vector ของ C</p></div>')};

const renderQ5LessonBeforeUnitRule=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitRule();const method=document.querySelector('.q5-method.alt');if(!method)return;const title=method.querySelector('header h2');if(title)title.textContent='ถ้ารู้คุณสมบัติของเวกเตอร์หนึ่งหน่วย';const explanation=[...method.children].find(el=>el.tagName==='P');if(explanation){explanation.outerHTML='<div class="unit-property-rule"><h3>กฎของเวกเตอร์หนึ่งหน่วย</h3><div><i>1</i><p>เวกเตอร์หนึ่งหน่วยทุกตัวมีขนาดเท่ากับ <strong>1</strong></p></div><div><i>2</i><p>ดังนั้นเรารู้ขนาดทันทีว่า <strong>|B̂| = 1</strong> และ <strong>|Ĉ| = 1</strong> จึงไม่ต้องกลับไปคำนวณด้วยสูตรหาขนาดอีก</p></div><div><i>3</i><p>เมื่อนำขนาดไปแทนในสูตร ส่วนของขนาดจึงเป็น <strong>|B̂||Ĉ| = 1 × 1 = 1</strong></p></div></div>'}};

const renderQ5LessonBeforeFormulaReference=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeFormulaReference();const vector=n=>`<span class="math-vector formula-vector">${n}</span>`;const dotHeading=[...document.querySelectorAll('.q5-steps section>div>b')].find(el=>el.textContent.includes('หาผลคูณจุดของเวกเตอร์หนึ่งหน่วย'));const firstRow=dotHeading?.parentElement.querySelector('.vertical-calculation>div:first-child');if(firstRow)firstRow.innerHTML=`<small>① อ้างอิงจากสูตรที่ 1: Dot Product แบบส่วนประกอบ</small><div class="formula-reference"><span>สูตรที่ 1: สูตรของเวกเตอร์ทั่วไป</span><strong>${vector('B')} · ${vector('C')} = BₓCₓ + BᵧCᵧ</strong><i>↓ เปลี่ยนเวกเตอร์ B และ C เป็น Unit Vector B̂ และ Ĉ</i><span>จึงใช้สูตรเดิมได้เป็น</span><strong>B̂ · Ĉ = B̂ₓĈₓ + B̂ᵧĈᵧ</strong></div>`;const method2=document.querySelector('.q5-method.alt');const firstEquation=method2?.querySelector('.q5-equation');if(firstEquation&&!method2.querySelector('.method2-formula-reference'))firstEquation.insertAdjacentHTML('beforebegin',`<div class="formula-reference method2-formula-reference"><span>อ้างอิงสูตรที่ 1: สูตรของเวกเตอร์ทั่วไป</span><strong>${vector('B')} · ${vector('C')} = BₓCₓ + BᵧCᵧ</strong><i>↓ เมื่อเวกเตอร์ B และ C เป็น Unit Vector</i><strong>B̂ · Ĉ = B̂ₓĈₓ + B̂ᵧĈᵧ</strong></div>`)};

const renderQ5LessonBeforeUnitDotLabel=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitDotLabel();document.querySelectorAll('.formula-reference span').forEach(el=>{if(el.textContent.trim()==='จึงใช้สูตรเดิมได้เป็น')el.textContent='จึงได้เป็นสูตรการหา dot product ของ unit vector'})};

const renderQ5LessonBeforeExpandedSquares=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeExpandedSquares();const squares=document.querySelectorAll('.easy-root-range b');const values=[[28,784],[29,841],[30,900]];squares.forEach((el,index)=>{const pair=values[index];if(pair)el.textContent=`${pair[0]} × ${pair[0]} = ${pair[0]}² = ${pair[1]}`})};

const renderQ5LessonBeforeRemoveUnitRuleThird=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveUnitRuleThird();document.querySelector('.unit-property-rule>div:nth-of-type(3)')?.remove()};

const renderQ5LessonBeforeRemoveArccos=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveArccos();const equations=document.querySelectorAll('.q5-method.alt .q5-equation');if(equations.length>1)equations[1].remove();document.querySelector('.q5-cos-table')?.remove()};

const renderQ5LessonBeforeUnitReason=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitReason();document.querySelectorAll('.formula-reference').forEach(box=>{const arrow=box.querySelector(':scope>i');if(!arrow||box.querySelector('.unit-change-reason'))return;arrow.insertAdjacentHTML('afterend','<p class="unit-change-reason"><b>เหตุผลที่เปลี่ยนได้:</b> เพราะโจทย์ถาม dot product ระหว่าง Unit Vector ของ B และ C จึงนำเวกเตอร์เดิมแต่ละตัวหารด้วยขนาดของตัวเอง ได้ B̂ และ Ĉ ที่มีขนาดเท่ากับ 1 โดยยังชี้ทิศทางเดิม</p>')})};

const renderQ5LessonBeforeConciseUnitReason=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeConciseUnitReason();document.querySelectorAll('.unit-change-reason').forEach(el=>{el.innerHTML='<b>เหตุผล:</b> โจทย์ถาม dot product ระหว่าง Unit Vector ของ B และ C จึงต้องหา B̂ · Ĉ'})};

const renderQ5LessonBeforeRemoveWordOriginal=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveWordOriginal();const root=document.querySelector('.q5-course');if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())node.nodeValue=node.nodeValue.replaceAll('เดิม','')};

const renderQ5LessonBeforeMethod2Work=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2Work();const equation=document.querySelector('.q5-method.alt .q5-equation');if(!equation)return;const f=(top,bottom)=>`<span class="stack-fraction dot-fraction"><i>${top}</i><i>${bottom}</i></span>`;equation.className='q5-equation method2-work';equation.innerHTML=`<h3>แสดงวิธีทำทีละขั้น</h3><div><small>① แทนพิกัดของ B̂ และ Ĉ</small><strong>B̂ · Ĉ = ${f('-21','29')} × ${f('21','29')} + ${f('20','29')} × ${f('-20','29')}</strong></div><div><small>② คูณเศษกับเศษ และส่วนกับส่วน</small><strong>B̂ · Ĉ = ${f('-441','841')} + ${f('-400','841')}</strong></div><div><small>③ ตัวส่วนเท่ากัน จึงรวมตัวเศษ</small><strong>B̂ · Ĉ = ${f('-441 + (-400)','841')}</strong></div><div><small>④ บวกตัวเศษ</small><strong>B̂ · Ĉ = ${f('-841','841')}</strong></div><div class="final"><small>⑤ คำตอบ</small><strong>B̂ · Ĉ = -1</strong></div>`};

const renderQ5LessonBeforeRemovePracticeAngle=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemovePracticeAngle();const practice=document.querySelector('.q5-practice');if(!practice)return;const instruction=[...practice.querySelectorAll(':scope>p')].find(el=>el.id!=='q5PracticeResult');if(instruction)instruction.textContent='ทำตามขั้นตอนเดียวกับโจทย์จริง: หาขนาด → ทำเป็น Unit Vector → คำนวณ Dot Product';document.querySelector('#q5Angle')?.closest('label')?.remove();const button=document.querySelector('#checkQ5Practice');if(button)button.onclick=()=>{const vals=['q5MagP','q5MagQ','q5Dot'].map(id=>document.querySelector('#'+id).value.trim()),out=document.querySelector('#q5PracticeResult'),next=document.querySelector('#nextBtn');if(vals.some(v=>v==='')){out.className='practice-bad';out.textContent='กรอกคำตอบให้ครบทั้ง 3 ช่องก่อนนะ';return}const ok=+vals[0]===5&&+vals[1]===5&&+vals[2]===-1;out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?'✓ ถูกต้อง! |B| = |C| = 5 และ B̂ · Ĉ = -1':'ยังไม่ถูก ลองหาขนาดของ B และ C ก่อน แล้วทำเป็น Unit Vector';beep(ok);if(ok){next.disabled=false;next.innerHTML='พร้อมสู้จักรพรรดิยูนิต <span>⚔</span>'}}};

const renderQ5LessonBeforePracticeUnitValues=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforePracticeUnitValues();const input=document.querySelector('#q5Dot'),label=input?.closest('label');if(label)label.innerHTML='<span>B̂ · Ĉ = (3/5, 4/5) · (-3/5, -4/5)</span><input id="q5Dot" inputmode="decimal" placeholder="คำตอบ">'};

const renderQ5LessonBeforeMethod2Target=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2Target();const method=document.querySelector('.q5-method.alt'),rule=method?.querySelector('.unit-property-rule');if(rule&&!method.querySelector('.method2-dot-target'))rule.insertAdjacentHTML('afterend','<div class="method2-dot-target"><small>สิ่งที่เรารู้</small><p>เรารู้แล้วว่า <strong>ขนาดของ B̂ คือ |B̂| = 1</strong> และ <strong>ขนาดของ Ĉ คือ |Ĉ| = 1</strong> จึงไม่ต้องหาขนาดอีก</p><small>สิ่งที่โจทย์ถาม</small><p>โจทย์ถามหา Dot Product ดังนั้นค่าที่ต้องคำนวณคือ</p><b>B̂ · Ĉ</b></div>')};

const renderQ5LessonBeforeMethod2TargetOnly=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2TargetOnly();const box=document.querySelector('.q5-method.alt .method2-formula-reference');if(!box)return;const formulas=box.querySelectorAll(':scope>strong'),firstLabel=box.querySelector(':scope>span');if(firstLabel)firstLabel.textContent='อ้างอิงสูตรที่ 1: สูตรของเวกเตอร์ทั่วไป';if(formulas[1]){formulas[1].textContent='B̂ · Ĉ';formulas[1].insertAdjacentHTML('beforebegin','<span class="target-label">ค่าที่โจทย์ต้องการหา</span>')}const reason=box.querySelector('.unit-change-reason');if(reason)reason.innerHTML='<b>เหตุผล:</b> ตรงนี้ระบุเฉพาะค่าที่โจทย์ถาม จึงเขียนเพียง B̂ · Ĉ ส่วนการแทนสูตรส่วนประกอบจะแสดงในขั้นวิธีทำ'};

const renderQ5LessonBeforeShortPracticeDotLabel=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeShortPracticeDotLabel();const label=document.querySelector('#q5Dot')?.closest('label'),text=label?.querySelector('span');if(text)text.textContent='B̂ · Ĉ'};

const renderQ5LessonBeforeMethod2UnitSubstitution=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2UnitSubstitution();const row=document.querySelector('.method2-work>div:first-of-type');if(!row)return;const f=(top,bottom)=>`<span class="stack-fraction dot-fraction"><i>${top}</i><i>${bottom}</i></span>`;const pair=(x,y)=>`(${f(x,'29')}, ${f(y,'29')})`;row.innerHTML=`<small>① แทน B̂ และ Ĉ ด้วยพิกัดของ Unit Vector</small><div class="unit-pair-values"><span><b>B̂ =</b> ${pair('-21','20')}</span><span><b>Ĉ =</b> ${pair('21','-20')}</span></div><strong class="unit-dot-substitution">B̂ · Ĉ = ${pair('-21','20')} · ${pair('21','-20')}</strong><em>กระจาย Dot Product โดยนำพิกัด x คูณกัน และพิกัด y คูณกัน</em><strong>B̂ · Ĉ = ${f('-21','29')} × ${f('21','29')} + ${f('20','29')} × ${f('-20','29')}</strong>`};

const renderQ5LessonBeforeMethod2FormulaCard=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2FormulaCard();const box=document.querySelector('.q5-method.alt .method2-formula-reference');if(!box)return;box.innerHTML='<span>สูตรที่ 2: Dot Product ของ Unit Vector</span><strong>B̂ · Ĉ</strong><p class="unit-change-reason"><b>เหตุผลที่ใช้สูตรที่ 2:</b> เรารู้แล้วว่า B̂ และ Ĉ เป็น Unit Vector จึงรู้ขนาดทันทีว่า |B̂| = |Ĉ| = 1 และโจทย์ถามค่า Dot Product ระหว่าง Unit Vector ทั้งสอง</p><span class="target-label">ค่าที่โจทย์ต้องการหา</span><strong>B̂ · Ĉ</strong>'};

const renderQ5LessonBeforeSymbolConsistency=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSymbolConsistency();const root=document.querySelector('.q5-course');if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];let node;while(node=walker.nextNode()){if(node.parentElement?.closest('.math-vector')||['SCRIPT','STYLE','INPUT','BUTTON'].includes(node.parentElement?.tagName))continue;if(/\b[BC]\b(?![̂ₓᵧ])/.test(node.nodeValue))nodes.push(node)}nodes.forEach(textNode=>{const parts=textNode.nodeValue.split(/(\b[BC]\b(?![̂ₓᵧ]))/g);if(parts.length<2)return;const fragment=document.createDocumentFragment();parts.forEach(part=>{if(part==='B'||part==='C'){const span=document.createElement('span');span.className='math-vector consistent-vector';span.textContent=part;fragment.append(span)}else fragment.append(document.createTextNode(part))});textNode.replaceWith(fragment)})};

const renderQ5LessonBeforeSecondDotEquation=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSecondDotEquation();const box=document.querySelector('.q5-method.alt .method2-formula-reference');if(!box)return;box.querySelectorAll(':scope>strong').forEach(el=>{el.textContent='B̂ · Ĉ = |B̂||Ĉ| cos θ'});const reason=box.querySelector('.unit-change-reason');if(reason)reason.innerHTML='<b>เหตุผลที่ใช้สูตรที่ 2:</b> เรารู้ว่า B̂ และ Ĉ เป็น Unit Vector จึงรู้ขนาดทันทีว่า |B̂| = |Ĉ| = 1 และใช้สมการ Dot Product ที่เขียนด้วยขนาดและมุมได้'};

const renderQ5LessonBeforeComponentArrows=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeComponentArrows();document.querySelectorAll('.formula-reference strong').forEach(el=>{if(!el.textContent.includes('BₓCₓ'))return;const v=n=>`<span class="math-vector">${n}</span>`,c=(n,axis)=>`<span class="vector-component">${v(n)}<sub>${axis}</sub></span>`;el.innerHTML=`${v('B')} · ${v('C')} = ${c('B','x')}${c('C','x')} + ${c('B','y')}${c('C','y')}`})};

const renderQ5LessonBeforeGeneralSecondFormula=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeGeneralSecondFormula();const box=document.querySelector('.q5-method.alt .method2-formula-reference');if(!box)return;const v=n=>`<span class="math-vector formula-vector">${n}</span>`;box.innerHTML=`<span>สูตรที่ 2: Dot Product ของเวกเตอร์ทั่วไป</span><strong>${v('B')} · ${v('C')} = |${v('B')}||${v('C')}| cos θ</strong><i>↓ เมื่อเวกเตอร์ B และ C เป็น Unit Vector</i><span>สูตรที่ 2 ในรูป Unit Vector</span><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><p class="unit-change-reason"><b>เหตุผลที่ใช้สูตรที่ 2:</b> เรารู้ว่า B̂ และ Ĉ เป็น Unit Vector จึงรู้ขนาดทันทีว่า |B̂| = |Ĉ| = 1</p><span class="target-label">ค่าที่โจทย์ต้องการหา</span><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong>`};

const renderQ5LessonBeforeSeparateUnitMagnitudes=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSeparateUnitMagnitudes();document.querySelectorAll('.q5-method.alt .unit-change-reason').forEach(el=>{el.innerHTML=el.innerHTML.replace('|B̂| = |Ĉ| = 1','|B̂| = 1 และ |Ĉ| = 1')})};

const renderQ5LessonBeforeExplicitTarget=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeExplicitTarget();const box=document.querySelector('.q5-method.alt .method2-formula-reference'),target=box?.querySelector('.target-label');const formula=target?.nextElementSibling;if(formula?.tagName==='STRONG')formula.textContent='B̂ · Ĉ = |B̂||Ĉ| cos θ  คือ  B̂ · Ĉ'};

const renderQ5LessonBeforeShortAngleMethod=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeShortAngleMethod();const work=document.querySelector('.q5-method.alt .method2-work');if(!work)return;work.innerHTML='<h3>แสดงวิธีทำทีละขั้น</h3><div><small>① ใช้สูตรที่ 2 ของ Dot Product</small><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong></div><div><small>② แทนขนาดของ Unit Vector</small><p>เพราะ <b>|B̂| = 1</b> และ <b>|Ĉ| = 1</b></p><strong>B̂ · Ĉ = (1)(1) cos θ = cos θ</strong></div><div><small>③ ใช้ความสัมพันธ์จากด่าน 4</small><p>เวกเตอร์ B และ C ชี้ตรงข้ามกัน เพราะ C = -B จึงเป็นมุมตรง</p><strong>θ = 180°</strong></div><div><small>④ แทนค่ามุม</small><strong>cos 180° = -1</strong></div><div class="final"><small>⑤ คำตอบ</small><strong>B̂ · Ĉ = cos 180° = -1</strong><p>วิธีนี้ไม่ต้องหาพิกัดของ Unit Vector ซ้ำ</p></div>'};

const renderQ5LessonBeforeShortMethodSymbols=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeShortMethodSymbols();const root=document.querySelector('.method2-work');if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];let node;while(node=walker.nextNode()){if(node.parentElement?.closest('.math-vector')||/^(SCRIPT|STYLE)$/.test(node.parentElement?.tagName))continue;if(/\b[BC]\b(?![̂ₓᵧ])/.test(node.nodeValue))nodes.push(node)}nodes.forEach(textNode=>{const parts=textNode.nodeValue.split(/(\b[BC]\b(?![̂ₓᵧ]))/g),fragment=document.createDocumentFragment();parts.forEach(part=>{if(part==='B'||part==='C'){const span=document.createElement('span');span.className='math-vector consistent-vector';span.textContent=part;fragment.append(span)}else fragment.append(document.createTextNode(part))});textNode.replaceWith(fragment)})};

const renderQ5LessonBeforeTargetOnlyFinal=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeTargetOnlyFinal();const target=document.querySelector('.q5-method.alt .method2-formula-reference .target-label'),value=target?.nextElementSibling;if(value?.tagName==='STRONG')value.textContent='B̂ · Ĉ'};

const renderQ5LessonBeforeMagnitudeLines=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMagnitudeLines();const row=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('②'));if(!row)return;row.innerHTML='<small>② แทนขนาดของ Unit Vector</small><p>เพราะ <b>|B̂| = 1</b> และ <b>|Ĉ| = 1</b></p><div class="vertical-substitution"><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><strong>B̂ · Ĉ = (1)(1) cos θ</strong><strong>B̂ · Ĉ = 1 cos θ</strong><strong>B̂ · Ĉ = cos θ</strong></div>'};

const renderQ5LessonBeforeParenthesizedOne=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeParenthesizedOne();document.querySelectorAll('.vertical-substitution strong').forEach(el=>{if(el.textContent.trim()==='B̂ · Ĉ = 1 cos θ')el.textContent='B̂ · Ĉ = (1) cos θ'})};

const renderQ5LessonBeforeCosineStep=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCosineStep();const rows=[...document.querySelectorAll('.method2-work>div')],third=rows.find(el=>el.querySelector('small')?.textContent.includes('③')),fourth=rows.find(el=>el.querySelector('small')?.textContent.includes('④'));if(third)third.innerHTML='<small>③ หาค่า cos θ</small><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงมีมุมระหว่างเวกเตอร์เท่ากับ 180°</p><strong>cos θ = cos 180° = -1</strong>';if(fourth)fourth.innerHTML='<small>④ แทนค่า cos θ ในสมการ Dot Product</small><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = -1</strong>'};

const renderQ5LessonBeforeArccosDerivation=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeArccosDerivation();const rows=[...document.querySelectorAll('.method2-work>div')],third=rows.find(el=>el.querySelector('small')?.textContent.includes('③')),fourth=rows.find(el=>el.querySelector('small')?.textContent.includes('④'));if(third)third.innerHTML='<small>③ หามุมด้วย arccos หรือ cos⁻¹</small><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงมีค่า <b>cos θ = -1</b></p><div class="vertical-substitution arccos-lines"><strong>cos θ = -1</strong><strong>cos⁻¹(cos θ) = cos⁻¹(-1)</strong><strong>θ = cos⁻¹(-1)</strong><strong>θ = 180°</strong></div><p class="arccos-note">cos⁻¹ อ่านว่า “อาร์กคอส” ใช้เปลี่ยนค่าของ cos กลับเป็นมุม</p>';if(fourth)fourth.innerHTML='<small>④ แทนมุมกลับในสมการ Dot Product</small><div class="vertical-substitution"><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = cos 180°</strong><strong>B̂ · Ĉ = -1</strong></div>'};

const renderQ5LessonBeforeRemoveArccosAgain=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveArccosAgain();const rows=[...document.querySelectorAll('.method2-work>div')],second=rows.find(el=>el.querySelector('small')?.textContent.includes('②')),third=rows.find(el=>el.querySelector('small')?.textContent.includes('③')),fourth=rows.find(el=>el.querySelector('small')?.textContent.includes('④'));if(second)second.innerHTML='<small>② เตรียมค่าขนาดของ Unit Vector</small><p>Unit Vector มีขนาดเท่ากับ 1 จึงได้</p><strong>|B̂| = 1</strong><strong>|Ĉ| = 1</strong>';if(third)third.innerHTML='<small>③ แทนขนาดให้สูตรเหลือ cos θ</small><div class="vertical-substitution"><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><strong>B̂ · Ĉ = (1)(1) cos θ</strong><strong>B̂ · Ĉ = (1) cos θ</strong><strong>B̂ · Ĉ = cos θ</strong></div>';if(fourth)fourth.innerHTML='<small>④ ใช้มุมของเวกเตอร์ที่ชี้ตรงข้ามกัน</small><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงมีมุม θ = 180°</p><div class="vertical-substitution"><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = cos 180°</strong><strong>B̂ · Ĉ = -1</strong></div>'};

const renderQ5LessonBeforeRearrangedCos=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRearrangedCos();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④'));if(!fourth)return;const f=(top,bottom)=>`<span class="stack-fraction cos-fraction"><i>${top}</i><i>${bottom}</i></span>`;fourth.innerHTML=`<small>④ หาค่า cos θ โดยย้ายข้างสมการ</small><div class="vertical-substitution"><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><span class="move-note">หารทั้งสองข้างด้วย |B̂||Ĉ|</span><strong>cos θ = ${f('B̂ · Ĉ','|B̂||Ĉ|')}</strong><span class="move-note">แทน B̂ · Ĉ = -1, |B̂| = 1 และ |Ĉ| = 1</span><strong>cos θ = ${f('-1','(1)(1)')}</strong><strong>cos θ = -1</strong></div>`};

const renderQ5LessonBeforeCosFinal=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCosFinal();const final=document.querySelector('.method2-work>.final');if(final)final.innerHTML='<small>⑤ สรุปคำตอบ</small><div class="vertical-substitution"><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = -1</strong></div>'};

const renderQ5LessonBeforeNoPrematureDot=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeNoPrematureDot();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④')),final=document.querySelector('.method2-work>.final');const f=(top,bottom)=>`<span class="stack-fraction cos-fraction"><i>${top}</i><i>${bottom}</i></span>`;if(fourth)fourth.innerHTML=`<small>④ หาค่า cos θ โดยย้ายข้างสมการ</small><div class="vertical-substitution"><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><span class="move-note">หารทั้งสองข้างด้วย |B̂||Ĉ|</span><strong>cos θ = ${f('B̂ · Ĉ','|B̂||Ĉ|')}</strong><span class="move-note">แทน |B̂| = 1 และ |Ĉ| = 1</span><strong>cos θ = ${f('B̂ · Ĉ','(1)(1)')}</strong><strong>cos θ = ${f('B̂ · Ĉ','1')}</strong><strong>cos θ = B̂ · Ĉ</strong></div>`;if(final)final.innerHTML='<small>⑤ ใช้มุมของเวกเตอร์ที่ชี้ตรงข้ามกันและสรุปคำตอบ</small><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงมีมุม θ = 180°</p><div class="vertical-substitution"><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = cos 180°</strong><strong>B̂ · Ĉ = -1</strong></div>'};

const renderQ5LessonBeforeFormula2Reason=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeFormula2Reason();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④'));if(fourth&&!fourth.querySelector('.formula2-use-reason'))fourth.querySelector('small')?.insertAdjacentHTML('afterend','<p class="formula2-use-reason"><b>อ้างอิงจากสูตรที่ 2</b> เพราะในสูตรมี cos θ จึงนำมาใช้จัดรูปเพื่อหาค่า cos θ</p>')};

const renderQ5LessonBeforeThetaFirst=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeThetaFirst();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④')),final=document.querySelector('.method2-work>.final');if(fourth)fourth.innerHTML='<small>④ ต้องรู้ค่า θ ก่อน จึงจะหาค่า cos θ ได้</small><p class="formula2-use-reason"><b>ลำดับสำคัญ:</b> ต้องหาก่อนว่ามุม θ เท่ากับกี่องศา แล้วจึงนำมุมนั้นไปคำนวณค่า cos θ</p><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงเป็นมุมตรง</p><div class="vertical-substitution"><strong>θ = 180°</strong><strong>cos θ = cos 180°</strong><strong>cos θ = -1</strong></div>';if(final)final.innerHTML='<small>⑤ แทนค่า cos θ และสรุปคำตอบ</small><div class="vertical-substitution"><strong>B̂ · Ĉ = cos θ</strong><strong>B̂ · Ĉ = cos 180°</strong><strong>B̂ · Ĉ = -1</strong></div>'};

const renderQ5LessonBeforeFinalArccos=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeFinalArccos();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④'));if(!fourth)return;fourth.innerHTML='<small>④ หาค่ามุม θ ด้วย arccos หรือ cos⁻¹</small><p>เวกเตอร์ <span class="math-vector consistent-vector">B</span> และ <span class="math-vector consistent-vector">C</span> ชี้ตรงข้ามกัน จึงมีค่า <b>cos θ = -1</b></p><div class="vertical-substitution arccos-lines"><strong>cos θ = -1</strong><strong>θ = cos⁻¹(-1)</strong><strong>θ = 180°</strong></div><p class="arccos-note">cos⁻¹ อ่านว่า “อาร์กคอส” ใช้เปลี่ยนค่าของ cos กลับเป็นค่ามุม</p>'};

const renderQ5LessonBeforeThetaFromFormula=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeThetaFromFormula();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④'));if(!fourth)return;const f=(top,bottom)=>`<span class="stack-fraction cos-fraction"><i>${top}</i><i>${bottom}</i></span>`;fourth.innerHTML=`<small>④ หา θ จากสูตรที่ 2</small><div class="vertical-substitution arccos-lines"><strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><span class="move-note">หารทั้งสองข้างด้วย |B̂||Ĉ|</span><strong>cos θ = ${f('B̂ · Ĉ','|B̂||Ĉ|')}</strong><span class="move-note">ใช้ cos⁻¹ ทั้งสองข้างเพื่อให้เหลือ θ</span><strong>θ = cos⁻¹(${f('B̂ · Ĉ','|B̂||Ĉ|')})</strong><span class="move-note">แทน B̂ · Ĉ = -1, |B̂| = 1 และ |Ĉ| = 1</span><strong>θ = cos⁻¹(${f('-1','(1)(1)')})</strong><strong>θ = cos⁻¹(-1)</strong><strong>θ = 180°</strong></div>`};

const renderQ5LessonBeforeThetaGraph=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeThetaGraph();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④'));if(!fourth)return;const title=fourth.querySelector('small');title.textContent='④ หา θ จากสูตรที่ 2';title.insertAdjacentHTML('afterend','<p class="theta-start"><b>ตั้งต้นหา θ จากสูตรนี้</b><span>B̂ · Ĉ = |B̂||Ĉ| cos θ</span></p><div class="theta-mini-graph"><svg viewBox="0 0 520 270" role="img" aria-label="กราฟเวกเตอร์หนึ่งหน่วย B hat และ C hat ทำมุม theta"><defs><marker id="thetaArrowB" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#4ee8ff"/></marker><marker id="thetaArrowC" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#ff78cf"/></marker></defs><g class="grid"><path d="M50 45V235M110 45V235M170 45V235M230 45V235M290 45V235M350 45V235M410 45V235M470 45V235M35 65H485M35 105H485M35 145H485M35 185H485M35 225H485"/></g><path class="axis" d="M35 145H485M260 35V240"/><circle cx="260" cy="145" r="5" fill="#fff"/><path class="vec-b" d="M260 145L400 65" marker-end="url(#thetaArrowB)"/><path class="vec-c" d="M260 145L120 225" marker-end="url(#thetaArrowC)"/><path class="angle-arc" d="M327 107A78 78 0 0 0 193 183"/><text class="label-b" x="407" y="58">B̂</text><text class="label-c" x="92" y="239">Ĉ</text><text class="label-theta" x="224" y="72">θ = ?</text><text class="axis-label" x="472" y="137">x</text><text class="axis-label" x="268" y="48">y</text></svg><div><span><i class="cyan-dot"></i>B̂</span><span><i class="pink-dot"></i>Ĉ</span><strong>มุมระหว่างเวกเตอร์ = θ</strong></div></div>')};

const renderQ5LessonBeforeThetaCaption=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeThetaCaption();const graph=document.querySelector('.theta-mini-graph');if(graph&&!graph.previousElementSibling?.classList.contains('theta-example-caption'))graph.insertAdjacentHTML('beforebegin','<p class="theta-example-caption"><b>ภาพสมมุติตัวอย่าง</b><span>ใช้เพื่อให้เห็นภาพว่า θ คือ “มุมระหว่างเวกเตอร์สองตัว” ที่เริ่มจากจุดเดียวกัน ไม่ใช่พิกัดจริงหรือสเกลจริงของโจทย์</span></p>')};

const renderQ5LessonBeforeCorrectInverseExplanation=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCorrectInverseExplanation();const fourth=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('④')),calc=fourth?.querySelector('.vertical-substitution');if(!calc)return;const f=(top,bottom)=>`<span class="stack-fraction cos-fraction"><i>${top}</i><i>${bottom}</i></span>`;calc.innerHTML=`<strong>B̂ · Ĉ = |B̂||Ĉ| cos θ</strong><span class="move-note">หารทั้งสองข้างด้วย |B̂||Ĉ|</span><strong>cos θ = ${f('B̂ · Ĉ','|B̂||Ĉ|')}</strong><span class="move-note inverse-note"><b>ใช้ cos⁻¹ ทั้งสองข้าง</b> เพราะ cos⁻¹ เป็นฟังก์ชันผกผันของ cos จึงได้ cos⁻¹(cos θ) = θ เมื่อมุม θ อยู่ระหว่าง 0° ถึง 180°</span><strong>θ = cos⁻¹(${f('B̂ · Ĉ','|B̂||Ĉ|')})</strong><span class="move-note">แทน |B̂| = 1 และ |Ĉ| = 1</span><strong>θ = cos⁻¹(${f('B̂ · Ĉ','(1)(1)')})</strong><strong>θ = cos⁻¹(B̂ · Ĉ)</strong><span class="move-note">เมื่อคำนวณ Dot Product ได้ B̂ · Ĉ = -1 จึงแทนค่านี้ในขั้นสุดท้าย</span><strong>θ = cos⁻¹(-1)</strong><strong>θ = 180°</strong>`};

const renderQ5LessonBeforeSimpleInverseText=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSimpleInverseText();const note=document.querySelector('.method2-work .inverse-note');if(note)note.innerHTML='<b>ต้องการหา θ ทำอย่างไร?</b> ตอนนี้ θ อยู่ภายใน cos จึงใช้ cos⁻¹ เพื่อย้อนกลับการทำ cos ทำให้ cos⁻¹(cos θ) เหลือเพียง θ — cos⁻¹ อ่านว่า “อาร์กคอส” และไม่ใช่ 1 ÷ cos'};

const renderQ5LessonBeforeMethod2ConditionTitle=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2ConditionTitle();const title=document.querySelector('.q5-method.alt header h2');if(title)title.textContent='ถ้ารู้คุณสมบัติของเวกเตอร์หนึ่งหน่วย หรือโจทย์บอกให้ใช้คุณสมบัติของเวกเตอร์หนึ่งหน่วย'};

const renderQ5LessonBeforeInverseBridgeLine=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeInverseBridgeLine();const calc=[...document.querySelectorAll('.method2-work .vertical-substitution')].find(el=>[...el.querySelectorAll('strong')].some(s=>s.textContent.trim().startsWith('θ = cos⁻¹(')));if(!calc)return;const thetaLine=[...calc.querySelectorAll(':scope>strong')].find(s=>s.textContent.trim().startsWith('θ = cos⁻¹(')),cosLine=[...calc.querySelectorAll(':scope>strong')].find(s=>s.textContent.trim().startsWith('cos θ =')&&s.querySelector('.cos-fraction'));if(thetaLine&&cosLine&&!calc.querySelector('.inverse-bridge')){const fraction=cosLine.querySelector('.cos-fraction').outerHTML;thetaLine.insertAdjacentHTML('beforebegin',`<strong class="inverse-bridge">cos⁻¹(cos θ) = cos⁻¹(${fraction})</strong>`)}const note=calc.querySelector('.inverse-note');if(note)note.innerHTML='<b>cos θ ไม่ได้หายหรือย้ายข้าง</b> เราใช้ cos⁻¹ ครอบทั้งสองฝั่งเพื่อย้อนกลับการทำ cos ดังนั้น cos⁻¹(cos θ) จึงเหลือ θ'};

const renderQ5LessonBeforeMethod2ReasonReplacement=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2ReasonReplacement();const reason=document.querySelector('.q5-method.alt .method2-formula-reference .unit-change-reason');if(reason)reason.innerHTML='<b>เหตุผลที่ใช้สูตรที่ 2:</b> เรารู้ว่า B̂ และ Ĉ เป็น Unit Vector จึงรู้ขนาดทันทีว่า |B̂| = 1 และ |Ĉ| = 1 ไม่ต้องคำนวณหาขนาดหรือทำให้เป็น Unit Vector ซ้ำ สามารถแทนค่า 1 ลงในสูตรที่ 2 ได้เลย'};

const renderQ5LessonBeforeStep2KnownUnit=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeStep2KnownUnit();const second=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('②'));if(second)second.innerHTML='<small>② ใช้คุณสมบัติของ Unit Vector</small><p>เรารู้ว่า <b>B̂ และ Ĉ เป็น Unit Vector</b> จึงรู้ขนาดทันทีว่า</p><div class="known-unit-values"><strong>|B̂| = 1</strong><strong>|Ĉ| = 1</strong></div><p class="known-unit-note">ไม่ต้องคำนวณหา Unit Vector ซ้ำ สามารถนำขนาด 1 ไปแทนในสูตรได้เลย</p>'};

const renderQ5LessonBeforeClearStep2=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeClearStep2();const second=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('②'));if(!second)return;second.innerHTML='<small>② อ่านสัญลักษณ์แล้วใช้คุณสมบัติของ Unit Vector</small><div class="step2-explain-flow"><div><i>1</i><p>โจทย์เขียน <b>B̂</b> และ <b>Ĉ</b> มีเครื่องหมายหมวก จึงบอกว่าเวกเตอร์ทั้งสองเป็น <strong>Unit Vector แล้ว</strong></p></div><div><i>2</i><p>Unit Vector ทุกตัวมีขนาดเท่ากับ <strong>1</strong></p></div><div class="values"><i>3</i><p><b>|B̂| = 1</b><span>และ</span><b>|Ĉ| = 1</b></p></div><div><i>4</i><p>จึงไม่ต้องหาขนาดด้วยสูตรราก และไม่ต้องหารพิกัดเพื่อสร้าง Unit Vector ซ้ำ</p></div><div class="ready"><i>5</i><p>นำค่า <strong>1</strong> ทั้งสองค่าไปแทนในสูตรที่ 2 ได้เลย</p></div></div>'};

const renderQ5LessonBeforeMethod1Condition=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod1Condition();const title=document.querySelector('.q5-method:not(.alt) header h2');if(title)title.textContent='ใช้ค่าเวกเตอร์เต็ม ๆ — ถ้าไม่รู้คุณสมบัติของ Unit Vector หรือโจทย์ไม่ได้บังคับให้ใช้คุณสมบัติของ Unit Vector'};

const renderQ5LessonBeforeTrimMethod2Reason=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeTrimMethod2Reason();const reason=document.querySelector('.q5-method.alt .method2-formula-reference .unit-change-reason');if(reason)reason.innerHTML='<b>เหตุผลที่ใช้สูตรที่ 2:</b> เรารู้ว่า B̂ และ Ĉ เป็น Unit Vector จึงรู้ขนาดทันทีว่า |B̂| = 1 และ |Ĉ| = 1 ไม่ต้องคำนวณหาขนาด'};

const renderQ5LessonBeforeMethod2RuleStep=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod2RuleStep();const method=document.querySelector('.q5-method.alt'),second=[...document.querySelectorAll('.method2-work>div')].find(el=>el.querySelector('small')?.textContent.includes('②'));method?.querySelector(':scope>.unit-property-rule')?.remove();if(second)second.innerHTML='<small>② แทนขั้นหาขนาดด้วยกฎของ Unit Vector</small><div class="unit-property-rule method-step-rule"><h3>กฎของเวกเตอร์หนึ่งหน่วย</h3><div><i>1</i><p>เวกเตอร์หนึ่งหน่วยทุกตัวมีขนาดเท่ากับ <strong>1</strong></p></div><div><i>2</i><p>ดังนั้นเรารู้ขนาดทันทีว่า <strong>|B̂| = 1</strong> และ <strong>|Ĉ| = 1</strong> จึงไม่ต้องกลับไปคำนวณด้วยสูตรหาขนาดอีก</p></div></div>'};

const renderQ5LessonBeforeCopyFormula1ToMethod2=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCopyFormula1ToMethod2();const method=document.querySelector('.q5-method.alt'),formula2=method?.querySelector('.method2-formula-reference'),formula1=[...document.querySelectorAll('.q5-method:not(.alt) .formula-reference')].find(el=>el.textContent.includes('สูตรที่ 1'));if(!method||!formula2||!formula1||method.querySelector('.method2-formula1-copy'))return;const copy=formula1.cloneNode(true);copy.classList.add('method2-formula1-copy');copy.insertAdjacentHTML('afterbegin','<h3>ทบทวนสูตรที่ 1 ก่อนใช้วิธีที่ 2</h3>');formula2.before(copy)};

const renderQ5LessonBeforeSharedMethodSteps=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSharedMethodSteps();const method1=document.querySelector('.q5-method:not(.alt)'),method2=document.querySelector('.q5-method.alt');if(!method1||!method2)return;[method1,method2].forEach(method=>{const given=method.querySelector('.q5-method-given');if(given&&!method.querySelector('.shared-dot-target'))given.insertAdjacentHTML('afterend','<div class="shared-dot-target"><small>ค่าที่โจทย์ต้องการหา</small><strong>B̂ · Ĉ</strong></div>')});const source=method1.querySelector('.q5-steps'),oldWork=method2.querySelector('.method2-work');if(!source||!oldWork)return;const copy=source.cloneNode(true);copy.classList.add('method2-shared-steps');const sections=copy.querySelectorAll(':scope>section'),first=sections[0];if(first){first.querySelector(':scope>i').textContent='1';first.querySelector(':scope>div').innerHTML='<b>ใช้กฎแทนการคำนวณหาขนาด</b><div class="unit-property-rule method-step-rule"><h3>กฎของเวกเตอร์หนึ่งหน่วย</h3><div><i>1</i><p>เวกเตอร์หนึ่งหน่วยทุกตัวมีขนาดเท่ากับ <strong>1</strong></p></div><div><i>2</i><p>ดังนั้น <strong>|B̂| = 1</strong> และ <strong>|Ĉ| = 1</strong> ไม่ต้องคำนวณด้วยสูตรหาขนาดอีก</p></div></div>'}sections.forEach((section,index)=>{const badge=section.querySelector(':scope>i');if(badge)badge.textContent=index+1});oldWork.replaceWith(copy);const modal=document.querySelector('#rootHelpModal');copy.querySelectorAll('.root-help-btn').forEach(btn=>btn.onclick=()=>{if(modal){modal.hidden=false;document.body.style.overflow='hidden'}})};

const renderQ5LessonBeforeMethod1TargetExplanation=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeMethod1TargetExplanation();const target=document.querySelector('.q5-method:not(.alt) .shared-dot-target');if(target)target.innerHTML='<div><small>โจทย์ต้องการหา</small><span>Dot Product ระหว่าง Unit Vector ของ B และ C</span></div><strong>B̂ · Ĉ</strong>'};

const renderQ5LessonBeforeCleanMethod2=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCleanMethod2();const method=document.querySelector('.q5-method.alt');if(!method)return;method.querySelector('.method2-formula1-copy')?.remove();method.querySelector('.method2-formula-reference')?.remove();method.querySelector('.method2-dot-target')?.remove();const target=method.querySelector('.shared-dot-target');if(target)target.innerHTML='<small>ค่าที่โจทย์ต้องการหา</small><strong>B̂ · Ĉ</strong>';const sections=method.querySelectorAll('.method2-shared-steps>section');if(sections[0]){const rule=sections[0].querySelector('.unit-property-rule');rule?.querySelector(':scope>div:nth-of-type(2)')?.remove()}if(sections[1])sections[1].querySelector(':scope>div').innerHTML='<b>ใช้ขนาดของ Unit Vector</b><p class="method2-known-size">ดังนั้น <strong>|B̂| = 1</strong> และ <strong>|Ĉ| = 1</strong> ไม่ต้องคำนวณด้วยสูตรหาขนาดอีก</p>';sections.forEach((section,index)=>{const badge=section.querySelector(':scope>i');if(badge)badge.textContent=index+1})};

const renderQ5LessonBeforeRemoveMethod2Entirely=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveMethod2Entirely();document.querySelector('.q5-method.alt')?.remove()};

const renderQ5LessonBeforeRemoveMethod1Header=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeRemoveMethod1Header();document.querySelector('.q5-method:not(.alt)>header')?.remove()};

const renderQ5LessonBeforeUnitVectorPurposeAndProof=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitVectorPurposeAndProof();const method=document.querySelector('.q5-method:not(.alt)'),steps=method?.querySelector('.q5-steps');if(!method||!steps)return;if(!method.querySelector('.unit-goal-explainer'))steps.insertAdjacentHTML('beforebegin','<div class="unit-goal-explainer"><small>เป้าหมายของขั้นนี้</small><h3>ทำ B และ C ให้เป็นเวกเตอร์หนึ่งหน่วย (Unit Vector)</h3><p>ตอนนี้โจทย์ให้เวกเตอร์ <span class="math-vector consistent-vector">B</span> = (-21, 20) และ <span class="math-vector consistent-vector">C</span> = (21, -20) ซึ่งยังเป็นเวกเตอร์ทั่วไป</p><strong>จึงต้องเริ่มจากหาขนาดของ B และ C เพื่อนำขนาดไปเป็นตัวหารในสูตรเวกเตอร์หนึ่งหน่วย (Unit Vector)</strong><div>B̂ = B / |B| <span>และ</span> Ĉ = C / |C|</div></div>');const sections=steps.querySelectorAll(':scope>section'),magnitude=sections[0]?.querySelector(':scope>div'),unit=sections[1]?.querySelector(':scope>div');if(magnitude&&!magnitude.querySelector('.magnitude-purpose'))magnitude.querySelector(':scope>b')?.insertAdjacentHTML('afterend','<p class="magnitude-purpose"><b>ทำไมต้องหาขนาด?</b> เพราะ |B| และ |C| จะถูกนำไปเป็นตัวหารในสูตร B̂ = B / |B| และ Ĉ = C / |C| เพื่อทำให้เป็นเวกเตอร์หนึ่งหน่วย (Unit Vector)</p>');if(unit){const heading=unit.querySelector(':scope>b');if(heading)heading.textContent='หาเวกเตอร์หนึ่งหน่วย (Unit Vector)';if(!unit.querySelector('.unit-magnitude-proof'))unit.insertAdjacentHTML('beforeend','<div class="unit-magnitude-proof"><h3>พิสูจน์ว่าเป็นเวกเตอร์หนึ่งหน่วยจริง</h3><p>เวกเตอร์หนึ่งหน่วยต้องมีขนาดเท่ากับ 1 เราจึงตรวจ B̂ และ Ĉ อีกครั้ง</p><section><small>ตรวจขนาดของ B̂</small><strong>|B̂| = √((-21/29)² + (20/29)²)</strong><strong>= √((441 + 400) / 841)</strong><strong>= √(841 / 841)</strong><strong>= √1</strong><b>|B̂| = 1 ✓</b></section><section><small>ตรวจขนาดของ Ĉ</small><strong>|Ĉ| = √((21/29)² + (-20/29)²)</strong><strong>= √((441 + 400) / 841)</strong><strong>= √(841 / 841)</strong><strong>= √1</strong><b>|Ĉ| = 1 ✓</b></section><div>สรุป: B̂ และ Ĉ มีขนาดเท่ากับ 1 จึงเป็น <b>เวกเตอร์หนึ่งหน่วย (Unit Vector)</b> ทั้งคู่</div></div>')}};

const renderQ5LessonBeforeUnitFormulaLabel=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitFormulaLabel();const label=document.querySelector('.unit-main-formula>small');if(label)label.textContent='สูตรหาเวกเตอร์หนึ่งหน่วย (Unit Vector)'};

const renderQ5LessonBeforeVerticalUnitGoalFormulas=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeVerticalUnitGoalFormulas();const formula=document.querySelector('.unit-goal-explainer>div');if(formula)formula.innerHTML='<span>B̂ = B / |B|</span><span>Ĉ = C / |C|</span>'};

const renderQ5LessonBeforeSeparateKnownMagnitudes=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeSeparateKnownMagnitudes();const root=document.querySelector('.q5-course');if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())node.nodeValue=node.nodeValue.replaceAll('|B| = |C| = 29','|B| = 29 และ |C| = 29')};

const renderQ5LessonBeforeCleanUnitProof=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeCleanUnitProof();const proof=document.querySelector('.unit-magnitude-proof');if(!proof)return;proof.innerHTML='<h3>พิสูจน์ว่าเป็นเวกเตอร์หนึ่งหน่วยจริง</h3><p>เวกเตอร์หนึ่งหน่วยต้องมีขนาดเท่ากับ 1 จึงตรวจ B̂ และ Ĉ ทีละตัว</p><section><small>① ตรวจขนาดของ B̂</small><div class="proof-lines"><strong>|B̂| = √((-21/29)² + (20/29)²)</strong><strong>|B̂| = √(441/841 + 400/841)</strong><strong>|B̂| = √((441 + 400)/841)</strong><strong>|B̂| = √(841/841)</strong><strong>|B̂| = √1</strong><b>|B̂| = 1 ✓</b></div></section><section><small>② ตรวจขนาดของ Ĉ</small><div class="proof-lines"><strong>|Ĉ| = √((21/29)² + (-20/29)²)</strong><strong>|Ĉ| = √(441/841 + 400/841)</strong><strong>|Ĉ| = √((441 + 400)/841)</strong><strong>|Ĉ| = √(841/841)</strong><strong>|Ĉ| = √1</strong><b>|Ĉ| = 1 ✓</b></div></section><div>สรุป: B̂ และ Ĉ มีขนาดเท่ากับ 1 จึงเป็น <b>เวกเตอร์หนึ่งหน่วย (Unit Vector)</b> ทั้งคู่</div>'};

const renderQ5LessonBeforeStackedProofFractions=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeStackedProofFractions();const sections=document.querySelectorAll('.unit-magnitude-proof>section');if(sections.length<2)return;const f=(top,bottom)=>`<span class="stack-fraction proof-fraction"><i>${top}</i><i>${bottom}</i></span>`,lines=(name,x,y)=>`<strong>|${name}| = √((${f(x,'29')})² + (${f(y,'29')})²)</strong><strong>|${name}| = √(${f('441','841')} + ${f('400','841')})</strong><strong>|${name}| = √(${f('441 + 400','841')})</strong><strong>|${name}| = √(${f('841','841')})</strong><strong>|${name}| = √1</strong><b>|${name}| = 1 ✓</b>`;sections[0].querySelector('.proof-lines').innerHTML=lines('B̂','-21','20');sections[1].querySelector('.proof-lines').innerHTML=lines('Ĉ','21','-20')};
const renderQ5LessonBeforeUnitPracticeValues=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeUnitPracticeValues();const given=document.querySelector('.q5-practice-given');if(!given)return;const f=(top,bottom)=>`<span class="stack-fraction practice-unit-fraction"><i>${top}</i><i>${bottom}</i></span>`;given.innerHTML=`<span>ค่าที่ใช้ในโจทย์ฝึก</span><strong class="practice-unit-value bhat"><b>B̂</b><i>=</i><em>(${f('3','5')}, ${f('4','5')})</em><small>Unit Vector ของ B</small></strong><strong class="practice-unit-value chat"><b>Ĉ</b><i>=</i><em>(${f('-3','5')}, ${f('-4','5')})</em><small>Unit Vector ของ C</small></strong>`};
const renderQ5LessonBeforeVerticalGoalDivision=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforeVerticalGoalDivision();const formula=document.querySelector('.unit-goal-explainer>div');if(!formula)return;const v=name=>`<span class="math-vector clean-goal-vector">${name}</span>`,m=name=>`<span class="magnitude-bars">${v(name)}</span>`,f=(top,bottom)=>`<span class="stack-fraction goal-unit-fraction"><i>${top}</i><i>${bottom}</i></span>`;formula.innerHTML=`<span class="goal-unit-equation"><b>B̂</b><i>=</i>${f(v('B'),m('B'))}</span><span class="goal-unit-equation"><b>Ĉ</b><i>=</i>${f(v('C'),m('C'))}</span>`};
const renderQ5LessonBeforePracticeGivenAndAnswers=renderQ5Lesson;
renderQ5Lesson=function(){renderQ5LessonBeforePracticeGivenAndAnswers();const practice=document.querySelector('.q5-practice'),given=practice?.querySelector('.q5-practice-given'),fields=practice?.querySelector('.q5-practice-fields'),button=document.querySelector('#checkQ5Practice');if(!practice||!given||!fields||!button)return;const v=name=>`<span class="math-vector practice-given-vector">${name}</span>`;given.innerHTML=`<span>โจทย์กำหนดเวกเตอร์ทั่วไป</span><strong class="practice-given-normal cyan">${v('B')} = (3, 4)</strong><strong class="practice-given-normal pink">${v('C')} = (-3, -4)</strong>`;fields.innerHTML=`<label class="unit-answer-field"><span>B̂</span><input id="q5UnitB" placeholder="เช่น 3/5, 4/5 หรือ 0.6, 0.8" aria-label="กรอกค่า B hat" autocomplete="off"></label><label class="unit-answer-field"><span>Ĉ</span><input id="q5UnitC" placeholder="เช่น -3/5, -4/5 หรือ -0.6, -0.8" aria-label="กรอกค่า C hat" autocomplete="off"></label><label class="unit-answer-field dot-answer"><span>B̂ · Ĉ</span><input id="q5Dot" placeholder="เช่น -1 หรือ -25/25" aria-label="กรอกค่า dot product" autocomplete="off"></label>`;const scalar=text=>{const value=text.trim().replace(/÷/g,'/');if(!value)return NaN;if(value.includes('/')){const parts=value.split('/');if(parts.length!==2)return NaN;const top=Number(parts[0]),bottom=Number(parts[1]);return bottom?top/bottom:NaN}return Number(value)},vector=text=>{const cleaned=text.replace(/[()\[\]{}]/g,' ').trim(),parts=cleaned.includes(',')?cleaned.split(','):cleaned.split(/\s+/);return parts.length===2?parts.map(scalar):[NaN,NaN]},near=(a,b)=>Number.isFinite(a)&&Math.abs(a-b)<.000001;button.onclick=()=>{const bText=document.querySelector('#q5UnitB').value,cText=document.querySelector('#q5UnitC').value,dotText=document.querySelector('#q5Dot').value,out=document.querySelector('#q5PracticeResult'),next=document.querySelector('#nextBtn');if(!bText.trim()||!cText.trim()||!dotText.trim()){out.className='practice-bad';out.textContent='กรอก B̂, Ĉ และค่า Dot Product ให้ครบก่อนนะ';return}const b=vector(bText),c=vector(cText),dot=scalar(dotText),ok=near(b[0],3/5)&&near(b[1],4/5)&&near(c[0],-3/5)&&near(c[1],-4/5)&&near(dot,-1);out.className=ok?'practice-ok':'practice-bad';out.textContent=ok?'✓ ถูกต้อง! จะตอบเป็นเศษส่วนหรือทศนิยมที่มีค่าเท่ากันก็ได้':'ค่ายังไม่ถูก';beep(ok);if(ok){next.disabled=false;next.innerHTML='พร้อมสู้จักรพรรดิยูนิต <span>⚔</span>'}}};

const renderChallengeBeforeQ5GivenCoordinates=renderChallenge;
renderChallenge=function(q){renderChallengeBeforeQ5GivenCoordinates(q);if(q.id!==5)return;const question=document.querySelector('.challenge-box .question');if(!question)return;const v=name=>`<span class="math-vector q5-boss-vector">${name}</span>`;question.insertAdjacentHTML('afterend',`<section class="q5-boss-given"><small>อ้างอิงค่าจากข้อ 4</small><h3>พิกัดของเวกเตอร์ B และ C</h3><div><strong class="b-vector">${v('B')} = (-21, 20)</strong><strong class="c-vector">${v('C')} = (21, -20)</strong></div><p>โจทย์ถามหา <b>Dot Product ระหว่าง Unit Vector ของ B และ Unit Vector ของ C</b></p><span class="q5-boss-hint"><b>คำใบ้:</b> ต้องหา <b>B̂</b> และ <b>Ĉ</b> จากพิกัดที่กำหนด ก่อนคำนวณ <b>B̂ · Ĉ</b></span></section>`)};

const renderChallengeBeforeQ5ProgressiveGuide=renderChallenge;
renderChallenge=function(q){
  renderChallengeBeforeQ5ProgressiveGuide(q);
  if(q.id!==5)return;
  document.querySelector('.q5-boss-hint')?.remove();
  const npc=document.querySelector('#guideNpcBtn'),box=document.querySelector('#guideHint'),text=document.querySelector('#hintText'),button=document.querySelector('#nextHintBtn'),levelText=document.querySelector('#hintLevel'),progress=document.querySelector('#hintProgress');
  if(!npc||!box||!text||!button)return;
  const subtitle=npc.querySelector('small');
  if(subtitle)subtitle.textContent='กดเพื่อดูวิธีทำทีละขั้น';
  const vector=name=>`<i class="math-vector hint-vector">${name}</i>`,magnitude=name=>`|${vector(name)}|`;
  const steps=[
    `<b>ขั้นที่ 1 · หาขนาดของเวกเตอร์</b><span>ใช้สูตร ${magnitude('v')} = √(vₓ² + vᵧ²)</span><span>หาขนาดของ ${vector('B')} และ ${vector('C')} แยกกัน</span>`,
    `<b>ขั้นที่ 2 · หา Unit Vector ของ B</b><span>ใช้สูตร B̂ = ${vector('B')} / ${magnitude('B')}</span><span>นำพิกัดทุกตัวของ ${vector('B')} หารด้วยขนาดของ ${vector('B')}</span>`,
    `<b>ขั้นที่ 3 · หา Unit Vector ของ C</b><span>ใช้สูตร Ĉ = ${vector('C')} / ${magnitude('C')}</span><span>นำพิกัดทุกตัวของ ${vector('C')} หารด้วยขนาดของ ${vector('C')}</span>`,
    `<b>ขั้นที่ 4 · ตั้งสูตร Dot Product</b><span>ใช้สูตร B̂ · Ĉ = B̂ₓĈₓ + B̂ᵧĈᵧ</span><span>จับคู่พิกัดแกน x และแกน y ให้ตรงกัน</span>`,
    `<b>ขั้นที่ 5 · คำนวณและสรุป</b><span>คูณพิกัดแต่ละคู่ แล้วนำผลที่ได้มาบวกกัน</span><span>นำผลลัพธ์สุดท้ายไปกรอกในช่อง B̂ · Ĉ</span>`
  ];
  let current=0;
  const showStep=()=>{
    box.classList.add('show');npc.classList.add('active');
    text.className='q5-progressive-hint';text.innerHTML=steps[current];
    if(levelText)levelText.textContent=current+1;
    if(progress)progress.textContent=`${current+1} / ${steps.length}`;
    button.textContent=current===steps.length-1?'ปิดวิธีทำ ✓':'ดูขั้นถัดไป →';
  };
  box.classList.remove('show');npc.classList.remove('active');
  npc.onclick=()=>{if(box.classList.contains('show')){box.classList.remove('show');npc.classList.remove('active')}else{current=0;showStep()}};
  button.onclick=()=>{if(current<steps.length-1){current++;showStep()}else{box.classList.remove('show');npc.classList.remove('active')}};
};

let gameLoop=0, gameKeys={}, gameWorld=null;
const gameAvatarSheet=new Image();gameAvatarSheet.src='character-select-3d.png?v=1';
function showAdventure(forcedFloor=null){
  state.started=true;save();window.scrollTo({top:0,left:0,behavior:'auto'});cancelAnimationFrame(gameLoop); gameKeys={}; const app=document.querySelector('#app');app.innerHTML='';app.append(document.querySelector('#gameTemplate').content.cloneNode(true));
  const floor=forcedFloor===null?Math.min(state.completed.length,4):Math.max(0,Math.min(forcedFloor,state.completed.length,4)),q=quests[floor],canvas=document.querySelector('#gameCanvas'),ctx=canvas.getContext('2d');
  const configs=[
    {title:'ป่าพิกัด',item:'คริสตัลพิกัด',goal:3,top:'#123c67',bottom:'#06172a',accent:'#52eaff',tip:'เก็บคริสตัลตามจุดบนแผนที่ให้ครบ',items:[[315,165],[610,535],[900,235]],foes:[[460,330,1.7,1.2],[790,470,-1.5,1.4],[1040,365,1.2,-1.6]]},
    {title:'หอกระจกกลับด้าน',item:'คู่เศษกระจก',goal:3,top:'#30306f',bottom:'#0a0c2d',accent:'#a8d8ff',tip:'ฝั่งซ้ายคือ A ฝั่งขวาคือ -A เมื่อเจ้าเดินทิศหนึ่ง เงาจะเดินตรงข้าม เก็บเศษกระจกเป็นคู่เพื่อเปิดประตู',items:[[220,190],[360,510],[520,280]],foes:[[500,410,1.7,0],[920,300,-1.7,0]]},
    {title:'วิหารขนาดเวกเตอร์ · magnitude',item:'ชิ้นส่วนสูตร magnitude',goal:4,top:'#53301e',bottom:'#120b18',accent:'#ffbf4f',tip:'เก็บชิ้นส่วนตามลำดับเพื่อประกอบสูตรหาขนาดของ A ให้สมบูรณ์',items:[[230,180],[470,470],[760,210],[980,540]],steps:['|A| = √((-20)² + (-21)²)','= √(400 + 441)','= √841','= 29'],foes:[[390,340,1.4,1.7],[700,410,-1.6,1.4],[1000,310,-1.3,-1.7]]},
    {title:'วิหารเวกเตอร์ตั้งฉาก',item:'ตรามุมฉาก 90°',goal:4,top:'#183f4b',bottom:'#061922',accent:'#68f0c2',tip:'ตามหาแสง A และ B ที่ตัดกันเป็นมุม 90° แล้วเก็บตราตรงจุดตัดให้ครบ 4 ดวง เพื่อพิสูจน์ว่า A · B = 0',items:[[210,180],[450,525],[800,190],[1010,515]],foes:[[360,350,1.1,0],[690,350,-1.1,0]]},
    {title:'ปราสาทเวกเตอร์หนึ่งหน่วย',item:'ชิ้นส่วนสูตร Unit Vector',goal:5,top:'#3b1758',bottom:'#090617',accent:'#d276ff',tip:'เก็บชิ้นส่วนสูตรให้ครบตามลำดับ: หาขนาดของเวกเตอร์ → หา Unit Vector → คำนวณ Dot Product เพื่อศึกษาความสัมพันธ์ของเวกเตอร์ทั้งสอง',items:[[190,170],[390,515],[620,225],[850,520],[1030,185]],steps:['1. หา |B⃗| และ |C⃗|','2. หาร B⃗ ด้วย |B⃗|','3. หาร C⃗ ด้วย |C⃗|','4. คูณพิกัดของ B̂ และ Ĉ','5. รวมค่า B̂ · Ĉ'],foes:[[300,340,2,1.3],[510,400,-1.7,1.8],[720,320,1.9,-1.5],[920,450,-2,-1.2],[1080,320,-1.4,2]]}
  ],cfg=configs[floor];
  const multiplayer=window.vectoriaMultiplayer,partyPlayers=multiplayer?.gameStarted&&multiplayer?.players?.length?multiplayer.players:[],partySize=Math.max(1,Math.min(5,partyPlayers.length||1));
  const avatarIds=['knight','mage','archer','support','rogue'],avatarData={knight:['อาริน','แทงก์','🛡️'],mage:['ลูน่า','เมจ','🔮'],archer:['ฟินน์','อาร์เชอร์','🏹'],support:['มีร่า','ซัพพอร์ต','💚'],rogue:['เรน','แอสซาซิน','🗡️']};
  const me=partyPlayers.find(p=>p.id===multiplayer?.session?.playerId),avatarId=me?.avatar_id||multiplayer?.selectedAvatar||'knight',avatarIndex=Math.max(0,avatarIds.indexOf(avatarId)),avatar=avatarData[avatarId]||avatarData.knight,playerName=me?.display_name||multiplayer?.soloPlayerName||avatar[0];
  /* Playability comes first: party size no longer multiplies moving enemies.
     Extra players still appear through Realtime, but each device renders a light arena. */
  const difficulty=1+(partySize-1)*.05+floor*.03,extraEnemyCount=0;
  const lowPowerDevice=true;
  /* A cleared floor is always replayable from the beginning.  Only the
     minigame run is refreshed; lesson, boss, reward and completed-floor data
     remain saved until the player explicitly resets or starts a new game. */
  const replayingClearedFloor=state.completed.includes(q.id);
  const savedAdventure=replayingClearedFloor?{}:(state.adventure?.[floor]||{});
  document.querySelector('#hudPlayerName').textContent=`${playerName} · ${avatar[1]}`;
  const hudAvatar=document.querySelector('#hudAvatar');hudAvatar.style.setProperty('--sprite-index',avatarIndex);hudAvatar.querySelector('span').textContent=avatar[2];
  document.querySelector('#hudPartyPower').innerHTML=`<small>กำลังปาร์ตี้ · ระดับ ${floor+1}</small><b>${partySize} คน · ความยาก ×${difficulty.toFixed(1)}</b>`;
  document.querySelector('#floorName').textContent=`ชั้น ${floor+1} · ${cfg.title}`;document.querySelector('#missionText').textContent=`เก็บ${cfg.item} 0 / ${cfg.goal}`;document.querySelector('#openMapBtn').onclick=()=>{gameWorld.transitioning=true;cancelAnimationFrame(gameLoop);showMap()};document.querySelector('#sampleQuestBtn').onclick=()=>{gameWorld.transitioning=true;cancelAnimationFrame(gameLoop);window.onkeydown=null;window.onkeyup=null;openQuest(floor,1)};const prevBtn=document.querySelector('#previousFloorBtn');prevBtn.style.display=floor>0?'block':'none';prevBtn.onclick=()=>{gameWorld.transitioning=true;cancelAnimationFrame(gameLoop);showAdventure(floor-1)};
  const hero={x:Number(savedAdventure.x)||100,y:Number(savedAdventure.y)||560,r:28,speed:6.6,flash:0,name:playerName,avatarId,avatarIndex},crystals=cfg.items.map((p,i)=>({x:p[0],y:p[1],t:i,got:Array.isArray(savedAdventure.got)&&savedAdventure.got.includes(i)}));
  const enemies=cfg.foes.slice(0,2).map(e=>({x:e[0],y:e[1],vx:e[2]*difficulty,vy:e[3]*difficulty}));
  for(let i=0;i<extraEnemyCount;i++)enemies.push({x:240+((i*223+floor*97)%820),y:170+((i*157+floor*61)%410),vx:(i%2?-1:1)*(1.15+(i%3)*.25)*difficulty,vy:(i%3===0?-1:1)*(1.05+(i%2)*.3)*difficulty});
  const restoredCollected=crystals.filter(c=>c.got).length;
  const portal={x:1140,y:120,r:64,open:restoredCollected>=cfg.goal};
  gameWorld={hero,crystals,enemies,portal,collected:restoredCollected,lastHit:0,lastSequenceWarning:0,q,floor,cfg,partySize,difficulty,playerName,avatarId,avatarIndex,quality:0,transitioning:false};
  document.querySelector('#missionText').textContent=portal.open?'ประตูบอสเปิดแล้ว!':`เก็บ${cfg.item} ${restoredCollected} / ${cfg.goal}`;
  let lastAdventureSave=0;
  const persistAdventure=(force=false)=>{const now=Date.now();if(!force&&now-lastAdventureSave<700)return;lastAdventureSave=now;state.adventure=state.adventure||{};state.adventure[floor]={x:Math.round(hero.x),y:Math.round(hero.y),got:crystals.map((c,i)=>c.got?i:null).filter(i=>i!==null),portal:portal.open};save()};
  const gameBackground=document.createElement('canvas');gameBackground.width=canvas.width;gameBackground.height=canvas.height;
  const backgroundCtx=gameBackground.getContext('2d',{alpha:false});
  function renderGameBackground(){
    const w=gameBackground.width,h=gameBackground.height,g=backgroundCtx.createLinearGradient(0,0,0,h);
    g.addColorStop(0,cfg.top);g.addColorStop(1,cfg.bottom);backgroundCtx.fillStyle=g;backgroundCtx.fillRect(0,0,w,h);
    if(gameWorld.quality>0){
      backgroundCtx.save();backgroundCtx.globalAlpha=.19;backgroundCtx.lineCap='round';backgroundCtx.strokeStyle=cfg.accent;
      [[90,620,1190,95],[75,360,1205,360],[110,120,1170,635]].forEach((lane,index)=>{backgroundCtx.lineWidth=index===1?38:27;backgroundCtx.beginPath();backgroundCtx.moveTo(lane[0],lane[1]);backgroundCtx.quadraticCurveTo(640,index===1?360:index===0?520:180,lane[2],lane[3]);backgroundCtx.stroke()});
      backgroundCtx.globalAlpha=.42;[[160,570],[405,450],[875,250],[1120,145]].forEach((p,index)=>{backgroundCtx.fillStyle=index<2?'#42dfff':'#ff6fb8';backgroundCtx.beginPath();backgroundCtx.arc(p[0],p[1],14,0,Math.PI*2);backgroundCtx.fill()});backgroundCtx.restore();
    }
    backgroundCtx.strokeStyle='rgba(78,139,200,.15)';backgroundCtx.lineWidth=2;for(let x=0;x<w;x+=80){backgroundCtx.beginPath();backgroundCtx.moveTo(x,0);backgroundCtx.lineTo(x,h);backgroundCtx.stroke()}for(let y=0;y<h;y+=60){backgroundCtx.beginPath();backgroundCtx.moveTo(0,y);backgroundCtx.lineTo(w,y);backgroundCtx.stroke()}
    const decorCount=gameWorld.quality>0?26:10;for(let i=0;i<decorCount;i++){const x=(i*193)%1280,y=80+((i*137)%600);backgroundCtx.fillStyle=i%3?cfg.bottom:cfg.top;backgroundCtx.globalAlpha=.65;backgroundCtx.fillRect(x,y,30+(i%4)*12,18+(i%3)*10)}backgroundCtx.globalAlpha=1;
  }
  renderGameBackground();
  const dialog=document.querySelector('#gameDialog');dialog.querySelector('p').textContent=`ปาร์ตี้ ${partySize} คน · ${cfg.tip} เก็บ${cfg.item}ให้ครบ ${cfg.goal}! ระวังมอนสเตอร์ ${enemies.length} ตัว`;document.querySelector('#closeDialog').onclick=()=>{dialog.style.display='none';canvas.focus()};
  document.querySelector('#actionBtn').onclick=()=>tryPortal();
  const keyDirection={ArrowUp:'ArrowUp',w:'ArrowUp',W:'ArrowUp',ArrowDown:'ArrowDown',s:'ArrowDown',S:'ArrowDown',ArrowLeft:'ArrowLeft',a:'ArrowLeft',A:'ArrowLeft',ArrowRight:'ArrowRight',d:'ArrowRight',D:'ArrowRight'};
  const movementKeys=Object.keys(keyDirection);
  const isTypingTarget=e=>e.target?.matches?.('input, textarea, select, [contenteditable="true"]');
  const down=e=>{if(isTypingTarget(e))return;const key=keyDirection[e.key];if(!key)return;e.preventDefault();dialog.style.display='none';if(!gameKeys[key])moveHero(key,18);gameKeys[key]=true};
  const up=e=>{const key=keyDirection[e.key];if(!key)return;gameKeys[key]=false;if(isTypingTarget(e))return;e.preventDefault()};
  const releaseAllControls=()=>{Object.keys(gameKeys).forEach(key=>gameKeys[key]=false);document.querySelectorAll('.mobile-pad button').forEach(button=>button.classList.remove('is-held'))};
  window.onkeydown=down;window.onkeyup=up;window.onblur=releaseAllControls;
  canvas.tabIndex=0;canvas.addEventListener('pointerdown',()=>canvas.focus({preventScroll:true}));
  const moveHero=(key,amount=48)=>{if(key==='ArrowLeft')hero.x=Math.max(35,hero.x-amount);if(key==='ArrowRight')hero.x=Math.min(1245,hero.x+amount);if(key==='ArrowUp')hero.y=Math.max(55,hero.y-amount);if(key==='ArrowDown')hero.y=Math.min(685,hero.y+amount)};
  const activePadPointers=new Map();
  const releasePadPointer=e=>{const key=activePadPointers.get(e.pointerId);if(!key)return;activePadPointers.delete(e.pointerId);if(![...activePadPointers.values()].includes(key))gameKeys[key]=false;document.querySelector(`.mobile-pad button[data-key="${key}"]`)?.classList.remove('is-held');e.preventDefault?.()};
  window.onpointerup=releasePadPointer;window.onpointercancel=releasePadPointer;
  document.querySelectorAll('.mobile-pad button').forEach(b=>{const key=b.dataset.key;b.onpointerdown=e=>{e.preventDefault();dialog.style.display='none';canvas.focus({preventScroll:true});activePadPointers.set(e.pointerId,key);gameKeys[key]=true;moveHero(key,20);b.classList.add('is-held');try{b.setPointerCapture(e.pointerId)}catch{}};b.onpointerup=releasePadPointer;b.onpointercancel=releasePadPointer;b.onclick=e=>e.preventDefault();b.oncontextmenu=e=>e.preventDefault()});
  function enterPortal(gateX,gateY){
    if(gameWorld.transitioning)return;
    persistAdventure(true);gameWorld.transitioning=true;gameKeys={};window.onkeydown=null;window.onkeyup=null;
    cancelAnimationFrame(gameLoop);vectoriaAudio?.effect?.('portal');
    document.querySelector('#missionText').textContent='กำลังเดินเข้าสู่ประตู…';
    canvas.classList.add('entering-portal');
    const startX=hero.x,startY=hero.y,startRadius=hero.r,start=performance.now(),duration=900;
    const animateEntry=now=>{
      const progress=Math.min(1,(now-start)/duration),ease=1-Math.pow(1-progress,3);
      hero.x=startX+(gateX-startX)*ease;hero.y=startY+(gateY-startY)*ease;
      hero.r=Math.max(5,startRadius*(1-ease*.82));
      draw();
      if(progress<1){gameLoop=requestAnimationFrame(animateEntry);return}
      canvas.classList.add('portal-entered');
      setTimeout(()=>{canvas.classList.remove('entering-portal','portal-entered');openQuest(floor,0)},280);
    };
    gameLoop=requestAnimationFrame(animateEntry);
  }
  function tryPortal(){if(gameWorld.transitioning)return;const gateX=floor===1?1280-portal.x:portal.x,gateY=floor===1?720-portal.y:portal.y;if(Math.hypot(hero.x-gateX,hero.y-gateY)<115){if(portal.open)enterPortal(gateX,gateY);else toast(`เก็บ${cfg.item}ให้ครบ ${cfg.goal} ก่อน!`)}}
  function update(frameScale=1){let dx=0,dy=0;if(gameKeys.ArrowLeft||gameKeys.a||gameKeys.A)dx--;if(gameKeys.ArrowRight||gameKeys.d||gameKeys.D)dx++;if(gameKeys.ArrowUp||gameKeys.w||gameKeys.W)dy--;if(gameKeys.ArrowDown||gameKeys.s||gameKeys.S)dy++;if(dx&&dy){dx*=.707;dy*=.707}hero.x=Math.max(35,Math.min(1245,hero.x+dx*hero.speed*frameScale));hero.y=Math.max(55,Math.min(685,hero.y+dy*hero.speed*frameScale));hero.flash=Math.max(0,hero.flash-frameScale);if(dx||dy)persistAdventure();
    crystals.forEach((c,i)=>{if(!c.got&&Math.hypot(hero.x-c.x,hero.y-c.y)<48){if((floor===2||floor===4)&&i!==gameWorld.collected){const now=Date.now();if(now-gameWorld.lastSequenceWarning>900){gameWorld.lastSequenceWarning=now;toast(`ยังข้ามขั้นไม่ได้ — ตามหา ${cfg.steps[gameWorld.collected]} ก่อน`)}return}c.got=true;gameWorld.collected++;state.xp+=15;save();vectoriaAudio.effect('collect');toast(floor===1?`A และ -A เก็บเศษกระจกคู่ที่ ${gameWorld.collected} สำเร็จ!`:floor===2||floor===4?`ประกอบสูตรสำเร็จ: ${cfg.steps[i]}`:`เก็บ${cfg.item}ได้!`);document.querySelector('#missionText').textContent=floor===2?`สูตรขนาด ${gameWorld.collected}/4 · ${cfg.steps.slice(0,gameWorld.collected).join(' → ')}`:floor===4?`สูตรเวกเตอร์หนึ่งหน่วย ${gameWorld.collected}/5 · ${cfg.steps[i]}`:`เก็บ${cfg.item} ${gameWorld.collected} / ${cfg.goal}`;if(gameWorld.collected===cfg.goal){portal.open=true;document.querySelector('#missionText').textContent=floor===2?'คำนวณได้ |A| = 29 · ประตูแมกนิทูนเปิดแล้ว!':floor===4?'คำนวณได้ B̂ · Ĉ = -1 · ประตูดอทโปรดักต์เปิดแล้ว!':'ประตูบอสเปิดแล้ว!';toast(floor===2?'สำเร็จ! √841 = 29 — ความยาวเวกเตอร์กลับคืนมาแล้ว':floor===4?'สำเร็จ! dot product = -1 — เวกเตอร์ชี้ตรงข้ามกัน':'ประตูบอสเปิดแล้ว — ไปทางขวาบน!')}}});
    enemies.forEach(e=>{e.x+=e.vx*frameScale;e.y+=e.vy*frameScale;if(e.x<180||e.x>1080)e.vx*=-1;if(e.y<150||e.y>620)e.vy*=-1;if(Date.now()-gameWorld.lastHit>1100&&Math.hypot(hero.x-e.x,hero.y-e.y)<52){gameWorld.lastHit=Date.now();hero.flash=18;state.hp=Math.max(1,state.hp-1);save();vectoriaAudio.effect('monster');hero.x=Math.max(55,hero.x-70);toast('โดนมอนสเตอร์เงา! พลัง -1')}});if(portal.open)tryPortal()}
  function draw(){ctx.drawImage(gameBackground,0,0);
    if(floor===1){ctx.fillStyle='rgba(45,110,210,.10)';ctx.fillRect(0,0,640,720);ctx.fillStyle='rgba(176,92,255,.10)';ctx.fillRect(640,0,640,720);ctx.strokeStyle='#d8ecff';ctx.lineWidth=7;ctx.setLineDash([18,12]);ctx.beginPath();ctx.moveTo(640,60);ctx.lineTo(640,660);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#aee9ff';ctx.font='700 25px Chakra Petch';ctx.textAlign='center';ctx.fillText('ตัวจริง A',320,62);ctx.fillStyle='#dfb6ff';ctx.fillText('เงาตรงข้าม -A',960,62);const sx=1280-hero.x,sy=720-hero.y;ctx.save();ctx.translate(sx,sy);ctx.globalAlpha=.88;ctx.shadowBlur=28;ctx.shadowColor='#bd69ff';ctx.fillStyle='#7432bc';ctx.beginPath();ctx.arc(0,0,hero.r,0,Math.PI*2);ctx.fill();ctx.fillStyle='#e2baff';ctx.beginPath();ctx.arc(0,-15,15,0,Math.PI*2);ctx.fill();ctx.fillStyle='#3c175e';ctx.beginPath();ctx.arc(0,-20,16,Math.PI,Math.PI*2);ctx.fill();ctx.fillStyle='#cf87ff';ctx.fillRect(-24,-2,48,8);ctx.fillStyle='#f3ddff';ctx.beginPath();ctx.moveTo(24,-4);ctx.lineTo(46,9);ctx.lineTo(22,13);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.globalAlpha=1;ctx.font='700 14px Chakra Petch';ctx.textAlign='center';ctx.fillStyle='#f1d8ff';ctx.fillText('-A',0,55);ctx.restore();crystals.forEach(c=>{if(c.got)return;const mx=1280-c.x,my=720-c.y;ctx.save();ctx.translate(mx,my);ctx.rotate(Math.PI/4);ctx.strokeStyle='#dcb4ff';ctx.fillStyle='rgba(202,145,255,.28)';ctx.lineWidth=5;ctx.strokeRect(-18,-18,36,36);ctx.fillRect(-11,-11,22,22);ctx.restore();ctx.strokeStyle='rgba(204,180,255,.25)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(c.x,c.y);ctx.lineTo(mx,my);ctx.stroke()})}
    /* On the mirror floor, the reflection keeps the selected hero model and changes only its color. */
    if(floor===1){const sx=1280-hero.x,sy=720-hero.y;ctx.save();ctx.translate(sx,sy);ctx.shadowBlur=28;ctx.shadowColor='#bd69ff';ctx.fillStyle='rgba(52,19,100,.98)';ctx.beginPath();ctx.arc(0,0,hero.r+8,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#d993ff';ctx.lineWidth=4;ctx.stroke();ctx.beginPath();ctx.arc(0,0,hero.r+4,0,Math.PI*2);ctx.clip();if(gameAvatarSheet.complete&&gameAvatarSheet.naturalWidth){const sw=gameAvatarSheet.naturalWidth/5,sh=gameAvatarSheet.naturalHeight;ctx.filter='hue-rotate(248deg) saturate(1.8) brightness(.9)';ctx.drawImage(gameAvatarSheet,avatarIndex*sw,0,sw,sh,-hero.r-8,-hero.r-12,(hero.r+8)*2,(hero.r+12)*2);ctx.filter='none'}else{ctx.fillStyle='#7432bc';ctx.fillRect(-hero.r-8,-hero.r-8,(hero.r+8)*2,(hero.r+8)*2);ctx.fillStyle='#f1dcff';ctx.font='26px sans-serif';ctx.textAlign='center';ctx.fillText(avatar[2],0,9)}ctx.restore();ctx.save();ctx.font='700 13px Noto Sans Thai';ctx.textAlign='center';ctx.fillStyle='#f0d6ff';ctx.strokeStyle='rgba(16,7,43,.9)';ctx.lineWidth=4;ctx.strokeText(`${hero.name} · เงา`,sx,sy-hero.r-15);ctx.fillText(`${hero.name} · เงา`,sx,sy-hero.r-15);ctx.restore()}
    if(floor===2){ctx.save();ctx.strokeStyle='rgba(255,181,80,.48)';ctx.lineWidth=12;ctx.setLineDash([18,10]);ctx.beginPath();ctx.moveTo(90,570);cfg.items.forEach(p=>ctx.lineTo(p[0],p[1]));ctx.lineTo(portal.x,portal.y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='rgba(20,9,18,.82)';ctx.strokeStyle='#ffbd4a';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(30,72,500,82,15);ctx.fill();ctx.stroke();ctx.fillStyle='#fff0ae';ctx.font='700 22px Chakra Petch';ctx.textAlign='left';ctx.fillText('ภารกิจ: ประกอบ |A| = √(x² + y²)',50,106);ctx.font='600 15px Noto Sans Thai';ctx.fillStyle='#ffd281';ctx.fillText('เก็บชิ้นส่วนสูตรทั้ง 4 ตามลำดับ ห้ามข้ามขั้น',50,135);ctx.restore()}
    if(floor===3){ctx.save();ctx.fillStyle='rgba(3,25,34,.9)';ctx.strokeStyle='#68f0c2';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(30,70,490,88,15);ctx.fill();ctx.stroke();ctx.fillStyle='#dffff4';ctx.font='700 22px Chakra Petch';ctx.textAlign='left';ctx.fillText('ภารกิจ: ตามหาจุดตัดตั้งฉาก 90°',50,105);ctx.fillStyle='#8ff5d1';ctx.font='600 16px Noto Sans Thai';ctx.fillText('เมื่อ A ⟂ B จะได้ A · B = 0',50,136);cfg.items.forEach((p,i)=>{const px=p[0],py=p[1],len=72;ctx.shadowBlur=18;ctx.shadowColor='#51e8bb';ctx.strokeStyle='rgba(78,224,255,.72)';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(px-len,py);ctx.lineTo(px+len,py);ctx.stroke();ctx.strokeStyle='rgba(255,211,91,.82)';ctx.beginPath();ctx.moveTo(px,py-len);ctx.lineTo(px,py+len);ctx.stroke();ctx.shadowBlur=0;ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(px+14,py);ctx.lineTo(px+14,py-14);ctx.lineTo(px,py-14);ctx.stroke();ctx.fillStyle='#b8f8ff';ctx.font='800 15px Chakra Petch';ctx.textAlign='center';ctx.fillText('A',px+len+13,py+5);ctx.fillStyle='#ffe58a';ctx.fillText('B',px+5,py-len-10);ctx.fillStyle='#e9fff7';ctx.font='700 13px Chakra Petch';ctx.fillText(`${i+1} · 90°`,px,py+len+23)});ctx.restore()}
    if(floor===4&&gameWorld.quality>0){for(let i=0;i<10;i++){ctx.fillStyle=`rgba(198,85,255,${.08+(i%3)*.04})`;ctx.beginPath();ctx.arc((i*211)%1280,(i*151)%720,12+(i%4)*6,0,Math.PI*2);ctx.fill()}}
    ctx.save();ctx.translate(portal.x,portal.y);ctx.shadowBlur=portal.open?35:10;ctx.shadowColor=portal.open?'#ffd648':'#6940a8';ctx.fillStyle=portal.open?'#ffd648':'#462c70';ctx.beginPath();ctx.arc(0,0,portal.r,0,Math.PI*2);ctx.fill();ctx.fillStyle='#07142b';ctx.beginPath();ctx.arc(0,0,portal.r-13,0,Math.PI*2);ctx.fill();ctx.strokeStyle=portal.open?'#fff5a0':'#8a6ab9';ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,0,portal.r-6,0,Math.PI*2);ctx.stroke();ctx.fillStyle='white';ctx.font='700 17px Noto Sans Thai';ctx.textAlign='center';ctx.fillText(portal.open?(floor===1?'ประตู -A':'ประตูบอส'):'ล็อก',0,5);ctx.restore();if(floor===1){const px=1280-portal.x,py=720-portal.y;ctx.save();ctx.translate(px,py);ctx.shadowBlur=portal.open?35:10;ctx.shadowColor=portal.open?'#42dfff':'#315b91';ctx.fillStyle=portal.open?'#42dfff':'#24466e';ctx.beginPath();ctx.arc(0,0,portal.r,0,Math.PI*2);ctx.fill();ctx.fillStyle='#07142b';ctx.beginPath();ctx.arc(0,0,portal.r-13,0,Math.PI*2);ctx.fill();ctx.strokeStyle=portal.open?'#c6f7ff':'#587ca4';ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,0,portal.r-6,0,Math.PI*2);ctx.stroke();ctx.fillStyle='white';ctx.font='700 17px Noto Sans Thai';ctx.textAlign='center';ctx.fillText(portal.open?'ประตู A':'ล็อก',0,5);ctx.restore();ctx.strokeStyle=portal.open?'rgba(145,225,255,.45)':'rgba(111,91,160,.25)';ctx.lineWidth=3;ctx.setLineDash([10,10]);ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(portal.x,portal.y);ctx.stroke();ctx.setLineDash([])}
    crystals.forEach((c,i)=>{if(c.got)return;const bob=Math.sin(Date.now()/260+i)*8;ctx.save();ctx.translate(c.x,c.y+bob);ctx.rotate(Math.PI/4);ctx.shadowBlur=22;ctx.shadowColor=cfg.accent;ctx.fillStyle=cfg.accent;ctx.fillRect(-16,-16,32,32);ctx.fillStyle='#ffffff';ctx.fillRect(-7,-7,14,14);ctx.restore();if(floor===2||floor===4){ctx.save();ctx.font=floor===4?'800 15px "Cambria Math", "Leelawadee UI", sans-serif':'800 17px Chakra Petch';ctx.textAlign='center';ctx.fillStyle=i===gameWorld.collected?'#fff3a8':'#bda77e';ctx.strokeStyle='#26150d';ctx.lineWidth=5;ctx.strokeText(cfg.steps[i],c.x,c.y+bob-32);ctx.fillText(cfg.steps[i],c.x,c.y+bob-32);ctx.restore()}});
    enemies.forEach((e,i)=>{ctx.save();ctx.translate(e.x,e.y);ctx.shadowBlur=18;ctx.shadowColor='#a04dff';ctx.fillStyle='#442061';ctx.beginPath();ctx.arc(0,5,29,0,Math.PI*2);ctx.fill();ctx.fillStyle='#b572ff';ctx.beginPath();ctx.arc(-10,0,5,0,Math.PI*2);ctx.arc(10,0,5,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#7d42af';ctx.lineWidth=5;for(let a=0;a<6;a++){const ang=a*Math.PI/3;ctx.beginPath();ctx.moveTo(Math.cos(ang)*18,Math.sin(ang)*18);ctx.lineTo(Math.cos(ang)*40,Math.sin(ang)*40);ctx.stroke()}ctx.restore()});
    ctx.save();ctx.translate(hero.x,hero.y);if(hero.flash%4<2||!hero.flash){ctx.shadowBlur=25;ctx.shadowColor=cfg.accent;ctx.fillStyle='rgba(7,24,55,.96)';ctx.beginPath();ctx.arc(0,0,hero.r+8,0,Math.PI*2);ctx.fill();ctx.strokeStyle=cfg.accent;ctx.lineWidth=4;ctx.stroke();ctx.save();ctx.beginPath();ctx.arc(0,0,hero.r+4,0,Math.PI*2);ctx.clip();if(gameAvatarSheet.complete&&gameAvatarSheet.naturalWidth){const sw=gameAvatarSheet.naturalWidth/5;ctx.drawImage(gameAvatarSheet,hero.avatarIndex*sw,0,sw,gameAvatarSheet.naturalHeight,-hero.r-8,-hero.r-12,(hero.r+8)*2,(hero.r+12)*2)}else{ctx.fillStyle='#206bd1';ctx.fillRect(-hero.r,-hero.r,hero.r*2,hero.r*2);ctx.fillStyle='#fff';ctx.font='26px sans-serif';ctx.textAlign='center';ctx.fillText(avatar[2],0,9)}ctx.restore();ctx.shadowBlur=0;const labelWidth=Math.max(92,ctx.measureText(hero.name).width+28);ctx.fillStyle='rgba(2,14,38,.94)';ctx.strokeStyle='#ffe068';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(-labelWidth/2,-hero.r-38,labelWidth,24,12);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.font='800 14px Noto Sans Thai';ctx.textAlign='center';ctx.fillText(hero.name,0,-hero.r-21)}ctx.restore();if(floor===1){const badge=(px,py,text,color)=>{ctx.shadowBlur=18;ctx.shadowColor=color;ctx.fillStyle='#07152f';ctx.strokeStyle=color;ctx.lineWidth=5;ctx.beginPath();ctx.arc(px,py,27,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle='#fff';ctx.font='700 21px Chakra Petch';ctx.textAlign='center';ctx.fillText(text,px,py+7)};badge(hero.x,hero.y-84,'A','#48d8ff');badge(1280-hero.x,720-hero.y-70,'-A','#d48aff')}
    ctx.fillStyle='rgba(3,12,30,.9)';ctx.strokeStyle=cfg.accent;ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(18,18,520,52,13);ctx.fill();ctx.stroke();ctx.fillStyle='white';ctx.font='600 16px Noto Sans Thai';ctx.textAlign='left';ctx.fillText(`◆ ${cfg.item} ${gameWorld.collected}/${cfg.goal}   ♥ ${state.hp}/5   👥 ${partySize} คน   👾 ${enemies.length}`,33,50)}
  const frameBudget=20,syncBudget=800;let lastGameFrame=performance.now(),lastPositionSync=0,lastSyncedX=hero.x,lastSyncedY=hero.y;
  function loop(now=performance.now()){
    if(gameWorld.transitioning)return;
    /* Schedule the next frame first. A temporary Realtime or drawing error must
       never stop local movement and leave the hero frozen. */
    gameLoop=requestAnimationFrame(loop);
    if(now-lastGameFrame<frameBudget)return;
    const frameScale=Math.min(1.8,(now-lastGameFrame)/16.667);lastGameFrame=now;
    try{update(frameScale);if(gameWorld.transitioning)return;draw()}
    catch(error){console.error('Vectoria minigame frame recovered:',error);return}
    if(now-lastPositionSync>=syncBudget&&(Math.abs(hero.x-lastSyncedX)>8||Math.abs(hero.y-lastSyncedY)>8)){
      try{window.vectoriaMultiplayer?.syncPosition?.(hero.x,hero.y,floor)}
      catch(error){console.warn('Realtime position sync skipped:',error)}
      lastPositionSync=now;lastSyncedX=hero.x;lastSyncedY=hero.y;
    }
  }draw();gameLoop=requestAnimationFrame(loop);app.focus()
}
document.querySelector('#brandBtn').onclick=()=>showMap();document.querySelector('#soundBtn').onclick=()=>{state.sound=!state.sound;save();toast(state.sound?'เปิดเสียงแล้ว':'ปิดเสียงแล้ว')};setupUniversalScratchpad();updateTopbar();showMap();
/* Keep the perpendicular lesson wording and proof explicit for beginners. */
const renderQ4LessonResponsive=renderQ4Lesson;
renderQ4Lesson=function(){
  renderQ4LessonResponsive();
  const rule=document.querySelector('.q4-rule strong');
  if(rule)rule.textContent='ถ้า (x, y) เวกเตอร์ที่ตั้งฉากเลือกได้เป็น (y, -x)';
  const cards=document.querySelectorAll('.q4-step-card');
  if(cards[1])cards[1].querySelector('div').innerHTML=`<h3>ตรวจว่า A ตั้งฉากกับ B จริงไหม</h3><p>เริ่มจากสูตรที่เชื่อม Dot Product กับมุม</p><div class="q4-calc"><b>A · B = |A||B| cos θ</b><br><br>1) หา A · B ด้วยสูตร AₓBₓ + AᵧBᵧ<br>A · B = (4)(-3) + (-3)(-4)<br>= -12 + 12<br>= <b>0</b><br><br>2) หาขนาดด้วยสูตร |V| = √(Vₓ² + Vᵧ²)<br>|A| = √(4² + (-3)²) = √25 = <b>5</b><br>|B| = √((-3)² + (-4)²) = √25 = <b>5</b><br><br>3) แทนค่าใน A · B = |A||B| cos θ<br>0 = (5)(5) cos θ<br>0 = 25 cos θ<br>cos θ = 0<br>θ = <b>90°</b></div><p>ดังนั้น A ตั้งฉากกับ B จริง หรือ <b>A ⟂ B</b></p>`;
};

/* In the perpendicular mini-game the player's name tag already identifies
   the character above their head, so do not stack the vector letter B over it. */
const vectoriaCanvasFillText=CanvasRenderingContext2D.prototype.fillText;
CanvasRenderingContext2D.prototype.fillText=function(text,x,y,maxWidth){
  if(text==='B'&&state.current===3&&document.querySelector('.game-screen'))return;
  return maxWidth===undefined
    ?vectoriaCanvasFillText.call(this,text,x,y)
    :vectoriaCanvasFillText.call(this,text,x,y,maxWidth);
};
/* Keep every magnitude expression together so vector marks never fall apart. */
const renderLessonBeforeStableMath=renderLesson;
renderLesson=function(q){
  renderLessonBeforeStableMath(q);
  if(q.id!==3)return;
  const rows=document.querySelectorAll('.lesson-steps .lesson-step>div');
  const v=n=>`<i class="math-vector">${n}</i>`;
  if(rows[0])rows[0].innerHTML=`เริ่มจากสูตรขนาดเวกเตอร์ <span class="math-nowrap">|${v('V')}| = √(x² + y²)</span>`;
  if(rows[1])rows[1].innerHTML=`แทนองค์ประกอบของ ${v('P')} <span class="math-nowrap">|${v('P')}| = √(3² + 4²)</span>`;
  if(rows[2])rows[2].innerHTML=`คำนวณค่าใต้เครื่องหมายราก <span class="math-nowrap">√(9 + 16) = √25</span>`;
  if(rows[3])rows[3].innerHTML=`ถอดราก <span class="math-nowrap">√25 = <b>5</b></span>`;
};

// Keep the short opposite-vector result together.  The vector arrow is an
// inline element, so the browser must not wrap between the minus sign, P,
// and its coordinates on narrow screens.
const renderLessonBeforeStableOppositeVector=renderLesson;
renderLesson=function(q){
  renderLessonBeforeStableOppositeVector(q);
  if(q.id!==2)return;
  const rows=document.querySelectorAll('.lesson-steps .lesson-step>div');
  if(rows[2])rows[2].innerHTML='ดังนั้น <span class="math-nowrap opposite-vector-equation">-<i class="math-vector">P</i> = <b>(-3, -2)</b></span>';
  const formula=document.querySelector('.formula');
  if(formula)formula.innerHTML='<span class="opposite-formula-line"><i class="math-vector">P</i> = (3, 2) &nbsp;→&nbsp; -<i class="math-vector">P</i> = <em>(-3, -2)</em></span><span class="opposite-angle-line">มุมระหว่าง <i class="math-vector">P</i> กับ -<i class="math-vector">P</i> = <b>180°</b></span>';
};

/* Adventure soundtrack and game sound effects (Web Audio, no external file). */
const vectoriaAudio={ctx:null,master:null,music:null,sfx:null,timer:null,beat:0,bgm:null,boom:null,gateAccepted:false,
  ensure(){if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return false;this.ctx=new C;this.master=this.ctx.createGain();this.music=this.ctx.createGain();this.sfx=this.ctx.createGain();this.master.gain.value=.95;this.music.gain.value=.48;this.sfx.gain.value=.85;this.music.connect(this.master);this.sfx.connect(this.master);this.master.connect(this.ctx.destination)}if(this.ctx.state==='suspended')this.ctx.resume();return true},
  tone(freq,duration=.16,volume=.12,type='triangle',when=0,target='sfx'){if(!state.sound||!this.ensure())return;const t=this.ctx.currentTime+when,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(volume,t+.018);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this[target]);o.start(t);o.stop(t+duration+.03)},
  effect(kind){if(kind==='explode'&&state.sound){if(!this.boom){this.boom=new Audio('boss-explosion.mp3?v=1');this.boom.preload='auto'}this.boom.currentTime=0;this.boom.volume=.92;this.boom.play().catch(()=>{});return}const notes={click:[[420,.06,.055]],good:[[523,.11,.11],[659,.13,.1,.08],[784,.22,.1,.17]],bad:[[220,.14,.1],[165,.24,.09,.11]],hurt:[[880,.09,.18],[660,.1,.18,.07],[390,.2,.16,.15]],collect:[[740,.08,.22],[988,.12,.24,.055],[1318,.2,.22,.13]],monster:[[150,.1,.34],[105,.18,.3,.045],[72,.3,.26,.12]],item:[[659,.08,.08],[880,.12,.09,.07],[1047,.18,.08,.15]],gate:[[196,.2,.08],[294,.25,.09,.12],[392,.35,.1,.25]],portal:[[220,.13,.13],[330,.16,.14,.08],[494,.2,.14,.17],[740,.34,.12,.28]],boss:[[131,.18,.12],[196,.22,.1,.12],[262,.35,.1,.25]]}[kind]||[];notes.forEach(n=>this.tone(n[0],n[1],n[2],kind==='hurt'||kind==='monster'?'sawtooth':'triangle',n[3]||0))},
  start(){if(!state.sound||this.timer)return;if(!this.bgm){this.bgm=new Audio('adventure-theme.mp3?v=1');this.bgm.loop=true;this.bgm.preload='auto'}this.bgm.volume=typeof musicVolume==='number'?musicVolume:.5;this.timer=true;this.bgm.play().catch(()=>{this.timer=null;if(!this.gateAccepted)showAudioStartGate()});document.querySelector('#soundBtn')?.classList.add('playing')},
  stop(){this.bgm?.pause();this.timer=null;document.querySelector('#soundBtn')?.classList.remove('playing')}
};
beep=function(good=true){vectoriaAudio.effect(good?'good':'bad')};
document.querySelector('#soundBtn').onclick=()=>{state.sound=!state.sound;save();if(state.sound){vectoriaAudio.start();vectoriaAudio.effect('item')}else vectoriaAudio.stop();toast(state.sound?'เปิดเพลงและเอฟเฟ็กต์เสียงแล้ว':'ปิดเสียงแล้ว')};
document.addEventListener('pointerdown',e=>{if(e.target.closest('#audioStartGate'))return;if(state.sound)vectoriaAudio.start();const b=e.target.closest('button');if(!b||b.id==='soundBtn')return;vectoriaAudio.effect(b.classList.contains('primary-btn')?'gate':'click')},{capture:true});
window.addEventListener('blur',()=>{if(vectoriaAudio.ctx?.state==='running')vectoriaAudio.ctx.suspend();vectoriaAudio.bgm?.pause()});
window.addEventListener('focus',()=>{if(state.sound&&vectoriaAudio.timer){vectoriaAudio.ctx?.resume();vectoriaAudio.bgm?.play().catch(()=>{})}});

const audioVersionKey='vectoria-audio-enabled-v3';
if(!localStorage.getItem(audioVersionKey)){state.sound=true;localStorage.setItem(audioVersionKey,'1');save()}
// Every fresh visit starts with game audio enabled; a previous muted session is not carried over.
state.sound=true;save();
let musicVolume=Math.max(0,Math.min(1,Number(localStorage.getItem('vectoria-music-volume')??.5)));
function showAudioStartGate(){
  if(document.querySelector('#audioStartGate')||!state.sound)return;
  const hasSavedGame=Boolean(state.started||state.completed.length||state.xp||state.hp!==5||state.step||state.current||Object.keys(state.adventure||{}).length);
  document.body.insertAdjacentHTML('beforeend',`
    <section class="audio-start-gate" id="audioStartGate" role="dialog" aria-modal="true" aria-labelledby="audioGateTitle">
      <span>⚔</span>
      <b id="audioGateTitle">เข้าสู่เกม</b>
      <small>คลิกหนึ่งครั้งเพื่อเข้าเกม</small>
      <div class="audio-gate-actions">
        ${hasSavedGame?'<button class="audio-gate-continue" id="continueLastGame">▶ เล่นเกมต่อ</button>':''}
        <button class="audio-gate-start" id="startAdventure">↻ เริ่มเกมใหม่</button>
      </div>
    </section>`);
  const enterGame=continueSaved=>{
    document.querySelector('#audioStartGate')?.remove();
    vectoriaAudio.gateAccepted=true;
    vectoriaAudio.start();
    /* Continue resumes the saved run directly on the dungeon map. */
    if(continueSaved){
      showMap();
      window.scrollTo({top:0,behavior:'auto'});
      return;
    }
    if(!continueSaved&&hasSavedGame){
      const keepSound=state.sound;
      state={...defaultState,completed:[],adventure:{},started:false,sound:keepSound};
      save();
    }
    /* A new run starts at player, character and party setup. */
    if(window.vectoriaMultiplayer?.showEntrance){
      window.vectoriaMultiplayer.showEntrance();
      window.scrollTo({top:0,behavior:'auto'});
    }else showMap();
  };
  document.querySelector('#continueLastGame')?.addEventListener('click',()=>enterGame(true));
  document.querySelector('#startAdventure').addEventListener('click',()=>enterGame(false));
}
const decorateSoundButton=()=>{const b=document.querySelector('#soundBtn');if(!b)return;b.textContent=state.sound?'♫ เพลง':'🔇 ปิด';b.title=state.sound?'เพลงผจญภัยและเอฟเฟ็กต์เปิดอยู่':'กดเพื่อเปิดเพลงและเอฟเฟ็กต์';b.setAttribute('aria-label',b.title)};
const updateTopbarBeforeAudio=updateTopbar;
updateTopbar=function(){updateTopbarBeforeAudio();decorateSoundButton()};
decorateSoundButton();
// Always begin at the entry/continue screen. Music starts only after the
// player's click, so browsers with autoplay permission cannot skip this page.
setTimeout(showAudioStartGate,0);
const soundButton=document.querySelector('#soundBtn');
soundButton?.insertAdjacentHTML('afterend',`<label class="music-volume" title="ปรับระดับเสียงเพลง"><span>🔊</span><input id="musicVolume" type="range" min="0" max="100" value="${Math.round(musicVolume*100)}" aria-label="ระดับเสียงเพลง"><output id="musicVolumeValue">${Math.round(musicVolume*100)}%</output></label>`);
document.querySelector('#musicVolume')?.addEventListener('input',e=>{musicVolume=Number(e.target.value)/100;localStorage.setItem('vectoria-music-volume',musicVolume);if(vectoriaAudio.bgm)vectoriaAudio.bgm.volume=musicVolume;document.querySelector('#musicVolumeValue').textContent=`${e.target.value}%`});
const toastBeforeAudio=toast;
toast=function(msg){toastBeforeAudio(msg);if(!state.sound)return;if(/ประตู.*เปิด|สำเร็จ/.test(msg))vectoriaAudio.effect('gate');else if(/ยังไม่ถูก|ผิด/.test(msg))vectoriaAudio.effect('bad')};
let lastFootstep=0;
document.addEventListener('keydown',e=>{if(!document.querySelector('.adventure-screen')||!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d','W','A','S','D'].includes(e.key))return;const now=Date.now();if(now-lastFootstep>190){lastFootstep=now;vectoriaAudio.tone(115,.045,.045,'square')}},true);
document.addEventListener('pointerdown',e=>{if(e.target.closest('.mobile-pad button'))vectoriaAudio.tone(115,.045,.045,'square')},true);

// Keep the compact floating scratchpad, but remove the oversized boss-page button.
const renderChallengeBeforeRemovingBossScratchButton=renderChallenge;
renderChallenge=function(q){renderChallengeBeforeRemovingBossScratchButton(q);document.querySelector('.boss-scratch-btn')?.remove()};

// Door warp SFX and a boss-defeat scene before the reward page.
const openQuestBeforePortalSfx=openQuest;
openQuest=function(...args){if(document.querySelector('.adventure-screen'))vectoriaAudio.effect('portal');return openQuestBeforePortalSfx(...args)};
const completeQuestBeforeBossDefeat=completeQuest;
let bossDefeatRunning=false;
completeQuest=function(q){if(bossDefeatRunning)return;bossDefeatRunning=true;const root=document.querySelector('#questContent'),portrait=document.querySelector('.boss-portrait');root.innerHTML=`<section class="boss-defeat-scene"><p class="section-icon">⚔ FINAL STRIKE</p><h2>โจมตีจุดอ่อนสำเร็จ!</h2><div class="boss-explosion charging" id="bossExplosion"><span>${q.glyph}</span>${Array.from({length:20},(_,i)=>`<i style="--i:${i}"></i>`).join('')}${Array.from({length:8},(_,i)=>`<b style="--i:${i}"></b>`).join('')}</div><h3>${q.name} พ่ายแพ้แล้ว</h3><p id="bossDefeatStatus">พลังของบอสกำลังแตกร้าว…</p><button class="primary-btn boss-reward-next" id="bossRewardNext">ไปรับรางวัล <span>→</span></button></section>`;vectoriaAudio.effect('boss');setTimeout(()=>document.querySelector('#bossExplosion')?.classList.add('cracking'),650);setTimeout(()=>{const explosion=document.querySelector('#bossExplosion');explosion?.classList.remove('charging','cracking');explosion?.classList.add('detonate');portrait?.classList.add('boss-defeated');const status=document.querySelector('#bossDefeatStatus');if(status)status.textContent='แรงระเบิดสลายพลังของบอสแล้ว!';vectoriaAudio.effect('explode')},1250);setTimeout(()=>document.querySelector('#bossRewardNext')?.classList.add('show'),4200);document.querySelector('#bossRewardNext').onclick=()=>{bossDefeatRunning=false;completeQuestBeforeBossDefeat(q)};root.scrollIntoView({behavior:'smooth',block:'start'})};

// In minigames the scratchpad sits below the game instead of floating over it.
const placeScratchpadForScreen=()=>{const scratch=document.querySelector('#universalScratch'),game=document.querySelector('.game-screen'),app=document.querySelector('#app');if(!scratch)return;if(game){if(scratch.previousElementSibling!==app)app.insertAdjacentElement('afterend',scratch);scratch.classList.add('in-game')}else{if(scratch.parentElement!==document.body)document.body.append(scratch);scratch.classList.remove('in-game')}};
new MutationObserver(()=>requestAnimationFrame(placeScratchpadForScreen)).observe(document.querySelector('#app'),{childList:true,subtree:true});
placeScratchpadForScreen();
// Floor 4 boss: only allow graphing vectors that are actually perpendicular.
// This keeps the angle diagram mathematically consistent (theta must be 90 degrees).
const renderBossGraphBeforePerpendicularGuard = renderBossGraph;
renderBossGraph = function(q) {
  renderBossGraphBeforePerpendicularGuard(q);
  if (q.id !== 4) return;

  const canvas = document.querySelector('#bossGraph');
  if (!canvas) return;

  canvas.addEventListener('click', event => {
    const rawValues = ['bx', 'by', 'cx', 'cy'].map(id => document.querySelector(`#${id}`)?.value.trim() ?? '');
    if (rawValues.some(value => value === '')) return;
    const [bx, by, cx, cy] = rawValues.map(Number);
    const result = document.querySelector('#bossGraphResult');

    if (![bx, by, cx, cy].every(Number.isFinite)) return;

    const aDotB = (-20 * bx) + (-21 * by);
    const negativeADotC = (20 * cx) + (21 * cy);
    if (aDotB === 0 && negativeADotC === 0) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    if (result) {
      result.className = 'graph-result wrong';
      result.textContent = aDotB !== 0
        ? 'B ยังไม่ตั้งฉากกับ A จึงยังวาดกราฟไม่ได้'
        : 'C ยังไม่ตั้งฉากกับ -A: ใช้ C = (21, -20) แล้วมุมจะเป็น θ = 90°';
    }
    beep(false);
  }, true);
};

// Canvas fonts do not consistently support the combining vector-arrow glyph.
// Draw the arrow ourselves so A, B and C never turn into square fallback symbols.
function drawCanvasVectorName(ctx, label, x, y, color) {
  const name = String(label).replace(/[\u20d7\u0302]/g, '');
  ctx.save();
  ctx.font = '700 19px Chakra Petch, Noto Sans Thai, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = color;
  ctx.fillText(name, x, y);

  const prefixWidth = name.startsWith('-') ? ctx.measureText('-').width : 0;
  const letter = name.replace(/^-/, '').charAt(0);
  const letterWidth = Math.max(12, ctx.measureText(letter).width);
  const left = x + prefixWidth;
  const top = y - 22;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left + letterWidth + 4, top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(left + letterWidth + 4, top);
  ctx.lineTo(left + letterWidth, top - 3);
  ctx.lineTo(left + letterWidth, top + 3);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

drawVectors = function(vectors) {
  const c = document.querySelector('#vectorCanvas');
  if (!c) return;
  const x = c.getContext('2d'), w = c.width, h = c.height, mid = w / 2;
  const unitGraph = vectors.every(v => /[̂Ĉ]/u.test(v[2]));
  const max = unitGraph ? 1.25 : Math.max(5, ...vectors.flatMap(v => [Math.abs(v[0]), Math.abs(v[1])])) * 1.25;
  const scale = (w / 2 - 38) / max;
  x.clearRect(0, 0, w, h);
  x.strokeStyle = '#1e3150';
  x.lineWidth = 1;
  for (let i = -max; i <= max; i += max / 5) {
    x.beginPath(); x.moveTo(0, mid - i * scale); x.lineTo(w, mid - i * scale); x.stroke();
    x.beginPath(); x.moveTo(mid + i * scale, 0); x.lineTo(mid + i * scale, h); x.stroke();
  }
  x.strokeStyle = '#75859f';
  x.lineWidth = 2;
  x.beginPath();
  x.moveTo(18, mid); x.lineTo(w - 18, mid);
  x.moveTo(mid, 18); x.lineTo(mid, h - 18);
  x.stroke();
  x.fillStyle = '#9babc6';
  x.font = '20px Chakra Petch, Noto Sans Thai, sans-serif';
  x.fillText('x', w - 30, mid - 12);
  x.fillText('y', mid + 12, 25);

  vectors.forEach(([vx, vy, label, color]) => {
    const ex = mid + vx * scale, ey = mid - vy * scale;
    const ang = Math.atan2(ey - mid, ex - mid);
    x.strokeStyle = color;
    x.fillStyle = color;
    x.lineWidth = 5;
    x.beginPath(); x.moveTo(mid, mid); x.lineTo(ex, ey); x.stroke();
    x.beginPath();
    x.moveTo(ex, ey);
    x.lineTo(ex - 18 * Math.cos(ang - .5), ey - 18 * Math.sin(ang - .5));
    x.lineTo(ex - 18 * Math.cos(ang + .5), ey - 18 * Math.sin(ang + .5));
    x.closePath(); x.fill();
    drawCanvasVectorName(x, label, ex + (vx >= 0 ? 8 : -70), ey + (vy >= 0 ? -10 : 24), color);
  });
};

// If the introductory dialog is below a short viewport, the first movement
// command should still start the minigame instead of leaving movement locked.
function unlockAdventureFromMovement(event) {
  if (event.target?.matches?.('input, textarea, select, [contenteditable="true"]')) return;
  const movementKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'];
  const isKeyboardMove = event.type === 'keydown' && movementKeys.includes(event.key);
  const isPadMove = event.type === 'pointerdown' && event.target.closest?.('.mobile-pad button');
  if (!isKeyboardMove && !isPadMove) return;
  const dialog = document.querySelector('#gameDialog');
  if (dialog && dialog.style.display !== 'none') dialog.style.display = 'none';
  document.querySelector('#gameCanvas')?.focus();
}
document.addEventListener('keydown', unlockAdventureFromMovement, true);
document.addEventListener('pointerdown', unlockAdventureFromMovement, true);

// The final boss always uses the fixed vectors shown in its own question.
// Accept equivalent numeric forms such as -1, −1 and -841/841.
function parseFinalBossDot(text) {
  const value = String(text ?? '').trim().replace(/−/g, '-').replace(/÷/g, '/');
  if (!value) return NaN;
  if (!value.includes('/')) return Number(value);
  const parts = value.split('/').map(part => Number(part.trim()));
  return parts.length === 2 && Number.isFinite(parts[0]) && Number.isFinite(parts[1]) && parts[1] !== 0
    ? parts[0] / parts[1]
    : NaN;
}

const renderChallengeBeforeFinalBossValidation = renderChallenge;
renderChallenge = function(q) {
  if (q.id === 5) {
    q.validate = values => {
      const answer = parseFinalBossDot(values.dot);
      return Number.isFinite(answer) && Math.abs(answer + 1) < .001;
    };
  }
  renderChallengeBeforeFinalBossValidation(q);
};

// Every unlocked map entrance starts with its matching playable minigame.
showMap = function() {
  state.step = 0;
  save();
  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.append(document.querySelector('#mapTemplate').content.cloneNode(true));
  const nodes = document.querySelector('#dungeonNodes');

  quests.forEach((q, i) => {
    const done = state.completed.includes(q.id);
    const open = i === 0 || state.completed.includes(i);
    const button = document.createElement('button');
    button.className = `dungeon-node ${done ? 'done' : open ? 'unlocked' : 'locked'}`;
    button.dataset.label = q.map;
    button.dataset.floor = String(i);
    button.innerHTML = `<strong>${done ? '✓' : open ? q.id : '♢'}</strong>`;
    button.setAttribute('aria-label', `${q.map} ${done ? 'ผ่านแล้ว' : open ? 'เข้าได้' : 'ยังล็อก'}`);
    button.onclick = () => open ? showAdventure(i) : toast('ต้องผ่านด่านก่อนหน้าก่อน');
    nodes.append(button);
  });

  document.querySelector('#mapProgress').textContent = `ผ่านแล้ว ${state.completed.length} / 5 ด่าน`;
  const next = Math.min(state.completed.length, 4);
  const continueButton = document.querySelector('#continueBtn');
  continueButton.textContent = state.completed.length === 5
    ? 'ชมบทสรุปชัยชนะ →'
    : `เข้าสู่${quests[next].map} →`;
  continueButton.onclick = () => state.completed.length === 5
    ? openQuest(4, 2)
    : showAdventure(next);

  document.querySelector('#resetBtn').onclick = () => {
    if (confirm('เริ่มเกมใหม่และลบความคืบหน้าทั้งหมดหรือไม่?')) {
      state = {...defaultState, completed: [], adventure: {}};
      save();
      showMap();
    }
  };
  app.focus();
};

// Refresh the initial map so its already-rendered buttons use the new routing.
showMap();

// Add stable HTML axis names above the training canvas so x and y stay clear
// regardless of canvas font support or later redraws.
const renderGraphTrainerBeforeAxisNames = renderGraphTrainer;
renderGraphTrainer = function(q) {
  renderGraphTrainerBeforeAxisNames(q);
  const canvas = document.querySelector('#practiceGraph');
  if (!canvas || canvas.parentElement?.classList.contains('practice-axis-wrap')) return;
  const wrap = document.createElement('div');
  wrap.className = 'practice-axis-wrap';
  canvas.parentNode.insertBefore(wrap, canvas);
  wrap.append(canvas);
  wrap.insertAdjacentHTML('beforeend', '<b class="practice-axis-name axis-x">แกน x</b><b class="practice-axis-name axis-y">แกน y</b>');
};

// Save controls: progress is saved automatically, while these controls give
// players a clear manual save and a safe way back to the character screen.
function showSaveConfirmation(message='บันทึกความคืบหน้าแล้ว') {
  const button = document.querySelector('#saveGameBtn');
  if (!button) return;
  const oldText = button.textContent;
  button.textContent = '✓ เซฟแล้ว';
  button.classList.add('saved');
  button.title = `${message} · ${new Date().toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'})}`;
  clearTimeout(showSaveConfirmation.timer);
  showSaveConfirmation.timer = setTimeout(() => {
    button.textContent = oldText;
    button.classList.remove('saved');
  }, 1800);
}

function saveGameNow() {
  save();
  window.vectoriaMultiplayer?.syncProgress?.(state.completed.length);
  showSaveConfirmation();
  toast('เซฟเกมเรียบร้อยแล้ว กลับมาเล่นต่อได้ทุกเมื่อ');
}

function showExitGameMenu() {
  saveGameNow();
  document.querySelector('#exitGameMenu')?.remove();
  const multiplayer = window.vectoriaMultiplayer;
  const avatarOrder = ['knight','mage','archer','support','rogue'];
  const avatarIndex = Math.max(0,avatarOrder.indexOf(multiplayer?.selectedAvatar || 'knight'));
  const playerName = multiplayer?.players?.find(player => player.id === multiplayer?.session?.playerId)?.display_name || 'นักผจญภัย';
  document.body.insertAdjacentHTML('beforeend', `
    <section class="exit-game-menu" id="exitGameMenu" role="dialog" aria-modal="true" aria-labelledby="exitMenuTitle" style="--exit-index:${avatarIndex}">
      <div class="exit-menu-card">
        <div class="exit-character-art" aria-hidden="true"></div>
        <div class="exit-menu-content">
          <span class="exit-menu-kicker">VECTORIA QUEST · บันทึกอัตโนมัติแล้ว</span>
          <h1 id="exitMenuTitle">พักการผจญภัย</h1>
          <p><b>${playerName.replace(/[&<>"']/g,'')}</b> ความคืบหน้าของคุณถูกเก็บไว้อย่างปลอดภัย</p>
          <div class="exit-save-summary"><span>ด่านที่ผ่าน</span><strong>${state.completed.length} / 5</strong><span>คริสตัลความรู้</span><strong>${state.xp}</strong></div>
          <button class="exit-continue-btn" id="continueSavedGame">▶ เล่นเกมต่อ</button>
          <button class="exit-map-btn" id="returnToMapFromExit">🗺 กลับไปหน้าแผนที่</button>
          <button class="exit-reset-btn" id="resetSavedGame">↻ เริ่มเล่นเกมใหม่ <small>(Reset)</small></button>
          <small class="exit-warning">การ Reset จะลบความคืบหน้าของเกมนี้ทั้งหมด</small>
        </div>
      </div>
    </section>`);
  const menu = document.querySelector('#exitGameMenu');
  document.querySelector('#continueSavedGame').onclick = () => {
    menu.classList.add('closing');
    setTimeout(() => menu.remove(),220);
    toast('กลับสู่การผจญภัย');
  };
  document.querySelector('#returnToMapFromExit').onclick = () => {
    menu.remove();
    showMap();
    window.scrollTo({top:0,behavior:'smooth'});
    toast('กลับสู่หน้าแผนที่ดันเจี้ยน');
  };
  document.querySelector('#resetSavedGame').onclick = async () => {
    if (!confirm('เริ่มเกมใหม่และลบความคืบหน้าทั้งหมดจริงหรือไม่?')) return;
    state = {...defaultState,completed:[],adventure:{}};
    save();
    menu.remove();
    if (multiplayer?.session) await multiplayer.leaveRoom();
    else if (multiplayer?.showEntrance) {
      multiplayer.gameStarted = false;
      multiplayer.showEntrance();
    } else showMap();
    toast('เริ่มเกมใหม่แล้ว เลือกตัวละครเพื่อออกผจญภัย');
    window.scrollTo({top:0,behavior:'smooth'});
  };
  document.querySelector('#continueSavedGame').focus();
}

document.querySelector('#saveGameBtn')?.addEventListener('click', saveGameNow);
document.querySelector('#exitGameBtn')?.addEventListener('click', showExitGameMenu);
window.addEventListener('pagehide', () => save());
/* Conditions popup for the 2D perpendicular-vector shortcut. */
const renderQ4LessonBase=renderQ4Lesson;
renderQ4Lesson=function(){
  renderQ4LessonBase();
  const rule=document.querySelector('.q4-rule');
  if(!rule)return;
  const ruleText=rule.querySelector('strong');
  if(ruleText)ruleText.textContent='ถ้า (x, y) เวกเตอร์ที่ตั้งฉากเลือกได้เป็น (y, -x)';
  const ruleDescription=rule.querySelector('p');
  if(ruleDescription)ruleDescription.textContent='ตรวจคำตอบด้วย dot product: เวกเตอร์ตั้งฉากกันเมื่อมุมเป็น 90 องศา';
  rule.insertAdjacentHTML('beforeend','<button type="button" id="q4RuleWarning" class="q4-warning-btn">⚠️ ข้อควรระวังในการใช้กฎ</button>');
  rule.insertAdjacentHTML('afterend',`<div class="q4-rule-modal" id="q4RuleModal" hidden>
    <div class="q4-rule-modal-card" role="dialog" aria-modal="true" aria-labelledby="q4RuleModalTitle">
      <button type="button" class="q4-rule-modal-close" id="q4RuleModalClose" aria-label="ปิด">×</button>
      <p class="section-icon">คู่มือกฎเวกเตอร์ตั้งฉาก</p>
      <h2 id="q4RuleModalTitle">กฎนี้ใช้เมื่อใด?</h2>
      <div class="q4-rule-condition good"><b>✓ ใช้กฎนี้ได้ เมื่อครบ 3 เงื่อนไข</b><ol><li>เป็นเวกเตอร์ในระนาบ 2 มิติ มีเพียงแกน x และ y</li><li>โจทย์ต้องการเวกเตอร์ที่ตั้งฉาก ทำมุม 90°</li><li>ต้องการเวกเตอร์ที่มีขนาดเท่ากับเวกเตอร์เดิม</li></ol></div>
      <div class="q4-rule-condition caution"><b>! จุดที่ต้องระวัง</b><ul><li>ถ้าต้องการขนาดเปลี่ยนไป ให้คูณ (y, -x) ด้วยจำนวนที่โจทย์กำหนด เช่น ต้องการยาว 2 เท่า ใช้ (2y, -2x)</li><li>ถ้าเป็นเวกเตอร์ 3 มิติ (x, y, z) ใช้กฎลัดนี้ไม่ได้ทันที</li><li>เวกเตอร์เริ่มต้นต้องไม่ใช่ (0, 0) เพราะเวกเตอร์ศูนย์ไม่มีทิศทางและระบุมุม 90° ไม่ได้</li></ul></div>
      <div class="q4-rule-check"><b>ตรวจคำตอบทุกครั้งด้วย Dot Product</b><span>(x, y) · (y, -x) = xy - xy = 0</span><small>เมื่อผลคูณจุดเท่ากับ 0 และทั้งคู่ไม่ใช่เวกเตอร์ศูนย์ จึงตั้งฉากกัน</small></div>
      <button type="button" class="primary-btn" id="q4RuleModalOkay">เข้าใจแล้ว</button>
    </div></div>`);
  document.querySelector('.q4-rule-check')?.remove();
  /* Show each value once and teach magnitude before using it in the angle formula. */
  const cards=document.querySelectorAll('.q4-step-card');
  const angleTable=`<p class="q4-angle-question"><b>cos θ = 0 มีมุมเท่าไหร่?</b> ดูจากตารางด้านล่าง</p><table class="inline-cos-table q4-proof-table"><thead><tr><th>θ</th><th>0°</th><th>90°</th><th>180°</th></tr></thead><tbody><tr><th>cos θ</th><td>1</td><td class="key-cell">0</td><td>-1</td></tr><tr class="angle-pictures"><th>รูปมุม</th><td><span class="angle-icon angle-zero"><i></i><b></b></span><small>ทิศเดียวกัน</small></td><td class="key-cell"><span class="angle-icon angle-ninety"><i></i><b></b><em></em></span><small>ตั้งฉาก</small></td><td><span class="angle-icon angle-oneeighty"><i></i><b></b></span><small>ทิศตรงข้าม</small></td></tr></tbody></table><strong class="q4-angle-answer">จากตาราง cos 90° = 0 ดังนั้น θ = 90°</strong>`;
  if(cards[1])cards[1].querySelector('div').innerHTML=`<h3>ตรวจว่า A ตั้งฉากกับ B จริงไหม</h3>
    <p>เราต้องรู้ขนาดของเวกเตอร์ก่อน จึงค่อยนำไปแทนในสูตรที่เชื่อม Dot Product กับมุม</p>
    <div class="q4-calc q4-ordered-proof">
      <section><b>1) หาขนาดของ A และ B ก่อน</b><span>สูตรหาขนาดของเวกเตอร์</span><strong>|V| = √(Vₓ² + Vᵧ²)</strong><span>|A| = √(4² + (-3)²)</span><span>|A| = √(16 + 9) = √25 = <b>5</b></span><span>|B| = √((-3)² + (-4)²)</span><span>|B| = √(9 + 16) = √25 = <b>5</b></span></section>
      <section><b>2) หา A · B ด้วยสูตร Dot Product</b><strong>A · B = AₓBₓ + AᵧBᵧ</strong><span>A · B = (4)(-3) + (-3)(-4)</span><span>A · B = -12 + 12</span><span>A · B = <b>0</b></span></section>
      <section><b>3) แทนค่าลงในสูตรที่เชื่อมกับมุม</b><strong>A · B = |A||B| cos θ</strong><strong>0 = (5)(5) cos θ</strong><strong>0 = 25 cos θ</strong><p class="q4-zero-reason">ด้านซ้ายของสมการเท่ากับ 0 ดังนั้นก้อนด้านขวา <b>25 cos θ คิดออกมาต้องได้เท่ากับ 0</b> ด้วย สมการถึงจะเป็นจริง และเพราะ 25 ไม่ใช่ 0 จึงต้องให้ <b>cos θ = 0</b> เพราะ <b>25 × 0 = 0</b> สมการจึงเป็นจริง</p><strong>cos θ = 0</strong>${angleTable}</section>
    </div><p class="q4-proof-conclusion">ดังนั้น <b>A</b> ตั้งฉากกับ <b>B</b> จริง หรือ <b>A ⟂ B</b></p>`;
  if(cards[3])cards[3].querySelector('div').innerHTML=`<h3>ตรวจว่า -A ตั้งฉากกับ C จริงไหม</h3>
    <p>ทำแบบเดียวกับคู่ A และ B โดยหาขนาดและ Dot Product ก่อนนำไปหามุม</p>
    <div class="q4-calc q4-ordered-proof">
      <section><b>1) หาขนาดของ -A และ C ก่อน</b><span>สูตรหาขนาดของเวกเตอร์</span><strong>|V| = √(Vₓ² + Vᵧ²)</strong><span>|-A| = √((-4)² + 3²)</span><span>|-A| = √(16 + 9) = √25 = <b>5</b></span><span>|C| = √(3² + 4²)</span><span>|C| = √(9 + 16) = √25 = <b>5</b></span></section>
      <section><b>2) หา (-A) · C ด้วยสูตร Dot Product</b><strong>(-A) · C = (-A)ₓCₓ + (-A)ᵧCᵧ</strong><span>(-A) · C = (-4)(3) + (3)(4)</span><span>(-A) · C = -12 + 12</span><span>(-A) · C = <b>0</b></span></section>
      <section><b>3) แทนค่าลงในสูตรที่เชื่อมกับมุม</b><strong>(-A) · C = |-A||C| cos θ</strong><strong>0 = (5)(5) cos θ</strong><strong>0 = 25 cos θ</strong><p class="q4-zero-reason">ด้านซ้ายของสมการเท่ากับ 0 ดังนั้นก้อนด้านขวา <b>25 cos θ คิดออกมาต้องได้เท่ากับ 0</b> ด้วย สมการถึงจะเป็นจริง และเพราะ 25 ไม่ใช่ 0 จึงต้องให้ <b>cos θ = 0</b> เพราะ <b>25 × 0 = 0</b> สมการจึงเป็นจริง</p><strong>cos θ = 0</strong>${angleTable}</section>
    </div><p class="q4-proof-conclusion">ดังนั้น <b>-A</b> ตั้งฉากกับ <b>C</b> จริง หรือ <b>-A ⟂ C</b></p>`;
  document.querySelectorAll('.q4-clean .cos-in-step,.q4-clean .pair-cos').forEach(block=>block.remove());
  const modal=document.querySelector('#q4RuleModal');
  const openModal=()=>{modal.hidden=false;document.body.classList.add('modal-open')};
  const closeModal=()=>{modal.hidden=true;document.body.classList.remove('modal-open')};
  document.querySelector('#q4RuleWarning').onclick=openModal;
  document.querySelector('#q4RuleModalClose').onclick=closeModal;
  document.querySelector('#q4RuleModalOkay').onclick=closeModal;
  modal.onclick=e=>{if(e.target===modal)closeModal()};
};

