import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core'
import {
  ArticleInputInterface,
  ArticlePostBodyInterface,
  BackendErrorsInterface,
} from '@app/shared'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {tap} from 'rxjs/operators'
import {createArticleAction} from './store/createArticle.action'
import {isSubmittingSelector, validationErrorsSelector} from './store/selectors'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(
      select(validationErrorsSelector),
      tap((val) => console.log(val))
    )
  }

  onSubmit(article: ArticlePostBodyInterface): void {
    this.store.dispatch(createArticleAction({article}))
  }
}
