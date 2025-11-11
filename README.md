# ONG Vínculo de Amor  
**Entrega IV - Desenvolvimento Front-End II**  
Autora: *Aldenize Albino de Oliveira*  
Data: Novembro de 2025  

---

## Objetivo do Projeto  

Esta entrega final consolida todo o desenvolvimento da aplicação **ONG Vínculo de Amor**, integrando as etapas anteriores e aplicando **práticas profissionais de versionamento, acessibilidade e otimização**.  

O objetivo principal é garantir que o projeto atenda aos critérios da **WCAG 2.1 Nível AA**, apresente **histórico Git estruturado segundo GitFlow**, e esteja **preparado para deploy em ambiente de produção**.  

---

## Especificações Técnicas Implementadas  

### 🔹 Controle de Versão com Git/GitHub  

- Implementação do **modelo GitFlow** com as branches:  
  - `main` → versão estável do projeto.  
  - `develop` → ambiente de integração.  
  - `feature/acessibilidade` → implementação da acessibilidade e otimizações visuais.  

- Histórico de commits **semântico e organizado**, descrevendo cada alteração com clareza.  
- Criação de **pull requests documentados** para merge entre branches.  
- Uso de **issues e milestones** para acompanhamento das etapas de desenvolvimento.  

---

### 🔹 Acessibilidade (WCAG 2.1 - Nível AA)  

O site foi adaptado para garantir **inclusão e usabilidade** conforme as diretrizes do WCAG 2.1 AA:  

- **Navegação completa por teclado** (`Tab`, `Shift+Tab`, `Enter`, `Esc`).  
- **Foco visível** e consistente em todos os elementos interativos.  
- **Contraste mínimo de 4.5:1** garantido entre texto e plano de fundo.  
- **Estrutura semântica adequada** com uso correto de `<header>`, `<main>`, `<nav>`, `<section>` e `<footer>`.  
- **Atributos ARIA** adicionados para leitores de tela.  
- Inclusão de **modo escuro** e **modo de alto contraste**, acessíveis via botões interativos.  
- **Foco automático** no conteúdo principal a cada navegação dentro da SPA.  

---

### 🔹 Otimização para Produção  

- **Minificação de arquivos CSS, JS e HTML**.  
- **Compressão de imagens** para reduzir o tamanho total da aplicação.  
- Código modular e reutilizável, com separação clara entre **estilos**, **componentes** e **funções JavaScript**.  
- SPA otimizada para carregamento dinâmico e rápido.  

---

## Estrutura Final do Projeto  

Entrega-IV-Vinculo-de-Amor/
│
├── css/
│ ├── variables.css → Variáveis globais (cores, espaçamento e tipografia)
│ ├── base.css → Estilos base e reset
│ ├── layout.css → Estrutura do layout, cabeçalho e rodapé
│ ├── components.css → Botões, formulários, alertas e cartões
│ └── responsive.css → Responsividade e media queries
│
├── js/
│ ├── app.js → Inicialização da SPA e foco no conteúdo principal
│ ├── router.js → Controle das rotas da aplicação
│ ├── templates.js → Templates dinâmicos das páginas
│ ├── validator.js → Validação e feedback de formulários
│ ├── dom.js → Manipulação do DOM e estados visuais
│ └── screens/ → Páginas modulares (resgate, reabilitação, cadastro etc.)
│
├── imagens/ → Logotipo e imagens otimizadas dos projetos
├── videos/ → Vídeo institucional comprimido
│
├── index.html → Estrutura principal da aplicação SPA
└── README.md


---

## Repositório GitHub  

O projeto foi versionado e publicado no GitHub de forma **pública e acessível**:  

🔗 **Repositório:**  
[https://github.com/aldehalbino/Entrega-IV---ONG-Vinculo-de-Amor](https://github.com/aldehalbino/Entrega-IV---ONG-Vinculo-de-Amor)

---

## Documentação Técnica  

O repositório contém:  
- Código-fonte completo e organizado em pastas.  
- Histórico Git rastreável e padronizado.  
- Branches de desenvolvimento conforme GitFlow.  
- Commits semânticos e pull requests documentados.  
- Arquivo README técnico com descrição das funcionalidades e arquitetura do sistema.  

---

## Status da Entrega  

✅ Versionamento GitFlow aplicado corretamente.  
✅ Acessibilidade implementada (WCAG 2.1 - Nível AA).  
✅ Código otimizado para produção.  
✅ Documentação técnica finalizada.  
✅ Repositório público e funcional para avaliação.  
