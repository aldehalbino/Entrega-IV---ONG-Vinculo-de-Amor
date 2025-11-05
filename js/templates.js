// páginas geradas por JS (SPA)
// deixei o conteúdo fiel à Entrega II e com classes já usadas no CSS

export const Home = () => `
  <section class="card">
    <h2>Sobre Nós</h2>
    <p><strong>Vínculo de Amor</strong> é uma Organização Não Governamental (ONG) dedicada ao resgate, reabilitação e colocação em lares seguros e carinhosos de <strong>animais domésticos abandonados</strong>. Nosso foco está em refazer o elo, o "vínculo" rompido pelo abandono, garantindo que esses seres encontrem novamente a segurança e o carinho que merecem.</p>
    <div class="image-gallery mt-16">
      <img src="imagens/antes-depois_irene.png" alt="Antes e Depois Irene" width="250">
      <img src="imagens/antes-depois_simon.jpg" alt="Antes e Depois Simon" width="300">
      <img src="imagens/feira-adocao.jpg" alt="Feira de Adoção" width="350">
    </div>
  </section>

  <section class="grid-3">
    <article class="card">
      <h2>Missão</h2>
      <p>Resgatar, recuperar e reintegrar animais domésticos abandonados ou em situação de risco, promovendo a adoção responsável e conscientizando a sociedade sobre a guarda responsável e os direitos animais.</p>
    </article>
    <article class="card">
      <h2>Visão</h2>
      <p>Ser referência nacional em bem-estar animal e na redução do número de animais abandonados, atuando com transparência e excelência na reabilitação e recolocação de cada indivíduo.</p>
    </article>
    <article class="card">
      <h2>Valores</h2>
      <ul>
        <li><strong>União:</strong> Refazer o elo entre o animal e o ser humano.</li>
        <li><strong>Compromisso Vitalício:</strong> O cuidado não termina na adoção; ele é para sempre.</li>
        <li><strong>Inclusão:</strong> Valorizar cada vida, independentemente da espécie ou número de patas.</li>
        <li><strong>Excelência:</strong> Na recuperação médica, psicológica e na seleção de lares.</li>
      </ul>
    </article>
  </section>

  <section class="card">
    <h3>Fale Conosco</h3>
    <address>
      <p><strong>Endereço:</strong><br>
      Rua da Esperança, 150 - Bairro Novo Horizonte<br>
      São Paulo/SP - CEP: 01234-567</p>

      <p><strong>Telefone | WhatsApp:</strong><br>
      <a href="tel:+551134567890">(11) 3456-7890 (Fixo)</a> |
      <a href="https://wa.me/5511987654321" target="_blank">(11) 98765-4321 (WhatsApp)</a></p>

      <p><strong>Email:</strong><br>
      <a href="mailto:contato@ongvinculodeamor.org.br">contato@ongvinculodeamor.org.br</a></p>

      <p><strong>Siga-nos:</strong><br>
      <a href="https://instagram.com/vinculodeamor_oficial" target="_blank">@vinculodeamor_oficial</a> |
      <a href="https://facebook.com/ONGVinculodeAmor" target="_blank">ONG Vínculo de Amor</a></p>
    </address>
  </section>
`;

export const Projetos = () => `
  <section class="card">
    <h2>Nossos Projetos</h2>
    <p>Unimos voluntários e apoiadores para resgatar, tratar e preparar animais para uma nova chance de amor e segurança.</p>
  </section>

  <section>
    <article class="card">
      <h3>Projeto Resgate</h3>
      <p>Atuamos em resgates emergenciais de animais abandonados ou em situação de risco, garantindo atendimento rápido e seguro.</p>
      <div class="image-gallery">
        <img src="imagens/resgate_projetos.jpg" alt="Resgate de Animais" width="300">
        <img src="imagens/resgates-2_projetos.jpeg" alt="Cachorro resgatado" width="300">
      </div>
      <a class="btn" href="#/projetos/resgate">Ver detalhes</a>
    </article>

    <article class="card">
      <h3>Projeto Reabilitar</h3>
      <p>Fornecemos tratamento veterinário, vacinas, castração e suporte emocional até que o animal esteja pronto para adoção.</p>
      <div class="image-gallery">
        <img src="imagens/reabilitar-projetos.jpg" alt="Vacinação de Animais" width="300">
        <img src="imagens/reabilitar-2_projetos.jpg" alt="Cuidados veterinários" width="300">
      </div>
      <a class="btn" href="#/projetos/reabilitacao">Ver detalhes</a>
    </article>

    <article class="card">
      <h3>Projeto Novo Lar</h3>
      <p>Promovemos feiras e campanhas de adoção responsável, conectando animais preparados com famílias amorosas.</p>
      <div class="image-gallery">
        <img src="imagens/lar_temporario-projetos.jpg" alt="Feira de Adoção" width="300">
        <img src="imagens/lar-temporario2_projetos.jpg" alt="Novo lar" width="300">
      </div>
      <a class="btn" href="#/projetos/novo-lar">Ver detalhes</a>
    </article>

    <article class="card">
      <h3>Projeto Educação e Conscientização</h3>
      <p>Levamos palestras e ações educativas sobre adoção consciente, cuidados e respeito aos animais.</p>
      <div class="image-gallery">
        <img src="imagens/educacao_projetos.jpeg" alt="Palestra educativa" width="300">
        <img src="imagens/conscientizacao_projetos.webp" alt="Ação de conscientização" width="300">
      </div>
      <a class="btn" href="#/projetos/educacao">Ver detalhes</a>
    </article>
  </section>
`;


export const Resgate = () => `
  <section class="card">
    <h2>O Projeto</h2>
    <p>O <strong>Projeto Resgate</strong> atua em ações emergenciais para salvar animais em situação de risco, abandono ou maus-tratos. Trabalhamos em parceria com voluntários e clínicas veterinárias para garantir segurança e acolhimento imediato.</p>
    <div class="image-gallery">
      <img src="imagens/resgate_projetos.jpg" alt="Equipe resgatando cachorro" width="300">
      <img src="imagens/resgates-2_projetos.jpeg" alt="Animal resgatado" width="300">
    </div>
  </section>

  <section class="card">
    <h2>Como Ajudar</h2>
    <p>Você pode colaborar doando ração, medicamentos, transporte, oferecendo lar temporário ou divulgando nossos resgates nas redes. Toda ajuda faz diferença.</p>
    <a href="#/cadastro" class="btn">Quero Ajudar</a>
  </section>
`;

export const Reabilitacao = () => `
  <section class="card">
    <h2>O Projeto</h2>
    <p>O <strong>Projeto Reabilitar</strong> oferece tratamento veterinário, castração, vacinas e suporte emocional até que o animal esteja pronto para adoção. Também cuidamos da reabilitação comportamental quando necessário.</p>
    <div class="image-gallery">
      <img src="imagens/reabilitar-projetos.jpg" alt="Atendimento veterinário" width="300">
      <img src="imagens/reabilitar-2_projetos.jpg" alt="Tratamento e cuidados" width="300">
    </div>
  </section>

  <section class="card">
    <h2>Como Ajudar</h2>
    <p>Doações financeiras e de medicamentos, transporte para consultas, redes de apoio e visitas ajudam a manter as reabilitações em dia.</p>
    <a href="#/cadastro" class="btn">Apoiar Reabilitação</a>
  </section>
`;

export const NovoLar = () => `
  <section class="card">
    <h2>O Projeto</h2>
    <p>O <strong>Projeto Novo Lar</strong> promove feiras e campanhas de adoção responsável, conectando animais preparados com famílias amorosas. Acompanhamos o pós-adoção para garantir adaptação segura.</p>
    <div class="image-gallery">
      <img src="imagens/lar_temporario-projetos.jpg" alt="Feira de adoção" width="300">
      <img src="imagens/lar-temporario2_projetos.jpg" alt="Família adotando" width="300">
    </div>
  </section>

  <section class="card">
    <h2>Como Participar</h2>
    <p>Participe das feiras, ofereça lar temporário e ajude a divulgar os perfis dos nossos animais nas redes sociais.</p>
    <a href="#/cadastro" class="btn">Quero Adotar / Ajudar</a>
  </section>
`;

export const Educacao = () => `
  <section class="card">
    <h2>O Projeto</h2>
    <p>O <strong>Projeto Educação e Conscientização</strong> leva palestras e ações educativas sobre guarda responsável, castração, vacinação e respeito aos animais para escolas e comunidades.</p>
    <div class="image-gallery">
      <img src="imagens/educacao_projetos.jpeg" alt="Palestra educativa" width="300">
      <img src="imagens/conscientizacao_projetos.webp" alt="Ação de conscientização" width="300">
    </div>
  </section>

  <section class="card">
    <h2>Como Apoiar</h2>
    <p>Convide a ONG para palestrar na sua escola, empresa ou comunidade, ou ajude com materiais educativos.</p>
    <a href="#/cadastro" class="btn">Quero Convidar / Apoiar</a>
  </section>
`;

export const Cadastro = () => `
  <section class="card">
    <h2>Cadastro de Voluntário</h2>
    <form id="cadastroForm" novalidate>
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" name="nome" required>
        <div class="field-error" id="err-nome"></div>

        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
        <div class="field-error" id="err-cpf"></div>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <div class="field-error" id="err-email"></div>

        <label for="telefone">Telefone/Celular</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
        <div class="field-error" id="err-telefone"></div>

        <label for="nascimento">Data de Nascimento</label>
        <input type="date" id="nascimento" name="nascimento" required>
        <div class="field-error" id="err-nascimento"></div>

        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" placeholder="00000-000" required>
        <div class="field-error" id="err-cep"></div>

        <button type="submit" class="btn">Enviar</button>
      </fieldset>
    </form>
  </section>
`;

