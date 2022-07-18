import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ArticleFormModule} from '@app/shared'
import {CreateArticleComponent} from './createArticle.component'

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  exports: [],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
