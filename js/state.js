// estado simples com localStorage (namespace para não conflitar)
const NS = 'vinculo_spa_v1';

export function loadAll() {
  try { return JSON.parse(localStorage.getItem(NS)) || {}; }
  catch { return {}; }
}

export function load(key, fallback = null) {
  const all = loadAll();
  return key in all ? all[key] : fallback;
}

export function save(key, value) {
  const all = loadAll();
  all[key] = value;
  localStorage.setItem(NS, JSON.stringify(all));
}

export function clearAll() {
  localStorage.removeItem(NS);
}
