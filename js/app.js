/* inicialização de tema acessível (claro/escuro/alto contraste) + aria-live */
(function(){
  const root = document.documentElement;
  const btnDark = document.getElementById('toggle-dark');
  const btnHC = document.getElementById('toggle-contrast');
  const live = document.getElementById('a11y-live');

  function announce(msg){
    if(!live) return;
    live.textContent = '';
    setTimeout(()=> live.textContent = msg, 40);
  }

  function setTheme(val){ // '', 'dark', 'hc'
    if(val){
      root.setAttribute('data-theme', val);
      localStorage.setItem('theme', val);
    }else{
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    }
    if(btnDark){
      const isDark = val === 'dark';
      btnDark.setAttribute('aria-pressed', String(isDark));
      btnDark.textContent = isDark ? 'Modo claro' : 'Modo escuro';
    }
    if(btnHC){
      const isHC = val === 'hc';
      btnHC.setAttribute('aria-pressed', String(isHC));
      btnHC.textContent = isHC ? 'Desativar alto contraste' : 'Alto contraste';
    }
  }

  const saved = localStorage.getItem('theme');
  setTheme(saved === 'dark' || saved === 'hc' ? saved : '');

  btnDark?.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme');
    if(current === 'dark'){ setTheme(''); announce('Modo claro ativado'); }
    else { setTheme('dark'); announce('Modo escuro ativado'); }
  });

  btnHC?.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme');
    if(current === 'hc'){ setTheme(''); announce('Alto contraste desativado'); }
    else { setTheme('hc'); announce('Alto contraste ativado'); }
  });
})();

/* acessibilidade do menu: teclado, estados ARIA e comportamento mobile */
(function(){
  const nav = document.getElementById('menu');
  const menuBtn = document.getElementById('menu-toggle');
  if(!nav) return;

  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
  }

  const ddLi = nav.querySelector('.has-dropdown');
  if(!ddLi) return;

  const trigger = ddLi.querySelector(':scope > a');
  const submenu = ddLi.querySelector(':scope > .dropdown');
  const links = submenu ? submenu.querySelectorAll('a') : [];

  function open(){
    ddLi.classList.add('open');
    trigger?.setAttribute('aria-expanded','true');
  }
  function close(){
    ddLi.classList.remove('open');
    trigger?.setAttribute('aria-expanded','false');
  }

  trigger?.addEventListener('mouseenter', open);
  ddLi.addEventListener('mouseleave', close);
  trigger?.addEventListener('focus', open);

  trigger?.addEventListener('keydown', (e)=>{
    const k = e.key;
    if(k === 'Enter' || k === ' ' || k === 'ArrowDown'){
      e.preventDefault(); open(); links[0]?.focus();
    }
    if(k === 'Escape'){ e.preventDefault(); close(); trigger.focus(); }
  });

  submenu?.addEventListener('keydown', (e)=>{
    const list = Array.from(links);
    const i = list.indexOf(document.activeElement);
    if(e.key === 'ArrowDown'){ e.preventDefault(); (list[i+1] || list[0]).focus(); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); (list[i-1] || list[list.length-1]).focus(); }
    if(e.key === 'Home'){ e.preventDefault(); list[0]?.focus(); }
    if(e.key === 'End'){ e.preventDefault(); list[list.length-1]?.focus(); }
    if(e.key === 'Escape'){ e.preventDefault(); close(); trigger?.focus(); }
  });

  document.addEventListener('click', (e)=>{
    if(!ddLi.contains(e.target)) close();
  });

  // no mobile, o clique em "Projetos" só abre/fecha o submenu
  trigger?.addEventListener('click', (e)=>{
    if(window.innerWidth <= 768){
      e.preventDefault();
      ddLi.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(ddLi.classList.contains('open')));
    }
  });
})();

/* SPA: resolve na carga e quando o hash muda */
(function(){
  function boot(){
    if(window.router && typeof window.router.resolve === 'function'){
      window.router.resolve();
    }
  }
  window.addEventListener('load', boot);
  window.addEventListener('hashchange', ()=> window.router && window.router.resolve());
})();

/* após cada renderização da SPA, leva o foco para o <main> (boa prática WCAG) */
(function(){
  const main = document.getElementById('conteudo-principal');
  window.addEventListener('spa:navigated', ()=>{ if(main) main.focus(); });
})();
