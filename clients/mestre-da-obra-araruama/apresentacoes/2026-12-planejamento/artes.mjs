// Protótipos 1080x1440 das 12 peças de dezembro. Uso: node artes.mjs [num...]
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const ID=path.join(AQUI,'../../identidade');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const b64=(f,t)=>`data:${t};base64,`+fs.readFileSync(path.join(ID,f)).toString('base64');
const eq=n=>b64(`equipamentos/${n}.png`,'image/png');
const logoB=b64('logo-horizontal-branco.svg','image/svg+xml'), logoA=b64('logo-horizontal-azul.svg','image/svg+xml');
const fachada=b64('loja/fachada.jpg','image/jpeg'), patio=b64('loja/patio-betoneiras-frame-video-18-11.jpg','image/jpeg');
const fontes=fs.readFileSync(path.join(ID,'fontes/barlow.css'),'utf8');
// m: [arquivo, left, top, width, rotacao, z]   hex: [cx, cy, raio]
export const PECAS=[
 {n:'01',d:'02/12',tema:'claro',tag:'Andaime',h:['A TINTA SÓ','CHEGA ONDE'],a:'O ANDAIME CHEGA.',ap:'Painel, piso, escada e guarda-corpo pra pintura de fachada.',cta:'Peça o orçamento do andaime',hex:[730,1000,355],m:[['andaime-guarda-corpo',545,668,400],['andaime-painel',538,985,415],['andaime-piso',150,960,360,0,3]],sz:138},
 {n:'02',d:'04/12',tema:'escuro',tag:'Fim de semana',h:['SEXTA, SÁBADO','E DOMINGO'],a:'POR UMA DIÁRIA.',ap:'',dias:690,cta:'Reserve pro fim de semana',nota:'Consulte os equipamentos participantes.',hex:[540,1110,250],m:[['lixadeira-de-parede',180,880,235],['martelete-18-3kg',425,885,208,0,4],['lavadora-hd-6-15c',680,880,238]],sz:150},
 {n:'03',d:'07/12',tema:'claro',tag:'Compactador de solo',h:['CHÃO BEM BATIDO','É SERVIÇO'],a:'DO SAPINHO.',ap:'Compactador de solo pra base de piso, calçada e vala.',cta:'Peça o orçamento do sapinho',hex:[735,985,355],m:[['compactador-sapinho',545,630,445]],sz:146},
 {n:'04',d:'09/12',tema:'escuro',tag:'Betoneira 400 L',h:['MASSA NA ENXADA','CANSA A EQUIPE'],a:'ANTES DO ALMOÇO.',ap:'Betoneira de 400 litros pra alugar em Araruama.',cta:'Peça o orçamento da betoneira',hex:[680,1010,350],m:[['betoneira-400l',375,690,645]],sz:140},
 {n:'05',d:'11/12',tema:'claro',tag:'Cobrimos orçamento',h:['TRAGA O ORÇAMENTO','DO CONCORRENTE.'],a:'A GENTE COBRE.',ap:'Betoneira, andaime, compactador e o que mais a sua obra pedir.',apw:800,cta:'Mande o orçamento no WhatsApp',nota:'Válido pra orçamento real de concorrente local. Consulte as condições.',hex:[600,1060,270],m:[['andaime-guarda-corpo',70,800,300],['andaime-painel',66,1040,308],['betoneira-400l',300,760,505,0,3],['compactador-sapinho',715,735,325,0,4]],sz:127},
 {n:'06',d:'14/12',tema:'escuro',tag:'Lavadora de alta pressão',h:['LIMO DE CASA','FECHADA PEDE'],a:'ALTA PRESSÃO.',ap:'Lavadora pra piso, muro e calçada da casa de praia.',cta:'Peça o orçamento da lavadora',hex:[735,1000,352],m:[['lavadora-hd-6-15c',570,660,370]],sz:148},
 {n:'07',d:'16/12',tema:'claro',tag:'Extratora de estofado',h:['O SOFÁ AINDA TEM','A MANCHA DO'],a:'VERÃO PASSADO.',ap:'Extratora pra sofá, poltrona e tapete.',cta:'Peça o orçamento da extratora',hex:[700,990,350],m:[['extratora-puzzi',440,640,565]],sz:140},
 {n:'08',d:'18/12',tema:'escuro',tag:'Última sexta antes do Natal',h:['A FAXINA DA CASA','DE PRAIA CABE NO'],a:'FIM DE SEMANA.',ap:'Uma diária, de sexta 18 a segunda 21 de dezembro.',cta:'Reserve a sua até sexta',nota:'Consulte os equipamentos participantes.',hex:[720,1005,345],m:[['enceradeira',500,690,250],['lavadora-hd585',725,690,283,0,3]],sz:137},
 {n:'09',d:'21/12',tema:'claro',tag:'Marteletes',h:['NÃO GASTE','AS FÉRIAS'],a:'NA MARRETA.',ap:'Quatro tamanhos de martelete, de 5,7 a 29,5 kg.',apw:940,cta:'Peça o orçamento do martelete',hex:[600,1075,262],m:[['martelete-5-7kg',30,800,350],['martelete-10kg',30,1065,360],['martelete-18-3kg',440,760,240],['martelete-29-5kg',715,735,305]],rot:[['5,7 kg',285,935],['10 kg',290,1185],['18,3 kg',575,1170],['29,5 kg',885,1190]],sz:156},
 {n:'10',d:'23/12',tema:'escuro',tag:'Antes do Natal',h:['RESERVE A MÁQUINA','ANTES DO FERIADO'],a:'DE NATAL.',ap:'Cortadora de piso e placa vibratória pra obra do recesso.',cta:'Reserve a sua máquina',nota:'Consulte o horário de fim de ano.',hex:[600,1060,275],m:[['placa-vibratoria',100,795,400],['cortadora-de-piso',460,810,540,0,3]],apw:940,sz:130},
 {n:'11',d:'25/12',tema:'natal',tag:'25 de dezembro',h:['HOJE A OBRA PARA'],a:'E A CASA ENCHE.',ap:'',cta:'Feliz Natal da Mestre da Obra Araruama!',m:[],sz:140},
 {n:'12',d:'28/12',tema:'escuro',tag:'Obra de janeiro',h:['MANDE A LISTA.','A GENTE ORÇA'],a:'A OBRA INTEIRA.',ap:'Betoneira, compactador, martelete e andaime no mesmo WhatsApp.',apw:900,cta:'Mande a sua lista',hex:[540,1060,275],m:[['betoneira-400l',60,800,510,0,3],['compactador-sapinho',500,765,325,0,4],['martelete-29-5kg',770,800,265,0,3]],sz:146},
];
const hexPts=(cx,cy,r)=>[...Array(6)].map((_,i)=>{const t=Math.PI/3*i;return `${(cx+r*Math.cos(t)).toFixed(1)},${(cy+r*Math.sin(t)).toFixed(1)}`}).join(' ');
const CSS=`${fontes}
*{box-sizing:border-box;margin:0}body{width:1080px;height:1440px;overflow:hidden;font-family:'Barlow';position:relative}
.escuro{background:radial-gradient(900px 800px at 68% 66%,#3d5cc4 0%,#284093 46%,#16245c 100%);color:#fff}
.claro,.natal{background:radial-gradient(1000px 900px at 66% 68%,#ffffff 0%,#f4f1ea 55%,#e6e1d5 100%);color:#284093}
svg.bg{position:absolute;inset:0}
.logo{position:absolute;left:52px;top:46px;height:118px;margin-left:-10px}
.tag{position:absolute;right:64px;top:90px;font:600 27px 'Barlow';text-align:right;opacity:.92}
h1{position:absolute;left:64px;top:206px;font-family:'Barlow Condensed';font-weight:800;line-height:.94;letter-spacing:-.5px;z-index:6}
h1 span{display:block;white-space:nowrap}
.escuro h1 .a{color:#FAA227}.claro h1 .a,.natal h1 .a{display:inline-block;background:#FAA227;color:#1d3079;padding:4px 18px 10px;margin:8px 0 0 -18px}
.ap{position:absolute;left:64px;width:430px;font:500 38px/1.22 'Barlow';z-index:6}
.m{position:absolute}.m img{width:100%;display:block;position:relative}
.sombra{position:absolute;border-radius:50%;filter:blur(20px);background:rgba(8,14,44,.42)}
.rot{position:absolute;font:700 34px 'Barlow Condensed';background:#284093;color:#fff;padding:3px 16px 5px;z-index:8}
.pe{position:absolute;left:64px;right:64px;bottom:62px;display:flex;align-items:center;gap:22px;z-index:9}
.seta{width:74px;height:74px;border-radius:50%;background:#FAA227;display:grid;place-items:center;flex:none}
.cta{font:700 37px/1.08 'Barlow'}.tel{font:600 31px/1.15 'Barlow';margin-top:5px;opacity:.95}
.nota{position:absolute;right:64px;left:64px;bottom:24px;font:500 21px 'Barlow';opacity:.85;z-index:9}
.foto{position:absolute;inset:0;background-size:cover;background-position:center}
`;
function html(p){
 const n=p.h.length+1, hTop=206, hAlt=Math.round(p.sz*.94*n)+(p.tema==='escuro'?0:22);
 const stroke=p.tema==='escuro'?'#ffffff':'#284093', dk=p.tema==='escuro';
 let bg='';
 if(p.hex){const [x,y,r]=p.hex;bg=`<svg class="bg" viewBox="0 0 1080 1440" fill="none"><polygon points="${hexPts(x,y,r)}" fill="${dk?'#ffffff':'#284093'}" fill-opacity="${dk?.06:.055}"/><polygon points="${hexPts(x,y,r)}" stroke="${stroke}" stroke-opacity="${dk?.34:.26}" stroke-width="5"/><polygon points="${hexPts(x+74,y-62,r)}" stroke="#FAA227" stroke-opacity=".95" stroke-width="6"/></svg>`}
 const maq=p.m.map(([f,l,t,w,rot=0,z=2])=>`<div class="m" style="left:${l}px;top:${t}px;width:${w}px;z-index:${z};transform:rotate(${rot}deg)">${/andaime-painel|martelete-(5|10)/.test(f)?'':`<div class="sombra" style="left:6%;right:6%;bottom:-14px;height:46px"></div>`}<img src="${eq(f)}"></div>`).join('');
 const foto=p.foto?`<div class="foto" style="background-image:url(${p.foto});background-position:38% 50%"></div><div class="foto" style="background:linear-gradient(180deg,rgba(22,36,92,.97) 0%,rgba(30,50,128,.93) 42%,rgba(40,64,147,.62) 62%,rgba(16,26,70,.96) 92%)"></div>`:'';
 const natal=p.tema==='natal'?`<div style="position:absolute;left:0;right:0;top:640px;height:600px;background:url(${patio}) 0 -575px/1080px auto no-repeat"></div><div style="position:absolute;left:0;right:0;top:1236px;bottom:0;background:#284093"></div><div style="position:absolute;left:0;right:0;top:640px;height:120px;background:linear-gradient(#ede9df,rgba(237,233,223,0))"></div><svg class="bg" viewBox="0 0 1080 1440" fill="none"><polygon points="${hexPts(830,930,360)}" stroke="#FAA227" stroke-width="6"/></svg>`:'';
 const pe=p.tema==='natal'?`<div class="pe" style="bottom:70px;color:#fff;justify-content:center"><div class="cta" style="font-size:47px">${p.cta}</div></div>`:
 `<div class="pe" style="bottom:${p.nota?66:56}px"><div class="seta"><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16245c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg></div><div><div class="cta">${p.cta}</div><div class="tel">(22) 99768-8956</div></div></div>${p.nota?`<div class="nota">${p.nota}</div>`:''}`;
 return `<!doctype html><meta charset="utf-8"><style>${CSS}</style><body class="${p.tema}">${foto}${bg}${natal}
 <img class="logo" src="${dk?logoB:logoA}"><div class="tag">${p.tag}</div>
 <h1 style="font-size:${p.sz}px">${p.h.map(x=>`<span>${x}</span>`).join('')}<span class="a">${p.a}</span></h1>
 ${p.ap?`<div class="ap" style="top:${hTop+hAlt+26}px;${p.apw?`width:${p.apw}px`:''}">${p.ap}</div>`:''}${maq}${p.dias?`<div style="position:absolute;left:64px;right:64px;top:${p.dias}px;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;z-index:7">${[['SEX','retira'],['SÁB','usa'],['DOM','usa'],['SEG','devolve']].map(([x,y],i)=>`<div style="border-radius:10px;padding:12px 0 16px;text-align:center;${i===0||i===3?'background:#FAA227;color:#16245c':'background:rgba(255,255,255,.14);color:#fff'}"><div style="font:800 68px/1 'Barlow Condensed'">${x}</div><div style="font:600 30px/1 'Barlow';margin-top:4px">${y}</div></div>`).join('')}</div>`:''}
 ${(p.rot||[]).map(([t,l,y])=>`<div class="rot" style="left:${l}px;top:${y}px">${t}</div>`).join('')}${pe}</body>`;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const so=process.argv.slice(2); const b=await chromium.launch({channel:'chrome'}); const pg=await b.newPage({viewport:{width:1080,height:1440}});
 for(const p of PECAS){ if(so.length&&!so.includes(p.n))continue; await pg.setContent(html(p)); await pg.evaluate(()=>document.fonts.ready); await pg.waitForTimeout(120);
  const over=await pg.evaluate(()=>[...document.querySelectorAll('h1 span')].filter(e=>e.getBoundingClientRect().right>1030||e.scrollWidth>980).map(e=>e.textContent+' '+Math.round(e.getBoundingClientRect().width)));
  if(over.length)console.log(p.n,'largo:',over.join(' | ')); await pg.screenshot({path:`${AQUI}/artes/${p.n}.jpg`,type:'jpeg',quality:88}); }
 // folha de contato em ordem de feed (mais novo primeiro)
 const g=[...PECAS].reverse().map(p=>`<img src="data:image/jpeg;base64,${fs.readFileSync(`${AQUI}/artes/${p.n}.jpg`).toString('base64')}" style="width:100%;display:block">`).join('');
 await pg.setViewportSize({width:1200,height:2140}); await pg.setContent(`<body style="margin:0;background:#fff;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;align-content:start">${g}`); await pg.waitForTimeout(400); await pg.screenshot({path:`${AQUI}/artes/feed.jpg`,type:'jpeg',quality:85});
 await b.close();
}
