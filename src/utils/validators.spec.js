const {
  validateEmpty,
  validateEmptyAndMinLength,
  validateEmptyAndEmail,
} = require('./validators')

describe('Validators', () => {
  it('should return a error message by empty payload', () => {
    expect(validateEmpty()).toBe('*Este campo é obrigatório')
  })

  it('should return a error message by length less than 3', () => {
    expect(validateEmptyAndMinLength('Oi', 3)).toBe(
      '*Este campo deve ter no mínimo 3 caracteres',
    )
  })

  it('should return true by correct params', () => {
    expect(validateEmptyAndMinLength('Oii', 3)).toBeTruthy()
  })

  it('should give a invalida e-mail error', () => {
    expect(validateEmptyAndEmail('demysdcl@')).toBe(
      '*O e-mail informado não é valido',
    )
  })

  it('should return true by valid e-mail', () => {
    expect(validateEmptyAndEmail('demysdcl@gmail.com')).toBeTruthy()
  })
})
