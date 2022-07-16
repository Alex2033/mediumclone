import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleComponent} from './components/article/article.component'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {RouterModule, Routes} from '@angular/router'
import {ErrorMessageModule, LoadingModule, TagListModule} from '@app/shared'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect'

export const routes: Routes = [
  {path: 'articles/:slug', component: ArticleComponent},
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule {}
