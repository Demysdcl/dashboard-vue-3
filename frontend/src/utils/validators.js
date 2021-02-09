let validation = true

export function validateEmptyAndMinLength(value, minLength) {
  validateEmpty(value)

  if (value.length < minLength)
    validation = `*Este campo deve ter no mínimo ${minLength} caracteres`

  return validation
}

export function validateEmptyAndEmail(value) {
  validateEmpty(value)

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!emailRegex) {
    validation = '*O e-mail informado não é valido'
  }

  return validation
}

export function validateEmpty(value) {
  validation = true
  if (!value) {
    validation = '*Este campo é obrigatório'
  }

  return validation
}
