import { MissingParamError } from './errors/missing-params-erros'
import { HttpRequest, HttpResponse } from './protocols/http'
import { badRequest } from './helpers/http-helper'

class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(
          new MissingParamError(field)
        )
      }
    }
    return {
      statusCode: 200,
      body: 'ok'
    }
  }
}

export { SingUpController }
