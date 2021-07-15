import { HttpRequest, HttpResponse } from './protocols/http'

class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing params: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing params: email')
      }
    }

    return {
      statusCode: 400,
      body: new Error('Missing params: name and email')
    }
  }
}

export { SingUpController }
