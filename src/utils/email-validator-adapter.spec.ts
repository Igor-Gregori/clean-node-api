import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('Email validator adapter', () => {
  test('should return false if email validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
  test('should return true if email validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('true_email@mail.com')
    expect(isValid).toBe(true)
  })
  test('should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    const anyEmail = 'any_email@mail.com'
    sut.isValid(anyEmail)
    expect(isEmailSpy).toHaveBeenCalledWith(anyEmail)
  })
})
