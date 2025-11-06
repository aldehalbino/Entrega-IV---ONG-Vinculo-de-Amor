/* templates das “páginas” da SPA
   - mantendo o conteúdo da Entrega II
   - links com hash (#/...) para o roteador
   - classes já existentes no CSS
*/

// página inicial
function Home(){
  return `
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
        <a href="https://wa.me/5511987654321" target="_blank" rel="noopener"> (11) 98765-4321 (WhatsApp)</a></p>

        <p><strong>Email:</strong><br>
        <a href="mailto:contato@ongvinculodeamor.org.br">contato@ongvinculodeamor.org.br</a></p>

        <p><strong>Siga-nos:</strong><br>
        <a href="https://instagram.com/vinculodeamor_oficial" target="_blank" rel="noopener">@vinculodeamor_oficial</a> |
        <a href="https://facebook.com/ONGVinculodeAmor" target="_blank" rel="noopener">ONG Vínculo de Amor</a></p>
      </address>
    </section>
  `;
}

// projetos (visão geral)
function Projetos(){
  return `
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
}

// subpágina: Resgate
function Resgate(){
  return `
    <section class="card">
      <h2>Projeto Resgate</h2>
      <p>Atuação emergencial em parceria com voluntários e clínicas: retirada segura, primeiros socorros e triagem.</p>
      <div class="image-gallery">
        <img src="imagens/resgate_projetos.jpg" alt="Equipe em resgate" width="360">
        <img src="imagens/resgates-2_projetos.jpeg" alt="Animal resgatado" width="360">
      </div>
      <a class="btn" href="#/cadastro">Quero ajudar</a>
    </section>
  `;
}

// subpágina: Reabilitação
function Reabilitacao(){
  return `
    <section class="card">
      <h2>Projeto Reabilitar</h2>
      <p>Tratamento veterinário, castração, vacinas e suporte comportamental até a readaptação total.</p>
      <div class="image-gallery">
        <img src="imagens/reabilitar-projetos.jpg" alt="Aplicação de vacina" width="360">
        <img src="imagens/reabilitar-2_projetos.jpg" alt="Cuidados clínicos" width="360">
      </div>
      <a class="btn" href="#/cadastro">Quero ajudar</a>
    </section>
  `;
}

// subpágina: Novo Lar
function NovoLar(){
  return `
    <section class="card">
      <h2>Projeto Novo Lar</h2>
      <p>Feiras e campanhas de adoção responsável, acompanhamento e orientação aos novos tutores.</p>
      <div class="image-gallery">
        <img src="imagens/lar_temporario-projetos.jpg" alt="Feira de adoção" width="360">
        <img src="imagens/lar-temporario2_projetos.jpg" alt="Animal em novo lar" width="360">
      </div>
      <a class="btn" href="#/cadastro">Quero ajudar</a>
    </section>
  `;
}

// subpágina: Educação e Conscientização
function Educacao(){
  return `
    <section class="card">
      <h2>Projeto Educação e Conscientização</h2>
      <p>Palestras e ações sobre guarda responsável, bem-estar e respeito aos animais nas escolas e comunidades.</p>
      <div class="image-gallery">
        <img src="imagens/educacao_projetos.jpeg" alt="Palestra em escola" width="360">
        <img src="imagens/conscientizacao_projetos.webp" alt="Ação de conscientização" width="360">
      </div>
      <a class="btn" href="#/cadastro">Quero ajudar</a>
    </section>
  `;
}

// página: Cadastro de voluntário (formulário)
function Cadastro(){
  return `
    <section class="card">
      <h2>Seja um Voluntário</h2>
      <p>Preencha o formulário para participar das ações da ONG Vínculo de Amor.</p>

      <form class="form" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required>

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" required>

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>

          <label for="telefone">Telefone/Celular</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" required>

          <label for="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required>

          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" required>

          <label for="cep">CEP</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="[0-9]{5}-[0-9]{3}" required>

          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado</label>
          <input type="text" id="estado" name="estado" required>
        </fieldset>

        <div class="form-actions">
          <button type="submit" class="btn">Enviar</button>
        </div>
      </form>
    </section>
  `;
}

/* expõe as funções no escopo global para o router */
window.Home = Home;
window.Projetos = Projetos;
window.Resgate = Resgate;
window.Reabilitacao = Reabilitacao;
window.NovoLar = NovoLar;
window.Educacao = Educacao;
window.Cadastro = Cadastro;

