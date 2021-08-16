import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('Email validator adapter', () => {
  test('should return false if email validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
  test('should return true if email validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('true_email@mail.com')
    expect(isValid).toBe(true)
  })
})
