
(function(){
var K=window.KIT,da=localStorage.getItem('sacri-da')||'A',by={};K.forEach(function(x){by[x.id]=x});
function src(x){return x.src[x.commun?'G':da]||x.src.A||x.src.G}
function apply(){
 document.body.classList.remove('da-A','da-B');document.body.classList.add('da-'+da);
 document.querySelectorAll('.da button').forEach(function(b){b.setAttribute('aria-checked',b.dataset.da===da?'true':'false')});
 document.querySelectorAll('.card').forEach(function(c){var x=by[c.dataset.id],s=src(x);if(!s)return;var im=c.querySelector('img');im.src=s[0];
  c.classList.toggle('tall',s[3]>s[2]*1.15)});
}
document.querySelectorAll('.da button').forEach(function(b){b.addEventListener('click',function(){da=b.dataset.da;localStorage.setItem('sacri-da',da);apply()})});
var lb=document.querySelector('.lb'),li=lb.querySelector('img'),lt=lb.querySelector('.lb-cap b'),ll=lb.querySelector('.lb-cap span'),cur=0,last=null;
function ids(){return Array.prototype.map.call(document.querySelectorAll('.card'),function(c){return c.dataset.id})}
function show(i){var L=ids();cur=(i+L.length)%L.length;var x=by[L[cur]],s=src(x);li.src=s[1];li.alt=x.t;lt.textContent=x.t;
 ll.textContent=x.l+(x.commun?'':' Direction '+(da==='A'?'A, Atelier.':'B, Plein champ.'))}
function open(id){last=document.activeElement;show(ids().indexOf(id));lb.hidden=false;document.body.classList.add('lock');lb.querySelector('.lb-x').focus()}
function close(){lb.hidden=true;document.body.classList.remove('lock');if(last)last.focus()}
document.querySelectorAll('.card .ph').forEach(function(b){b.addEventListener('click',function(){open(b.closest('.card').dataset.id)})});
lb.querySelector('.lb-x').onclick=close;lb.querySelector('.lb-p').onclick=function(){show(cur-1)};lb.querySelector('.lb-n').onclick=function(){show(cur+1)};
lb.addEventListener('click',function(e){if(e.target===lb)close()});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
var sx=null;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1));sx=null});
var links=document.querySelectorAll('nav.cats a');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section.cat').forEach(function(s){io.observe(s)});
apply();
})();
