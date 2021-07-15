import { MissingParamError } from './errors/missing-params-erros'
import { HttpRequest, HttpResponse } from './protocols/http'

class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }

    return {
      statusCode: 400,
      body: new MissingParamError('name and email')
    }
  }
}

export { SingUpController }
