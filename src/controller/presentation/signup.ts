import { MissingParamError } from './errors/missing-params-erros'
import { HttpRequest, HttpResponse } from './protocols/http'
import { badRequest } from './helpers/http-helper'

import { Controller } from './protocols/controller'

class SingUpController implements Controller {
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
