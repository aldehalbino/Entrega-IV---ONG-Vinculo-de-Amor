// validação e consistência dos dados do formulário

const re = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  tel: /^\(\d{2}\)\s?\d{5}-\d{4}$/,
  cep: /^\d{5}-\d{3}$/
};

function setError(input, msg) {
  input.classList.add('is-invalid');
  const err = document.getElementById(`err-${input.id}`);
  if (err) err.textContent = msg || '';
}

function clearError(input) {
  input.classList.remove('is-invalid');
  const err = document.getElementById(`err-${input.id}`);
  if (err) err.textContent = '';
}

export function validateForm(form) {
  let ok = true;

  const nome = form.nome;
  if (!nome.value.trim() || nome.value.trim().length < 3) {
    setError(nome, 'Informe o nome completo.');
    ok = false;
  } else { clearError(nome); }

  const cpf = form.cpf;
  if (!re.cpf.test(cpf.value)) {
    setError(cpf, 'CPF no formato 000.000.000-00.');
    ok = false;
  } else { clearError(cpf); }

  const email = form.email;
  if (!email.checkValidity()) {
    setError(email, 'Informe um e-mail válido.');
    ok = false;
  } else { clearError(email); }

  const telefone = form.telefone;
  if (!re.tel.test(telefone.value)) {
    setError(telefone, 'Telefone no formato (00) 00000-0000.');
    ok = false;
  } else { clearError(telefone); }

  const nascimento = form.nascimento;
  const dt = new Date(nascimento.value);
  const hoje = new Date();
  let idade = 0;
  if (!isNaN(dt)) {
    idade = hoje.getFullYear() - dt.getFullYear();
    const m = hoje.getMonth() - dt.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dt.getDate())) idade--;
  }
  if (isNaN(dt) || idade < 18) {
    setError(nascimento, 'É necessário ter 18 anos ou mais.');
    ok = false;
  } else { clearError(nascimento); }

  const cep = form.cep;
  if (!re.cep.test(cep.value)) {
    setError(cep, 'CEP no formato 00000-000.');
    ok = false;
  } else { clearError(cep); }

  return ok;
}
