# ONG Vínculo de Amor  
**Entrega III - Desenvolvimento Front-End**  
Autora: *Aldenize Albino de Oliveira*  
Data: Outubro de 2025  

---

## Objetivo do Projeto  
Esta terceira entrega tem como objetivo aplicar **conceitos de JavaScript avançado** para transformar a interface estática desenvolvida nas entregas anteriores em uma **SPA (Single Page Application)** dinâmica, interativa e funcional.  

O projeto da **ONG Vínculo de Amor** evolui para um site com **navegação dinâmica, validação de formulários e componentes reativos**, mantendo a mesma identidade visual e estrutura da entrega anterior.

---

## Estrutura do Projeto  

Entrega-III-ONG-Vinculo-de-Amor/
│
├── css/
│ ├── variables.css → Sistema de design (cores, fontes e espaçamento)
│ ├── base.css → Estilos globais e tipografia
│ ├── layout.css → Estrutura de layout e responsividade
│ ├── components.css → Botões, formulários e cards
│ └── responsive.css → Ajustes para diferentes resoluções
│
├── js/
│ ├── app.js → Inicialização da SPA e lógica principal
│ ├── router.js → Gerenciamento das rotas (navegação dinâmica)
│ ├── templates.js → Templates de conteúdo das páginas
│ ├── dom.js → Manipulação do DOM e utilidades
│ ├── validator.js → Regras de validação dos formulários
│ ├── state.js → Armazenamento e gerenciamento de dados
│ └── screens/
│     └── cadastro.js → Lógica e validação do formulário de cadastro
│
├── imagens/ → Imagens utilizadas nas seções e projetos
├── videos/ → Vídeo principal da página inicial
│
├── index.html → Estrutura principal do site (SPA)
└── README.md

---

## Sistema de Design  

Mantém o mesmo sistema visual da **Entrega II**, garantindo consistência entre as versões.

**Paleta de cores (8 tons):**
- Primária: `#2e7d32`
- Primária Clara: `#66bb6a`
- Primária Escura: `#1b5e20`
- Secundária: `#81c784`
- Secundária Escura: `#388e3c`
- Neutras: `#ffffff`, `#f5f5f5`, `#e0e0e0`, `#212121`

**Tipografia Hierárquica (5 tamanhos):**
- `--font-xs`, `--font-sm`, `--font-md`, `--font-lg`, `--font-xl`

**Sistema de Espaçamento (6 níveis):**
- `8px, 16px, 24px, 32px, 48px, 64px`

---

## Estrutura e Funcionalidades  

- **SPA (Single Page Application):** todas as páginas são carregadas dinamicamente sem recarregar o navegador.  
- **Router em JavaScript:** gerenciamento de rotas e exibição de seções conforme o menu.  
- **Templates dinâmicos:** conteúdo das páginas definido e injetado via JavaScript.  
- **Validação de formulários:** checagem de campos obrigatórios com mensagens visuais de erro.  
- **Sistema modular:** scripts separados por responsabilidade (router, dom, validator, templates, state).  
- **Design responsivo:** layout adaptado a diferentes resoluções e dispositivos.  

---

## Navegação  

- Menu principal com as seções:
  - Início  
  - Projetos ▾ *(submenu com quatro projetos)*  
  - Seja um Voluntário  

- Submenu funcional:
  - Projeto Resgate  
  - Projeto Reabilitar  
  - Projeto Novo Lar  
  - Projeto Educação e Conscientização  

- Menu hambúrguer ativado no mobile, controlado via JavaScript.  

---

## Componentes  

- **Cards dinâmicos:** utilizados nas seções de projetos e na página inicial.  
- **Botões interativos:** com estados `hover`, `focus`, `active` e `disabled`.  
- **Formulário validado:** com verificação visual e mensagens de inconsistência.  
- **Templates reutilizáveis:** cada página é renderizada dinamicamente.  
- **Alertas e feedbacks:** estrutura visual para notificações simples.  

---

## Responsividade  

A aplicação é totalmente responsiva e se adapta automaticamente a diferentes tamanhos de tela:

- Desktop (≥ 1200px)  
- Tablet (768px – 992px)  
- Mobile (≤ 768px)

Menus, textos, cards e imagens ajustam-se para garantir boa leitura e navegação fluida.

---

## Tecnologias Utilizadas  

- **HTML5**  
- **CSS3 (Flexbox, Grid e variáveis customizadas)**  
- **JavaScript (ES6+ modular)**  
- **Git e GitHub**

---

## Como Visualizar  

1. Acesse o link público do repositório no GitHub:  
   [https://github.com/aldehalbino/Entrega-III---ONG-Vinculo-de-Amor](#)

2. Clique em **Code → Download ZIP**  

3. Extraia a pasta e abra o arquivo **index.html** no navegador.  

---

## Autoria  

**Aldenize Albino de Oliveira**  
Disciplina: Desenvolvimento Front-End
Ano: 2025
