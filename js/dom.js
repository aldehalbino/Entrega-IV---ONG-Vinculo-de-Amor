// atalhos de DOM e utilidades simples
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const on = (el, ev, cb, opt) => el && el.addEventListener(ev, cb, opt);

// render padrão da SPA (substitui conteúdo e foca na região principal)
export function render(target, html) {
  if (!target) return;
  target.innerHTML = html;
  target.focus?.();
}

// marca item ativo no menu de navegação
export function setActiveNav(hash) {
  $$('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === hash));
}

// toast bem simples
export function showToast(msg, timeout = 2200) {
  let el = $('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.hidden = false;
  setTimeout(() => (el.hidden = true), timeout);
}
