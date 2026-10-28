document.documentElement.classList.add('js');
/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
/* pipeline */
var S=[["Sources","Public statistics, filings, job postings, news and licensed datasets, each logged with its source, date and permitted use."],["Structured data","Records are cleaned, deduplicated and standardised into consistent, documented definitions."],["Analysis","Trends, segments and indicators are tested, with confidence levels and limitations noted."],["Insights","Findings become charts, briefs and recommendations a decision-maker can act on."]];
var sb=document.getElementById('stg'),pn=document.getElementById('pn'),bar=document.getElementById('bar');
S.forEach(function(s,i){var b=document.createElement('button');b.textContent=(i+1)+'. '+s[0];b.onclick=function(){go(i)};sb.appendChild(b)});
function go(i){[].forEach.call(sb.children,function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-pressed',j===i)});pn.textContent=S[i][1];bar.style.width=(i+1)*25+'%'}
go(0);
/* pathway tabs */
var tb=document.querySelectorAll('.tabs button'),tp=document.querySelectorAll('.tp>div');
tb.forEach(function(b,i){b.onclick=function(){tb.forEach(function(x,j){x.classList.toggle('on',j===i);tp[j].hidden=j!==i})}});
/* sample previews */
document.querySelectorAll('.pv').forEach(function(p){var k=+p.dataset.s;for(var i=0;i<7;i++){var b=document.createElement('i');b.style.height=(25+Math.abs(Math.sin(i*1.3+k*2))*70)+'%';p.appendChild(b)}});
/* roadmap + dashboard visuals */
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function(){var M='matrix(.696 -.336 -.696 -.336 175 372)',PD='M20 100C110 20 200 20 260 90S370 180 450 100S570 20 650 90S750 170 790 100',sv=document.getElementById('isv'),
h='<g transform="'+M+'"><rect x="-10" y="-30" width="830" height="260" rx="40" fill="#0e2a52" fill-opacity=".55" stroke="#2b6cb0" stroke-dasharray="6 6"/>';
[[70,150],[300,30],[470,150],[630,20]].forEach(function(d){h+='<g transform="translate('+d+')" fill="none" stroke="#67D9FF" stroke-opacity=".5"><rect width="70" height="44" rx="4"/><path d="M10 14h50M10 24h50M10 34h30"/></g>'});
h+='<path id="rd" d="'+PD+'" fill="none" stroke="#1768F2" stroke-opacity=".3" stroke-width="24" stroke-linecap="round"/><path d="'+PD+'" fill="none" stroke="#67D9FF" stroke-opacity=".75" stroke-width="9" stroke-linecap="round"/><path class="flow2" d="'+PD+'" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>';
if(!RM)h+=['14" fill-opacity=".35" fill="#67D9FF','6" fill="#fff'].map(function(a){return '<circle r="'+a+'"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#rd"/></animateMotion></circle>'}).join('');
sv.innerHTML=h+'</g>';
var rd=sv.querySelector('#rd'),L=rd.getTotalLength(),C=['#FFA62B','#22b8e8','#FF5C7A','#FFA62B'],T=['Day 0 · Baseline','Day 30 · Priorities','Day 60 · Test','Day 90 · Review'],o='';
[.04,.33,.62,.96].forEach(function(f,i){var p=rd.getPointAtLength(L*f),x=.696*(p.x-p.y)+175,y=372-.336*(p.x+p.y);
o+='<g transform="translate('+x+' '+y+')" class="pin" style="transition-delay:'+i*.25+'s"><ellipse rx="34" ry="17" cy="7" fill="#0B0820" opacity=".6"/><ellipse rx="32" ry="16" fill="#fff" fill-opacity=".92"/><ellipse rx="22" ry="11" fill="none" stroke="'+C[i]+'" stroke-width="3"/><ellipse rx="12" ry="6" fill="none" stroke="'+C[i]+'" stroke-width="2"/><ellipse class="rg" rx="16" ry="8" fill="none" stroke="'+C[i]+'" stroke-width="2"/><g class="bob" style="animation-delay:'+i*.4+'s"><path d="M0 0C-4-10-15-18-15-30A15 15 0 1 1 15-30C15-18 4-10 0 0Z" fill="'+C[i]+'"/><circle cy="-30" r="5.5" fill="#fff"/><text y="-54" text-anchor="middle" fill="#fff" stroke="#0A1427" stroke-width="3" paint-order="stroke" font-size="13" font-weight="600" font-family="Inter,sans-serif">'+T[i]+'</text></g></g>'});
sv.insertAdjacentHTML('beforeend',o)})();
(function(){var n=20,P=[],d='',b='',g='',i,x,y;
for(i=0;i<n;i++){x=20+i*19.5;y=190-(.18+.7*i/(n-1)+Math.sin(i*1.7)*.06)*150;P.push([x,y]);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);
var bh=10+i*3.2+(i%4)*5;b+='<rect class="cb" x="'+(x-5)+'" y="'+(190-bh)+'" width="11" height="'+bh+'" rx="2" fill="'+(i>11&&i<14?'#FFA62B':'url(#bg)')+'" style="transition-delay:'+i*.05+'s"/>'}
var e=P[n-1];for(i=1;i<5;i++)g+='M20 '+(190-i*38)+'H390';
document.getElementById('cc').innerHTML='<defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1768F2" stop-opacity=".55"/><stop offset="1" stop-color="#1768F2" stop-opacity="0"/></linearGradient><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#67D9FF"/><stop offset="1" stop-color="#1768F2"/></linearGradient></defs><path d="'+g+'" stroke="#24406b" fill="none"/><path class="ar" d="'+d+'L390 190L20 190Z" fill="url(#ag)"/>'+b+'<path class="ln" pathLength="1" d="'+d+'"/><circle class="rg" cx="'+e[0]+'" cy="'+e[1]+'" r="8" fill="none" stroke="#FFA62B" stroke-width="2"/><circle cx="'+e[0]+'" cy="'+e[1]+'" r="4.5" fill="#FFA62B"/>';
document.querySelectorAll('.mb').forEach(function(m,k){for(var i=0;i<8;i++)m.insertAdjacentHTML('beforeend','<i style="height:'+(25+Math.abs(Math.sin(k*3+i*1.4))*75)+'%;transition:transform .8s ease '+i*.07+'s"></i>')});
var bd=document.getElementById('bd'),sc=bd.closest('.scene');io.observe(bd);
if(!RM&&matchMedia('(pointer:fine)').matches){sc.addEventListener('pointermove',function(ev){var r=sc.getBoundingClientRect();bd.style.transform='perspective(1300px) rotateX('+(8-((ev.clientY-r.top)/r.height-.5)*10)+'deg) rotateY('+(-14+((ev.clientX-r.left)/r.width-.5)*14)+'deg)'});sc.addEventListener('pointerleave',function(){bd.style.transform=''})}
var ko=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var el=en.target,v=+el.dataset.v,u=el.dataset.u||'',t0=performance.now();ko.unobserve(el);(function s(t){var p=RM?1:Math.min((t-t0)/1600,1);el.textContent=Math.round(v*(1-Math.pow(1-p,3))).toLocaleString('en-IN')+u;if(p<1)requestAnimationFrame(s)})(t0)})});
document.querySelectorAll('b[data-v]').forEach(function(el){ko.observe(el)})})();
/* v3 visuals */
var $=function(d){return document.getElementById(d)},lp=function(n,f){for(var s='',i=0;i<n;i++)s+=f(i);return s},PL=['#7C3AED','#F43F8E','#22D3EE','#FBBF24','#34D399'],AM='#FBBF24',MG='#F43F8E',CY='#22D3EE',VI='#A78BFA',GR='#34D399';
(function(){var V=[lp(16,function(i){return '<circle class="dr" cx="'+(14+Math.abs(Math.sin(i*7.3))*172)+'" cy="'+(14+Math.abs(Math.cos(i*3.1))*112)+'" r="'+(3+i%3)+'" fill="'+PL[i%5]+'" style="--x:'+Math.sin(i)*18+'px;--y:'+Math.cos(i*2)*16+'px;animation-delay:-'+i*.4+'s"/>'}),
lp(20,function(i){var a=i%5,b=i/5|0;return '<rect class="hc" x="'+(14+a*34)+'" y="'+(14+b*28)+'" width="28" height="20" rx="4" fill="'+PL[(a+b)%3]+'" style="animation-delay:-'+(a+b)*.3+'s"/>'}),
lp(7,function(i){var h=30+Math.abs(Math.sin(i*2.1))*60;return '<rect class="gb" x="'+(18+i*24)+'" y="'+(125-h)+'" width="14" height="'+h+'" rx="2" fill="'+PL[i%2?2:0]+'" style="animation-delay:-'+i*.3+'s"/>'})+'<path d="M25 100L60 80L90 90L130 55L175 38" fill="none" stroke="'+AM+'" stroke-width="3"/><rect class="sc" x="14" y="10" width="3" height="115" fill="#fff" opacity=".6"/>',
'<circle class="rg" cx="100" cy="55" r="26" fill="none" stroke="'+AM+'" stroke-width="2"/><circle cx="100" cy="55" r="22" fill="'+AM+'"/><path d="M89 55l8 8 15-17" stroke="#0B0820" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="50" y="100" width="100" height="6" rx="3" fill="#fff" opacity=".7"/><rect x="50" y="112" width="70" height="6" rx="3" fill="#fff" opacity=".45"/><rect x="50" y="124" width="85" height="6" rx="3" fill="#fff" opacity=".45"/>'],
E=[['Sources','scattered dots drifting in from many different sources.'],['Structured data','loose data snapping into an organised, lit-up table.'],['Analysis','bars rise and fall while a scan line tests the trends.'],['Insights','a pulsing target and a short report: the finding you can act on.']];
$('stv').innerHTML=E.map(function(e,k){return '<div class="st"><svg viewBox="0 0 200 140" aria-hidden="true">'+V[k]+'</svg><b>'+(k+1)+'. '+e[0]+'</b><p class="cap2">Visual: '+e[1]+'</p></div>'}).join('');
var cs=document.querySelectorAll('.st');cs.forEach(function(c,k){c.onclick=function(){go(k)}});var g0=go;go=function(k){g0(k);cs.forEach(function(c,j){c.classList.toggle('on',j===k)})};go(0)})();
/* services */
(function(){var F=function(d,c,w){return '<path d="'+d+'" fill="none" stroke="'+c+'" stroke-width="'+w+'" stroke-linecap="round"/>'},tr='M27 60L49 48L71 56L93 34L115 40L137 22L159 28L181 12',rd='M12 72C50 72 50 28 90 42S135 78 176 24',
SV={'Market Intelligence':['<g fill="none" stroke="'+CY+'" opacity=".4"><circle cx="100" cy="45" r="38"/><circle cx="100" cy="45" r="24"/><circle cx="100" cy="45" r="10"/></g><path class="sw" d="M100 45h38A38 38 0 0 0 126 18z" fill="'+CY+'" opacity=".4"/><circle class="pl" cx="126" cy="32" r="3.5" fill="'+AM+'"/><circle class="pl" cx="78" cy="62" r="3.5" fill="'+MG+'"/><circle class="pl" cx="112" cy="68" r="3.5" fill="'+GR+'"/>','a radar sweeping a market and flagging opportunity blips.'],
'Company Intelligence':['<path class="flow2" d="M100 45L40 20M100 45L50 72M100 45L160 18M100 45L158 70M100 45L100 8" stroke="'+CY+'" stroke-width="2" fill="none"/><circle cx="100" cy="45" r="11" fill="'+VI+'"/><circle class="pl" cx="40" cy="20" r="6" fill="'+MG+'"/><circle class="pl" cx="50" cy="72" r="6" fill="'+AM+'" style="animation-delay:-.5s"/><circle class="pl" cx="160" cy="18" r="6" fill="'+GR+'" style="animation-delay:-1s"/><circle class="pl" cx="158" cy="70" r="6" fill="'+CY+'" style="animation-delay:-1.5s"/><circle class="pl" cx="100" cy="8" r="5" fill="'+AM+'"/>','a company profile at the centre with live business signals linking to it.'],
'Economic & Sector Research':[lp(24,function(i){var a=i%8,b=i/8|0;return '<rect class="hc" x="'+(22+a*20)+'" y="'+(8+b*26)+'" width="16" height="20" rx="3" fill="'+[VI,MG,CY,AM][(a*3+b*5)%4]+'" style="animation-delay:-'+(a+b)*.3+'s"/>'}),'a regional heat-map where sectors and regions light up as indicators change.'],
'Analytics & Dashboards':[lp(8,function(i){var h=20+Math.abs(Math.sin(i*1.9))*45;return '<rect class="gb" x="'+(20+i*22)+'" y="'+(82-h)+'" width="14" height="'+h+'" rx="2" fill="'+CY+'" style="animation-delay:-'+i*.3+'s"/>'})+F(tr,AM,2).replace('/>',' opacity=".35"/>')+'<path class="flow2" d="'+tr+'" fill="none" stroke="'+AM+'" stroke-width="3"/>','live bars and a trend line, like a dashboard updating itself.'],
'Government Research & Evaluation':['<path d="M40 30L100 8L160 30z" fill="'+VI+'"/><g fill="#fff" opacity=".85">'+lp(4,function(i){return '<rect x="'+(52+i*30)+'" y="34" width="14" height="32" rx="2"/>'})+'</g><rect x="36" y="68" width="128" height="8" rx="2" fill="'+VI+'"/><circle class="pl" cx="100" cy="19" r="4" fill="'+AM+'"/><g class="pl"><circle cx="172" cy="64" r="12" fill="'+GR+'"/><path d="M166 64l4 4 8-9" stroke="#0B0820" stroke-width="3" fill="none" stroke-linecap="round"/></g>','a public institution with a pulsing approval tick: evaluated and verified.'],
'Strategic Advisory & Roadmaps':[F(rd,CY,8).replace('/>',' opacity=".35"/>')+'<path class="flow2" d="'+rd+'" fill="none" stroke="#fff" stroke-width="3"/><g class="bob"><path d="M176 24V4l16 6-16 6" fill="'+MG+'" stroke="'+MG+'" stroke-width="2"/></g>','a winding path with glowing steps leading to a goal flag.']};
document.querySelectorAll('.card h3').forEach(function(h){var v=SV[h.textContent.trim()];if(!v)return;var c=h.closest('.card');c.insertAdjacentHTML('afterbegin','<div class="sv"><svg viewBox="0 0 200 90" aria-hidden="true">'+v[0]+'</svg></div>');c.insertAdjacentHTML('beforeend','<p class="cap2">Visual: '+v[1]+'</p>')})})();
/* pathways */
(function(){var T=['Research','Competitors','Opportunities','Priorities','Action plan'],U=['Question','Data','Analysis','Findings','Recommend','Monitor'],tp='M86 150C150 150 170 70 250 70H690C750 70 770 150 774 150',bt='M86 150C150 150 170 230 250 230H690C750 230 770 150 774 150',tx=function(x,y,t,c,z){return '<text x="'+x+'" y="'+y+'" text-anchor="middle" fill="'+c+'" font-size="'+z+'" font-weight="600" font-family="Inter,sans-serif">'+t+'</text>'},
S='<path id="pt" d="'+tp+'" fill="none" stroke="'+MG+'" stroke-opacity=".3" stroke-width="16" stroke-linecap="round"/><path class="flow2" d="'+tp+'" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path id="pb" d="'+bt+'" fill="none" stroke="'+CY+'" stroke-opacity=".3" stroke-width="16" stroke-linecap="round"/><path class="flow2" d="'+bt+'" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>';
T.forEach(function(t,i){var x=270+i*100;S+='<circle cx="'+x+'" cy="70" r="15" fill="'+MG+'"/>'+tx(x,75,i+1,'#fff',13)+tx(x,46,t,'#fff',12)});
U.forEach(function(t,i){var x=250+i*84;S+='<circle cx="'+x+'" cy="230" r="15" fill="'+CY+'"/>'+tx(x,235,i+1,'#0B0820',13)+tx(x,266,t,'#fff',12)});
S+=tx(250,22,'PRIVATE SECTOR',MG,13)+tx(250,292,'GOVERNMENT &amp; PUBLIC SECTOR',CY,13)+'<circle cx="60" cy="150" r="30" fill="#7C3AED"/>'+tx(60,154,'Evidence','#fff',11)+'<circle cx="800" cy="150" r="34" fill="'+AM+'"/>'+tx(800,146,'Decision','#0B0820',12)+tx(800,160,'+ plan','#0B0820',12);
if(!RM)[['pt',7,0],['pb',9,3],['pt',7,3.5],['pb',9,7.5]].forEach(function(d){S+='<circle r="6" fill="#fff"><animateMotion dur="'+d[1]+'s" begin="-'+d[2]+'s" repeatCount="indefinite"><mpath href="#'+d[0]+'"/></animateMotion></circle>'});
$('pwv').innerHTML=S})();
/* servers */
(function(){var S='',R3=[[95,230,'#7C3AED','Ingest'],[230,280,'#F43F8E','Process'],[365,230,'#22D3EE','Store']],i;
function bx(X,Y,c){return '<path d="M'+X+' '+Y+'l48.7 28-48.7 28-48.7-28z" fill="'+c+'"/><path d="M'+(X-48.7)+' '+(Y+28)+'l48.7 28v14l-48.7-28z" fill="'+c+'" style="filter:brightness(.55)"/><path d="M'+(X+48.7)+' '+(Y+28)+'l-48.7 28v14l48.7-28z" fill="'+c+'" style="filter:brightness(.8)"/>'}
R3.forEach(function(r,n){S+='<ellipse cx="'+r[0]+'" cy="'+(r[1]+60)+'" rx="85" ry="28" fill="'+r[2]+'" opacity=".18"/>';for(var k=0;k<4;k++){var Y=r[1]-k*20;S+=bx(r[0],Y,r[2])+'<circle class="led" cx="'+(r[0]-19.5)+'" cy="'+(Y+52)+'" r="2.2" fill="'+GR+'" style="animation-delay:-'+(n+k*.37)+'s"/><circle class="led" cx="'+(r[0]-9.7)+'" cy="'+(Y+57)+'" r="2.2" fill="'+AM+'" style="animation-delay:-'+(k*.6+n*.2)+'s"/>'}
S+='<text x="'+r[0]+'" y="'+(r[1]+102)+'" text-anchor="middle" fill="#fff" font-size="14" font-weight="600" font-family="Inter,sans-serif">'+r[3]+'</text>'});
S+='<path d="M95 150v20M230 200v20M365 150v20" stroke="'+AM+'" stroke-dasharray="3 4" opacity=".6"/><path d="M95 150L230 200L365 150" fill="none" stroke="'+AM+'" stroke-opacity=".35" stroke-width="2"/><path class="flow2" d="M95 150L230 200L365 150" fill="none" stroke="'+AM+'" stroke-width="3"/>';
if(!RM)for(i=0;i<3;i++)S+='<path d="M0-7l7 4v8l-7 4-7-4v-8z" fill="'+GR+'"><animateMotion dur="6s" begin="-'+i*2+'s" repeatCount="indefinite"><mpath href="#pp"/></animateMotion></path>';
S+='<path id="pp" d="M95 150L230 200L365 150" fill="none"/>';$('srv').innerHTML=S})();
/* canvas helper */
function CV(id,dr){var c=$(id),x=c.getContext('2d'),D=Math.min(devicePixelRatio||1,2),o={W:0,H:0},vis=1,raf;
function rs(){var r=c.getBoundingClientRect();o.W=r.width;o.H=r.height;c.width=o.W*D;c.height=o.H*D;x.setTransform(D,0,0,D,0,0);if(RM)dr(x,o,0)}
function run(t){if(!vis)return;x.clearRect(0,0,o.W,o.H);dr(x,o,t);raf=requestAnimationFrame(run)}
addEventListener('resize',rs);rs();if(!RM){new IntersectionObserver(function(e){vis=e[0].isIntersecting;cancelAnimationFrame(raf);if(vis)run(performance.now())}).observe(c);run(0)}}
function dot(x,px,py,r,f){x.fillStyle=f;x.beginPath();x.arc(px,py,r,0,6.283);x.fill()}
/* hero: spinning ring sphere */
CV('sp',function(x,o,t){var W=o.W,H=o.H,R=Math.min(W,H)*.4,cx=W/2,cy=H/2,N=34,s=t/1000,k,j,g=x.createRadialGradient(cx,cy,0,cx,cy,R*1.2);g.addColorStop(0,'rgba(124,58,237,.3)');g.addColorStop(1,'rgba(124,58,237,0)');x.fillStyle=g;x.fillRect(0,0,W,H);x.lineWidth=1.2;
for(k=0;k<N;k++){var ph=-1.45+k*2.9/(N-1),cr=Math.cos(ph),sy=Math.sin(ph),sp=(k%2?1:-1)*(.25+(k%5)*.08),P=[];
for(j=0;j<72;j++){var th=j*.0873+s*sp,w=1+.07*Math.sin(3*th+s+k),X=cr*w*Math.cos(th),Z=cr*w*Math.sin(th),Y=sy+.04*Math.sin(2*th+s*1.3+k),Y2=Y*.94-Z*.34,Z2=Y*.34+Z*.94,f=3/(3-Z2);P.push([cx+X*R*f,cy-Y2*R*f,Z2])}
x.strokeStyle=['#fff','#22D3EE','#FBBF24','#34D399','#A78BFA','#F43F8E'][k%6];
for(var q=0;q<2;q++){x.globalAlpha=q?.9:.2;x.beginPath();for(j=0;j<72;j++){var a=P[j],b=P[(j+1)%72];if((a[2]+b[2]>0)==!!q){x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1])}}x.stroke()}}
x.globalAlpha=1});
/* globe: glowing glass earth */
(function(){var LP=[[[-17,15],[-10,28],[-5,36],[10,37],[20,32],[32,31],[34,28],[43,12],[51,12],[45,0],[40,-10],[35,-24],[27,-34],[18,-34],[12,-18],[9,-1],[8,4],[-8,4]],
[[-9,37],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[9,57],[12,56],[18,55],[24,59],[30,60],[22,65],[25,70],[40,68],[60,69],[80,73],[105,77],[130,72],[160,70],[179,66],[178,62],[160,58],[155,52],[142,52],[140,45],[130,42],[127,36],[122,40],[121,32],[120,25],[108,21],[106,11],[100,13],[101,3],[98,8],[93,19],[88,22],[80,15],[78,8],[73,18],[67,24],[57,25],[56,27],[50,30],[48,28],[52,24],[56,24],[59,22],[52,16],[44,13],[38,22],[35,28],[34,32],[36,36],[28,37],[26,40],[23,38],[19,41],[14,45],[12,44],[16,41],[8,44],[3,43],[-1,37]],
[[-168,66],[-160,71],[-140,70],[-120,70],[-95,72],[-82,68],[-62,60],[-56,52],[-66,45],[-70,42],[-76,35],[-81,30],[-80,25],[-83,29],[-90,30],[-97,27],[-97,20],[-88,16],[-83,10],[-79,9],[-86,12],[-92,15],[-105,20],[-110,24],[-115,30],[-123,38],[-124,48],[-135,58],[-150,60],[-165,60]],
[[-80,9],[-72,12],[-60,10],[-50,0],[-35,-6],[-39,-15],[-48,-26],[-58,-37],[-65,-42],[-68,-52],[-74,-50],[-73,-38],[-71,-20],[-81,-6],[-80,0],[-77,8]],
[[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[141,-38],[130,-32],[115,-34]]],
CT=[[28.6,77.2],[19.1,72.9],[51.5,-.1],[25.2,55.3],[1.35,103.8],[40.7,-74],[35.7,139.7],[-33.9,151.2],[50.1,8.7],[-23.5,-46.6]],G=[],GT=[],ND=[],LK=[],AR=[],a=-1.2,R=100,W,H,n=0,la,lo,i,j;
function V3(la,lo){la*=.01745;lo*=.01745;return[Math.cos(la)*Math.sin(lo),Math.sin(la),Math.cos(la)*Math.cos(lo)]}
function pip(lo,la,P){for(var i=0,j=P.length-1,c=0;i<P.length;j=i++){var a=P[i],b=P[j];if((a[1]>la)!=(b[1]>la)&&lo<(b[0]-a[0])*(la-a[1])/(b[1]-a[1])+a[0])c=!c}return c}
function rt(p){var ca=Math.cos(a),sa=Math.sin(a),X=p[0]*ca+p[2]*sa,Z=-p[0]*sa+p[2]*ca,Y=p[1]*.93-Z*.37;Z=p[1]*.37+Z*.93;var f=2.8/(2.8-Z);return[W/2+X*R*f,H/2-Y*R*f,Z]}
for(la=-80;la<=80;la+=3){var st=3.2/Math.max(.25,Math.cos(la*.01745));for(lo=-180;lo<180;lo+=st){if(LP.some(function(P){return pip(lo,la,P)})){var p=V3(la,lo);n++;(n%6?G:GT).push(p);if(n%17===0)ND.push(p)}}}
for(i=0;i<ND.length;i++)for(j=i+1;j<ND.length;j++)if(Math.hypot(ND[i][0]-ND[j][0],ND[i][1]-ND[j][1],ND[i][2]-ND[j][2])<.42)LK.push([i,j]);
var HB=V3(28.6,77.2);
CT.slice(1).forEach(function(q){var A=V3(q[0],q[1]),w=Math.acos(A[0]*HB[0]+A[1]*HB[1]+A[2]*HB[2]),s=Math.sin(w),P=[];for(var t=0;t<=24;t++){var u=t/24,k1=Math.sin((1-u)*w)/s,k2=Math.sin(u*w)/s,r=1+.3*Math.sin(Math.PI*u);P.push([(A[0]*k1+HB[0]*k2)*r,(A[1]*k1+HB[1]*k2)*r,(A[2]*k1+HB[2]*k2)*r])}AR.push(P)});
CV('gl',function(x,o,t){W=o.W;H=o.H;R=Math.min(W,H)*.33;a+=.0025;var cx=W/2,cy=H/2,g,NP=ND.map(rt);
x.fillStyle='rgba(34,211,238,.14)';x.beginPath();x.ellipse(cx,cy+R*1.12,R*.8,R*.1,0,0,6.283);x.fill();
g=x.createRadialGradient(cx-R*.3,cy-R*.3,R*.1,cx,cy,R);g.addColorStop(0,'rgba(24,70,140,.8)');g.addColorStop(1,'rgba(5,15,45,.93)');dot(x,cx,cy,R,g);
x.fillStyle='rgba(45,212,191,.8)';G.forEach(function(p){var q=rt(p);if(q[2]>.08)x.fillRect(q[0],q[1],1.9,1.9)});
x.fillStyle='rgba(251,191,36,.95)';GT.forEach(function(p){var q=rt(p);if(q[2]>.08)x.fillRect(q[0],q[1],2.3,2.3)});
x.strokeStyle='rgba(140,235,255,.45)';x.lineWidth=.8;x.beginPath();LK.forEach(function(l){var A=NP[l[0]],B=NP[l[1]];if(A[2]>.05&&B[2]>.05){x.moveTo(A[0],A[1]);x.lineTo(B[0],B[1])}});x.stroke();
NP.forEach(function(q,k){if(q[2]>.05){if(k%3===0)dot(x,q[0],q[1],5+Math.sin(t/400+k)*2,'rgba(255,200,80,.25)');dot(x,q[0],q[1],2,'rgba(255,225,140,.95)')}});
g=x.createRadialGradient(cx,cy,R*.78,cx,cy,R*1.04);g.addColorStop(0,'rgba(34,211,238,0)');g.addColorStop(.8,'rgba(34,211,238,.28)');g.addColorStop(1,'rgba(200,245,255,.9)');dot(x,cx,cy,R*1.04,g);
x.lineWidth=3;x.strokeStyle='rgba(255,255,255,.55)';x.beginPath();x.arc(cx,cy,R*.97,3.5,4.4);x.stroke();
AR.forEach(function(P,k){var Q=P.map(rt);x.lineWidth=1.4;for(var m=1;m<Q.length;m++){var z=(Q[m][2]+Q[m-1][2])/2;if(z<-.15)continue;x.strokeStyle='rgba(34,211,238,'+Math.min(.85,.25+z*.7)+')';x.beginPath();x.moveTo(Q[m-1][0],Q[m-1][1]);x.lineTo(Q[m][0],Q[m][1]);x.stroke()}
var u=((t/(3200+k*260))+k*.17)%1,j=u*24|0,f=u*24-j,A0=Q[j],B0=Q[Math.min(j+1,24)];if(A0[2]>-.15){var px=A0[0]+(B0[0]-A0[0])*f,py=A0[1]+(B0[1]-A0[1])*f;dot(x,px,py,7,'rgba(251,191,36,.3)');dot(x,px,py,3.2,AM)}});
var h=rt(HB);if(h[2]>-.1){dot(x,h[0],h[1],10+Math.sin(t/300)*3,'rgba(244,63,142,.35)');dot(x,h[0],h[1],5,MG)}})})();
/* funnel into dashboard */
(function(){var FS=[],i;for(i=0;i<170;i++)FS.push([Math.abs(Math.sin(i*12.9)),Math.abs(Math.sin(i*78.2)),Math.abs(Math.sin(i*3.7)),i%3===0]);
CV('fn',function(x,o,t){var W=o.W,H=o.H,cx=W/2,ty=H*.6,s=Math.min(W/760,1.2),k,g=x.createRadialGradient(cx,ty,0,cx,ty,W*.4);g.addColorStop(0,'rgba(34,211,238,.35)');g.addColorStop(1,'rgba(34,211,238,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
x.save();x.translate(cx,H*.72);x.transform(.87,.5,-.87,.5,0,0);x.scale(s*1.05,s*1.05);x.translate(-100,-60);
x.fillStyle='rgba(40,110,190,.35)';x.fillRect(0,0,200,120);x.strokeStyle='#22D3EE';x.lineWidth=2;x.strokeRect(0,0,200,120);
x.beginPath();x.moveTo(10,90);[[30,60],[48,74],[66,40],[84,52],[104,20]].forEach(function(p){x.lineTo(p[0],p[1])});x.strokeStyle='#67e8f9';x.lineWidth=3;x.stroke();
for(k=0;k<6;k++){var h=14+k*9+Math.sin(t/500+k)*8;x.fillStyle=k%2?'#22D3EE':'#fb923c';x.fillRect(124+k*11,104-h,8,h)}
x.lineWidth=9;x.strokeStyle='#22D3EE';x.beginPath();x.arc(50,92,16,0,3.8);x.stroke();x.strokeStyle='#fb923c';x.beginPath();x.arc(50,92,16,3.8,6.28);x.stroke();x.restore();
FS.forEach(function(p){var u=(p[0]+t*.00018*(.6+p[1]*.8))%1,sx=W*(.04+.92*p[2]),sy=H*(.03+.3*p[1]),X=sx+(cx-sx)*Math.pow(u,1.5)+Math.sin(u*8+p[0]*9)*40*(1-u)*s,Y=sy+(ty-sy)*Math.pow(u,1.15),z=(7+p[1]*9)*(1-u*.75)*s;
x.save();x.translate(X,Y);x.rotate(p[0]*6+t*.002*(1+p[1]));x.fillStyle=p[3]?'rgba(251,146,60,.9)':'rgba(96,200,255,.85)';x.fillRect(-z/2,-z/3,z,z*.66);x.restore()})})})();
/* HUD network ring */
(function(){var RN=[],RK=[],i,j;for(i=0;i<150;i++){var th=i*2.39996,r=.55+.45*Math.abs(Math.sin(i*5.1));RN.push([r*Math.cos(th),r*Math.sin(th),Math.sin(i*3)*.1])}
for(i=0;i<150;i++)for(j=i+1;j<150;j++)if(Math.hypot(RN[i][0]-RN[j][0],RN[i][1]-RN[j][1])<.3)RK.push([i,j]);
CV('rg2',function(x,o,t){var W=o.W,H=o.H,R=Math.min(W,H)*.38,cx=W/2,cy=H/2,sp=t/4000,c=Math.cos(sp),s=Math.sin(sp),w=.55*Math.sin(t/3000),cw=Math.cos(w),sw=Math.sin(w),
Q=RN.map(function(n){var X=n[0]*c-n[1]*s,Y=n[0]*s+n[1]*c,Z=n[2],X2=X*cw+Z*sw;Z=-X*sw+Z*cw;var f=3/(3-Z);return[cx+X2*R*f,cy-Y*R*f]});
x.lineWidth=2;x.strokeStyle='rgba(34,211,238,.6)';x.beginPath();x.ellipse(cx,cy,R*1.15*Math.abs(cw),R*1.15,0,0,6.283);x.stroke();
x.setLineDash([8,10]);x.lineDashOffset=-t/40;x.strokeStyle='rgba(167,139,250,.7)';x.beginPath();x.ellipse(cx,cy,R*1.28*Math.abs(cw),R*1.28,0,0,6.283);x.stroke();x.setLineDash([]);
x.lineWidth=4;x.strokeStyle='#FBBF24';x.beginPath();x.ellipse(cx,cy,R*1.2*Math.abs(cw),R*1.2,0,sp*3,sp*3+1.1);x.stroke();
x.lineWidth=.9;[0,1].forEach(function(m){x.strokeStyle=m?'rgba(34,211,238,.5)':'rgba(251,191,36,.5)';x.beginPath();RK.forEach(function(l,k){if(k%2===m){x.moveTo(Q[l[0]][0],Q[l[0]][1]);x.lineTo(Q[l[1]][0],Q[l[1]][1])}});x.stroke()});
Q.forEach(function(q,k){dot(x,q[0],q[1],2.6,k%2?'#22D3EE':'#FBBF24')})})})();
/* road to the target */
CV('rd2',function(x,o,t){var W=o.W,H=o.H,hy=H*.4,cx=W/2,s=t/1000,d,k,g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0B0820');g.addColorStop(.4,'#1d1458');g.addColorStop(1,'#0B0820');x.fillStyle=g;x.fillRect(0,0,W,H);
g=x.createRadialGradient(cx,hy,0,cx,hy,W*.35);g.addColorStop(0,'rgba(52,211,153,.55)');g.addColorStop(1,'rgba(52,211,153,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
function C(d){return cx+Math.sin(d*4+.7)*W*.17*d}function Wd(d){return 6+W*.36*Math.pow(d,1.6)}function Y(d){return hy+(H-hy)*Math.pow(d,1.6)}
x.strokeStyle='#34D399';x.lineWidth=2.5;x.beginPath();for(k=0;k<=40;k++){var u=k/40;if(u>(s*.15)%1.3)break;x.lineTo(W*(.12+.5*u),hy*.9-hy*.7*u*u)}x.stroke();
for(d=0;d<1;d+=.025){var e=d+.025;x.fillStyle='rgba('+(70+d*90|0)+','+(80+d*90|0)+','+(110+d*80|0)+',.95)';x.beginPath();x.moveTo(C(d)-Wd(d),Y(d));x.lineTo(C(d)+Wd(d),Y(d));x.lineTo(C(e)+Wd(e),Y(e));x.lineTo(C(e)-Wd(e),Y(e));x.fill()}
x.lineWidth=2;x.strokeStyle='#34D399';[-1,1].forEach(function(m){x.beginPath();for(d=0;d<=1;d+=.025)x.lineTo(C(d)+m*Wd(d),Y(d));x.stroke()});
for(k=0;k<7;k++){d=(s*.07+k/7)%1;if(d<.05)continue;var ox=C(d)-Wd(d)*.85,oy=Y(d)-6-30*d,r=2+9*d;x.strokeStyle='rgba(255,255,255,.5)';x.lineWidth=1;x.beginPath();x.moveTo(ox,oy);x.lineTo(ox,Y(d));x.stroke();dot(x,ox,oy,r*2.2,'rgba(255,255,255,.2)');dot(x,ox,oy,r,'#fff')}
for(k=0;k<3;k++){x.strokeStyle='rgba(255,255,255,'+(.6-k*.15)+')';x.lineWidth=2;x.beginPath();x.arc(cx,hy-10,(10+k*14)*(1+.08*Math.sin(s*2+k)),0,6.283);x.stroke()}
dot(x,cx,hy-10,9,'rgba(255,255,255,.35)');dot(x,cx,hy-10,5,'#fff');
x.fillStyle='rgba(11,8,32,.8)';x.strokeStyle='#34D399';x.lineWidth=3;x.beginPath();x.ellipse(W*.12,H*.88,W*.07,W*.02,0,0,6.283);x.fill();x.stroke()});
/* glass panels + crystal */
(function(){var f=1.618,IV=[[0,1,f],[0,-1,f],[0,1,-f],[0,-1,-f],[1,f,0],[-1,f,0],[1,-f,0],[-1,-f,0],[f,0,1],[-f,0,1],[f,0,-1],[-f,0,-1]],IE=[],i,j,PN=[[.16,.4,.2,.5],[.4,.22,.18,.4],[.66,.45,.2,.46],[.84,.2,.14,.3],[.3,.74,.16,.3]],BP=[];
for(i=0;i<12;i++)for(j=i+1;j<12;j++)if(Math.hypot(IV[i][0]-IV[j][0],IV[i][1]-IV[j][1],IV[i][2]-IV[j][2])<2.1)IE.push([i,j]);
for(i=0;i<90;i++)BP.push([Math.abs(Math.sin(i*9.1)),Math.abs(Math.sin(i*4.3)),Math.abs(Math.sin(i*1.7))]);
CV('gp',function(x,o,t){var W=o.W,H=o.H,cx=W/2,cy=H/2,g;
function pn(p,k){var w=W*p[2],h=H*p[3],X=W*p[0]-w/2,Y=H*p[1]-h/2+Math.sin(t/1400+k*1.7)*7;x.fillStyle='rgba(255,255,255,.12)';x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=1;x.fillRect(X,Y,w,h);x.strokeRect(X,Y,w,h);x.fillStyle='rgba(255,255,255,.55)';x.fillRect(X+8,Y+8,w*.5,5);
for(var m=0;m<3;m++)x.fillRect(X+8,Y+22+m*9,w*(.8-m*.15),3);for(m=0;m<5;m++){x.fillStyle=m%2?'#22D3EE':'#FBBF24';var bh=8+Math.abs(Math.sin(t/600+m+k))*(h*.25);x.fillRect(X+10+m*9,Y+h-8-bh,6,bh)}}
PN.slice(0,3).forEach(pn);
g=x.createLinearGradient(0,0,W,0);g.addColorStop(0,'rgba(34,211,238,0)');g.addColorStop(.5,'rgba(255,255,255,.95)');g.addColorStop(1,'rgba(34,211,238,0)');x.fillStyle=g;x.fillRect(0,cy-1.5,W,3);
BP.forEach(function(p){var X=(p[0]*W+t*.04*(.4+p[1]))%W,Y=cy+Math.sin(p[0]*90+t/700)*(6+p[2]*22);dot(x,X,Y,.8+p[2]*1.8,['#fff','#22D3EE','#fb923c'][(p[1]*3)|0])});
var R=H*.3,ay=t/2500,ax=.5,cA=Math.cos(ay),sA=Math.sin(ay),cB=Math.cos(ax),sB=Math.sin(ax),Q=IV.map(function(v){var X=v[0]*cA+v[2]*sA,Z=-v[0]*sA+v[2]*cA,Y=v[1]*cB-Z*sB;Z=v[1]*sB+Z*cB;var k=3.4/(3.4-Z*.5);return[cx+X*R*.5*k,cy-Y*R*.5*k]});
g=x.createRadialGradient(cx,cy,0,cx,cy,R*.9);g.addColorStop(0,'rgba(120,190,255,.35)');g.addColorStop(1,'rgba(120,190,255,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
x.strokeStyle='rgba(210,240,255,.9)';x.lineWidth=1.3;x.beginPath();IE.forEach(function(e){x.moveTo(Q[e[0]][0],Q[e[0]][1]);x.lineTo(Q[e[1]][0],Q[e[1]][1])});x.stroke();Q.forEach(function(q){dot(x,q[0],q[1],2.4,'#fff')});
PN.slice(3).forEach(function(p,k){pn(p,k+3)})})})();
/* form (front-end demo only) */
document.getElementById('f').onsubmit=function(e){e.preventDefault();var f=e.target,ok=document.getElementById('ok');
if(!f.n.value.trim()||!/^\S+@\S+\.\S+$/.test(f.e.value)||!f.d.value.trim()){ok.textContent='Please complete name, a valid work email and a project description.';return}
ok.textContent='Thank you. This prototype form is not yet connected to a backend, so nothing was sent.';f.reset()};

