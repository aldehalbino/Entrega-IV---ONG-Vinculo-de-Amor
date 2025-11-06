/* roteador simples por hash (#/...) rendendo no #app */

// mapeamento das rotas para os templates (funções definidas em templates.js)
const Routes = {
  '/inicio': (typeof Home === 'function') ? Home : (() => '<section class="card"><h2>Início</h2></section>'),
  '/projetos': (typeof Projetos === 'function') ? Projetos : (() => '<section class="card"><h2>Projetos</h2></section>'),
  '/projetos/resgate': (typeof Resgate === 'function') ? Resgate : (() => '<section class="card"><h2>Resgate</h2></section>'),
  '/projetos/reabilitacao': (typeof Reabilitacao === 'function') ? Reabilitacao : (() => '<section class="card"><h2>Reabilitação</h2></section>'),
  '/projetos/novo-lar': (typeof NovoLar === 'function') ? NovoLar : (() => '<section class="card"><h2>Novo Lar</h2></section>'),
  '/projetos/educacao': (typeof Educacao === 'function') ? Educacao : (() => '<section class="card"><h2>Educação</h2></section>'),
  '/cadastro': (typeof Cadastro === 'function') ? Cadastro : (() => '<section class="card"><h2>Cadastro</h2></section>'),
};

// resolve o caminho do hash para uma rota conhecida
function getPathFromHash() {
  const hash = window.location.hash || '#/inicio';
  // normaliza: "#/projetos" -> "/projetos"
  const path = hash.replace(/^#/, '');
  return path || '/inicio';
}

// renderiza no contêiner #app e anuncia navegação
function render(path) {
  const container = document.getElementById('app');
  if (!container) return;
  const tpl = Routes[path] || Routes['/inicio'];
  const html = typeof tpl === 'function' ? tpl() : String(tpl);
  container.innerHTML = html;

  // foco acessível no <main>
  const main = document.getElementById('conteudo-principal');
  if (main) main.focus();

  // evento para quem precisar reagir após navegação
  window.dispatchEvent(new Event('spa:navigated'));
}

// resolve navegação atual
function resolve() {
  const path = getPathFromHash();
  render(path);
}

// expõe router global para o app
window.router = { resolve };
