/* happ-wiki: оценка статьи + поделиться */
(function(){
  function goal(n){ try{ ym(document.body.dataset.ym||111734690,'reachGoal',n); }catch(e){} }
  var box=document.querySelector('.fb'); if(!box) return;
  var key='fb_'+location.pathname;
  var btns=box.querySelectorAll('.fb-btn'), thanks=box.querySelector('.fb-thanks');
  try{ var v=localStorage.getItem(key); if(v){ box.classList.add('fb-done'); thanks.textContent=(v==='yes'?'Спасибо, рады помочь':'Спасибо, доработаем'); } }catch(e){}
  btns.forEach(function(b){ b.addEventListener('click',function(){
    var v=b.dataset.v; try{ localStorage.setItem(key,v); }catch(e){}
    box.classList.add('fb-done'); thanks.textContent=(v==='yes'?'Спасибо, рады помочь':'Спасибо, доработаем'); goal(v==='yes'?'helpful_yes':'helpful_no');
  }); });
  var url=location.origin+location.pathname, title=document.title;
  var sh=box.querySelector('.fb-share'); if(!sh) return;
  sh.addEventListener('click',function(e){
    var a=e.target.closest('[data-share]'); if(!a) return;
    var t=a.dataset.share; goal('share_click');
    if(t==='copy'){ e.preventDefault(); try{ navigator.clipboard.writeText(url).then(function(){ a.textContent='Скопировано'; setTimeout(function(){a.textContent='Копировать ссылку'},1800); }); }catch(err){} return; }
    if(t==='native'){ e.preventDefault(); if(navigator.share){ navigator.share({title:title,url:url}).catch(function(){}); } return; }
  });
  if(navigator.share){ var n=sh.querySelector('[data-share="native"]'); if(n) n.hidden=false; }
})();
