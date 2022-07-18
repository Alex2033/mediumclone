import {CreateArticleEffect} from './store/createArticle.effect'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ArticleFormModule} from '@app/shared'
import {EffectsModule} from '@ngrx/effects'
import {CreateArticleComponent} from './createArticle.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  exports: [],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
