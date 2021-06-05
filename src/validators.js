export function alpha(val) {
  return /^[а-яё]*([a-z]*)$/i.test(val);
}

export function validDate(val) {
  return /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.(1?[9]\d[1-9]|2?[0]\d[1-9])$/.test(val);
}
