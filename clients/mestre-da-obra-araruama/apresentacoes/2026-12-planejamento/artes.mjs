// Protótipos 1080x1440 das 12 peças de dezembro. Uso: node artes.mjs [num...]
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const ID=path.join(AQUI,'../../identidade');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const b64=(f,t)=>`data:${t};base64,`+fs.readFileSync(path.join(ID,f)).toString('base64');
const eq=n=>b64(`equipamentos/${n}.png`,'image/png');
const logoB=b64('logo-horizontal-branco.svg','image/svg+xml'), logoA=b64('logo-horizontal-azul.svg','image/svg+xml');
const fachada=b64('loja/fachada.jpg','image/jpeg'), patio=b64('loja/fotos-16-11/patio-betoneiras.jpg','image/jpeg'); const ft=n=>b64(`loja/fotos-16-11/${n}.jpg`,'image/jpeg');
const fontes=fs.readFileSync(path.join(ID,'fontes/barlow.css'),'utf8');
// m: [arquivo, left, top, width, rotacao, z]   hex: [cx, cy, raio]
export const PECAS=[
 {n:'01',d:'02/12',tipo:'video',tema:'video',tag:'Andaime',h:['PINTE A FACHADA','COM MAIS ESPAÇO'],a:'E SEGURANÇA',ap:'Alugue andaimes com painel, piso, escada e guarda-corpo.',apw:940,foto:'andaimes-estoque-2',fy:320,m:[],sz:146},
 {n:'02',d:'04/12',tipo:'arte',tema:'escuro',tag:'Fim de semana',h:['SEXTA, SÁBADO','E DOMINGO'],a:'POR UMA DIÁRIA',ap:'',dias:690,cta:'Reserve pelo WhatsApp',nota:'Consulte os equipamentos participantes.',hex:[540,1110,250],m:[['lixadeira-de-parede',180,880,235],['martelete-18-3kg',425,885,208,0,4],['lavadora-hd-6-15c',680,880,238]],sz:150},
 {n:'03',d:'07/12',tipo:'carrossel',tema:'claro',tag:'Compactador de solo',h:['BATA O CHÃO','COM O SAPINHO'],a:'SEM TANTO ESFORÇO',ap:'Alugue o compactador pra preparar a base do piso ou da calçada.',cta:'Arraste pro lado',hex:[735,985,355],m:[['compactador-sapinho',545,630,445]],sz:126},
 {n:'04',d:'09/12',tipo:'video',tema:'video',tag:'Betoneira 400 L',h:['DEIXE A BETONEIRA','MISTURAR A MASSA'],a:'POR VOCÊ',ap:'Alugue uma betoneira de 400 litros e reduza o trabalho manual.',apw:940,foto:'betoneira-na-frente',fy:320,m:[],sz:138},
 {n:'05',d:'11/12',tipo:'arte',tema:'escuro',tag:'Cobrimos orçamento',h:['FEZ ORÇAMENTO','NO CONCORRENTE,'],a:'A GENTE COBRE.',ap:'Pra locação de máquinas e equipamentos de obra.',apw:960,cta:'Mande o orçamento no WhatsApp',nota:'Válido pra orçamento real de concorrente local. Consulte as condições.',hex:[560,1060,270],m:[['betoneira-400l',60,790,510,0,3],['compactador-sapinho',500,750,325,0,4],['martelete-29-5kg',770,795,262,0,3]],sz:140},
 {n:'06',d:'14/12',tipo:'carrossel',tema:'claro',tag:'Extratora de estofado',h:['DÁ PRA LAVAR','O SOFÁ EM CASA'],a:'COM UMA EXTRATORA',ap:'Alugue a máquina que lava o tecido e aspira a água com a sujeira.',cta:'Arraste pro lado',hex:[700,990,350],m:[['extratora-puzzi',440,640,565]],sz:122},
 {n:'07',d:'16/12',tipo:'video',tema:'video',tag:'Lavadora de alta pressão',h:['TIRE A SUJEIRA E','O LIMO DA CASA'],a:'COM ALTA PRESSÃO',ap:'Alugue uma lavadora pra limpar pisos, muros e calçadas.',apw:940,foto:'fachada',fy:580,fs:'auto 900px',fx:'62%',m:[['lavadora-hd-6-15c',330,730,370,0,5]],sz:138},
 {n:'08',d:'18/12',tipo:'arte',tema:'escuro',tag:'Última sexta antes do Natal',h:['FAXINA PRO NATAL','NO FIM DE SEMANA'],a:'POR UMA DIÁRIA',ap:'Retire o equipamento em 18/12 e devolva em 21/12.',cta:'Reserve pelo WhatsApp',nota:'Consulte os equipamentos participantes.',hex:[720,1005,345],m:[['enceradeira',500,690,250],['lavadora-hd585',725,690,283,0,3]],sz:138},
 {n:'09',d:'21/12',tipo:'carrossel',tema:'claro',tag:'Marteletes',h:['NAS FÉRIAS,','TROQUE A MARRETA'],a:'PELO MARTELETE',ap:'Alugue marteletes de 5,7 a 29,5 kg pra sua reforma.',apw:940,cta:'Arraste pro lado',hex:[600,1075,262],m:[['martelete-5-7kg',30,820,340],['martelete-10kg',30,1070,350],['martelete-18-3kg',440,775,232],['martelete-29-5kg',720,750,295]],rot:[['5,7 kg',280,950],['10 kg',285,1185],['18,3 kg',570,1170],['29,5 kg',885,1190]],sz:130},
 {n:'10',d:'23/12',tipo:'video',tema:'video',tag:'Antes do Natal',h:['OBRA NO RECESSO:','RESERVE A MÁQUINA'],a:'ANTES DO NATAL',ap:'Aluguel de cortadora de piso e placa vibratória.',apw:940,foto:'placa-vibratoria',fy:240,m:[],sz:128},
 {n:'11',d:'25/12',tipo:'arte',tema:'natal',tag:'25 de dezembro',h:['HOJE A OBRA PARA'],a:'E A CASA ENCHE.',ap:'',cta:'Feliz Natal, da nossa equipe pra sua família!',m:[],sz:140},
 {n:'12',d:'28/12',tipo:'arte',tema:'claro',tag:'Obra de janeiro',h:['MÁQUINAS PRA','OBRA DE JANEIRO'],a:'NUM SÓ ORÇAMENTO',ap:'Aluguel de equipamentos pra diferentes etapas da obra.',apw:960,cta:'Mande a lista no WhatsApp',hex:[540,1060,275],m:[['betoneira-400l',60,800,510,0,3],['compactador-sapinho',500,765,325,0,4],['martelete-29-5kg',770,800,265,0,3]],sz:129},
];
const hexPts=(cx,cy,r)=>[...Array(6)].map((_,i)=>{const t=Math.PI/3*i;return `${(cx+r*Math.cos(t)).toFixed(1)},${(cy+r*Math.sin(t)).toFixed(1)}`}).join(' ');
const CSS=`${fontes}
*{box-sizing:border-box;margin:0}body{width:1080px;height:1440px;overflow:hidden;font-family:'Barlow';position:relative}
.escuro{background:radial-gradient(900px 800px at 68% 66%,#3d5cc4 0%,#284093 46%,#16245c 100%);color:#fff}
.video,.natal{background:#16245c;color:#fff}.claro{background:radial-gradient(1000px 900px at 66% 68%,#ffffff 0%,#f4f1ea 55%,#e6e1d5 100%);color:#284093}
svg.bg{position:absolute;inset:0}
.logo{position:absolute;left:52px;top:46px;height:118px;margin-left:-10px}
.tag{position:absolute;right:64px;top:90px;font:600 27px 'Barlow';text-align:right;opacity:.92}
h1{position:absolute;left:64px;top:206px;font-family:'Barlow Condensed';font-weight:800;line-height:.94;letter-spacing:-.5px;z-index:6}
h1 span{display:block;white-space:nowrap}
.escuro h1 .a,.video h1 .a,.natal h1 .a{color:#FAA227}.claro h1 .a{display:inline-block;background:#FAA227;color:#1d3079;padding:4px 18px 10px;margin:8px 0 0 -18px}
.ap{position:absolute;left:64px;width:430px;font:500 38px/1.22 'Barlow';text-wrap:balance;z-index:6}
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
 const claro=p.tema==='claro'; const n=p.h.length+1, hTop=206, hAlt=Math.round(p.sz*.94*n)+(claro?22:0);
 const stroke=p.tema==='escuro'?'#ffffff':'#284093', dk=!claro;
 let bg='';
 if(p.hex){const [x,y,r]=p.hex;bg=`<svg class="bg" viewBox="0 0 1080 1440" fill="none"><polygon points="${hexPts(x,y,r)}" fill="${dk?'#ffffff':'#284093'}" fill-opacity="${dk?.06:.055}"/><polygon points="${hexPts(x,y,r)}" stroke="${stroke}" stroke-opacity="${dk?.34:.26}" stroke-width="5"/><polygon points="${hexPts(x+74,y-62,r)}" stroke="#FAA227" stroke-opacity=".95" stroke-width="6"/></svg>`}
 const maq=p.m.map(([f,l,t,w,rot=0,z=2])=>`<div class="m" style="left:${l}px;top:${t}px;width:${w}px;z-index:${z};transform:rotate(${rot}deg)">${/andaime-painel|martelete-(5|10)/.test(f)?'':`<div class="sombra" style="left:6%;right:6%;bottom:-14px;height:46px"></div>`}<img src="${eq(f)}"></div>`).join('');
 const foto=p.foto?`<div class="foto" style="top:${p.fy}px;background:url(${ft(p.foto)}) ${p.fx||'50%'} 0/${p.fs||'1080px auto'} no-repeat"></div><div class="foto" style="background:linear-gradient(180deg,#16245c 0%,#16245c ${Math.round(p.fy/14.4)}%,rgba(22,36,92,.97) 44%,rgba(22,36,92,.86) 51%,rgba(22,36,92,.1) 66%,rgba(22,36,92,0) 82%,rgba(16,26,70,.7) 100%)"></div><svg class="bg" style="z-index:3" viewBox="0 0 1080 1440" fill="none"><polygon points="${hexPts(540,1060,330)}" stroke="#FAA227" stroke-width="6" stroke-opacity=".9"/></svg>`:'';
 const natal=p.tema==='natal'?`<div style="position:absolute;inset:0;background:radial-gradient(900px 700px at 60% 20%,#3d5cc4,#284093 50%,#16245c)"></div><div style="position:absolute;left:0;right:0;top:520px;height:730px;background:url(${patio}) 50% 78%/cover no-repeat"></div><div style="position:absolute;left:0;right:0;top:518px;height:210px;background:linear-gradient(#263d8d,rgba(38,61,141,0))"></div><div style="position:absolute;left:0;right:0;top:1236px;bottom:0;background:#FAA227"></div><svg class="bg" viewBox="0 0 1080 1440" fill="none"><polygon points="${hexPts(800,900,330)}" stroke="#FAA227" stroke-width="6"/></svg>`:'';
 const pe=p.tema==='natal'?`<div class="pe" style="bottom:70px;color:#16245c;justify-content:center"><div class="cta" style="font-size:47px">${p.cta}</div></div>`:
 p.tema==='video'?`<div class="pe" style="bottom:60px"><div class="seta" style="width:96px;height:96px"><svg width="44" height="44" viewBox="0 0 24 24" fill="#16245c"><path d="M7 4v16l13-8z"/></svg></div></div>`:
 `<div class="pe" style="bottom:${p.nota?66:56}px"><div class="seta"><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16245c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg></div><div><div class="cta">${p.cta}</div>${p.tipo==='carrossel'?'':'<div class="tel">(22) 99768-8956</div>'}</div></div>${p.nota?`<div class="nota">${p.nota}</div>`:''}`;
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
