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
