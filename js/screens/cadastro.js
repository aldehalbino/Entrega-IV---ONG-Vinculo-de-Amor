// lógica da tela de cadastro: validação + rascunho no storage
import { $, on, showToast } from '../dom.js';
import { validateForm } from '../validator.js';
import { save, load, clearAll } from '../state.js';

const KEY_FORM = 'cadastro_form';

export function mountCadastro() {
  const form = $('#cadastroForm');
  if (!form) return;

  // restaura rascunho salvo
  const data = load(KEY_FORM, null);
  if (data) Object.entries(data).forEach(([k, v]) => { if (k in form) form[k].value = v; });

  // salva rascunho enquanto digito
  on(form, 'input', () => {
    save(KEY_FORM, {
      nome: form.nome.value,
      cpf: form.cpf.value,
      email: form.email.value,
      telefone: form.telefone.value,
      nascimento: form.nascimento.value,
      cep: form.cep.value,
    });
  });

  // valida e simula envio
  on(form, 'submit', (e) => {
    e.preventDefault();
    const ok = validateForm(form);
    if (!ok) return showToast('Verifique os campos destacados.');
    showToast('Cadastro enviado com sucesso!');
    clearAll();
    form.reset();
  });
}
