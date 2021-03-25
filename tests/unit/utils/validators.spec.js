import { validateEmptyAndEmail, validateEmptyAndLength3 } from '../../../src/utils/validators';

describe('Validators utils', () => {
  it('should give an error with empty param', () => {
    expect(validateEmptyAndLength3()).toBe('Este campo é obrigatório');
  });

  it('should give an error with less than 3 characters param', () => {
    expect(validateEmptyAndLength3('12')).toBe('Este campo precisa de no mínimo 3 caracteres');
  });

  it('should returns true with valid param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true);
  });

  it('should give an error with empty param', () => {
    expect(validateEmptyAndEmail()).toBe('Este campo é obrigatório');
  });

  it('should give an error with an invalid param', () => {
    expect(validateEmptyAndEmail('notEmail.com')).toBe('Este campo precisa ser um email');
  });

  it('should returns true with valid param', () => {
    expect(validateEmptyAndEmail('email@mail.com')).toBe(true);
  });
});
