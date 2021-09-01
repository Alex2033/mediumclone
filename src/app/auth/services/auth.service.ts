import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {environment} from 'src/environments/environment'
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
}
