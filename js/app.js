// ponto de entrada da SPA
// roteador + menu mobile/submenu com comportamento correto

import { $, $$, on } from './dom.js';
import { startRouter } from './router.js';

// região principal
const root = $('#app');
startRouter(root);

// --- MENU HAMBÚRGUER ---
const toggle = $('#menu-toggle');
const menu = document.querySelector('nav ul.menu') || document.querySelector('nav ul');

if (toggle && menu) {
  on(toggle, 'click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // fecha o menu depois de navegar (mobile)
  $$('.menu a').forEach(a => {
    on(a, 'click', () => {
      if (window.innerWidth <= 768 && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // se voltar ao desktop, zera estado
  on(window, 'resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- SUBMENU (mobile) ---
// 1º toque em "Projetos" abre submenu; 2º toque navega para #/projetos
const projItem = document.querySelector('li.has-dropdown');
const projLink = projItem?.querySelector(':scope > a');

if (projItem && projLink) {
  on(projLink, 'click', (e) => {
    if (window.innerWidth <= 768) {
      const isOpen = projItem.classList.contains('open');
      if (!isOpen) {
        e.preventDefault();            // primeiro toque só abre
        projItem.classList.add('open');
      } // se já estava aberto, deixa navegar (sem preventDefault)
    }
  });

  // ao trocar rota, fecho o submenu no mobile
  on(window, 'hashchange', () => {
    if (window.innerWidth <= 768) projItem.classList.remove('open');
  });
}

// Tema acessível: claro/escuro/alto contraste
(function(){
  const root = document.documentElement;
  const btnDark = document.getElementById('toggle-dark');
  const btnHC = document.getElementById('toggle-contrast');

  // restaura tema salvo
  const saved = localStorage.getItem('theme'); // 'dark' | 'hc' | 'light' | null
  if(saved === 'dark' || saved === 'hc'){
    root.setAttribute('data-theme', saved);
    if(btnDark) btnDark.setAttribute('aria-pressed', String(saved==='dark'));
    if(btnHC) btnHC.setAttribute('aria-pressed', String(saved==='hc'));
  }

  // alterna modo escuro
  if(btnDark){
    btnDark.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? '' : 'dark';
      if(next === 'dark'){ root.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); }
      else{ root.removeAttribute('data-theme'); localStorage.removeItem('theme'); }
      btnDark.setAttribute('aria-pressed', String(next==='dark'));
      if(btnHC){ btnHC.setAttribute('aria-pressed','false'); }
    });
  }

  // alterna alto contraste (prioriza sobre dark)
  if(btnHC){
    btnHC.addEventListener('click', ()=>{
      const isHC = root.getAttribute('data-theme') === 'hc';
      const next = isHC ? '' : 'hc';
      if(next === 'hc'){ root.setAttribute('data-theme','hc'); localStorage.setItem('theme','hc'); }
      else{ root.removeAttribute('data-theme'); localStorage.removeItem('theme'); }
      btnHC.setAttribute('aria-pressed', String(next==='hc'));
      if(btnDark){ btnDark.setAttribute('aria-pressed','false'); }
    });
  }
})();
