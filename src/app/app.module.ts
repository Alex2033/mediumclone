import {TopBarModule} from './shared/modules/top-bar/top-bar.module'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {environment} from 'src/environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {PersistanceService} from './shared/services/persistance.service'
import {AuthInterceptor} from './shared/interceptors/auth.interceptor'
import {GlobalFeedModule} from './globalFeed/globalFeed.module'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
