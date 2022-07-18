import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {BackendErrorMessagesModule} from '@app/shared/modules'
import {ArticleFormComponent} from './articleForm.component'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  exports: [ArticleFormComponent],
  declarations: [ArticleFormComponent],
})
export class ArticleFormModule {}
