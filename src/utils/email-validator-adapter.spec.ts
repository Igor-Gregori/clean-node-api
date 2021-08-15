import { EmailValidatorAdapter } from './email-validator'

describe('Email validator adapter', () => {
  test('should return false if email validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
