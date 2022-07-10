import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleComponent} from './components/article/article.component'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule, LoadingModule} from '@app/shared'
import {GetArticleEffect} from './store/effects/getArticle.effect'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule {}
