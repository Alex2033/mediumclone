import {Injectable} from '@angular/core'
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PersistanceService} from '@app/shared/services'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('accessToken')
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    })
    return next.handle(request)
  }
}
