import { MissingParamError } from './errors/missing-params-erros'
import { HttpRequest, HttpResponse } from './protocols/http'
import { badRequest } from './helpers/http-helper'

class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(
        new MissingParamError('name')
      )
    }

    if (!httpRequest.body.email) {
      return badRequest(
        new MissingParamError('email')
      )
    }

    return badRequest(
      new MissingParamError('name, email')
    )
  }
}

export { SingUpController }
