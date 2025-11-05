// roteador simples por hash (#/rota)
// aqui eu troco a view dentro do <main id="app">

import { Home, Projetos, Resgate, Reabilitacao, NovoLar, Educacao, Cadastro } from './templates.js';
import { render, setActiveNav } from './dom.js';
import { mountCadastro } from './screens/cadastro.js';

// mapa de rotas -> template
const routes = {
  '/inicio': Home,
  '/projetos': Projetos,
  '/projetos/resgate': Resgate,
  '/projetos/reabilitacao': Reabilitacao,
  '/projetos/novo-lar': NovoLar,
  '/projetos/educacao': Educacao,
  '/cadastro': Cadastro,
};

// pega o caminho atual (sem o #)
function getPath() {
  const h = location.hash.replace('#', '');
  return h || '/inicio';
}

// inicializa o roteador
export function startRouter(root) {
  function onRoute() {
    const path = getPath();
    const View = routes[path] || Home;

    // renderiza a página
    render(root, View());

    // marca o item ativo do menu
    setActiveNav(`#${path}`);

    // hooks de telas específicas
    if (path === '/cadastro') mountCadastro();
  }

  window.addEventListener('hashchange', onRoute);
  onRoute(); // primeira carga
}
