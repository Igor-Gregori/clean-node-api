import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const accountTemp: AccountModel = {
      id: '1',
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    }
    return await new Promise(resolve => resolve(accountTemp))
  }
}
