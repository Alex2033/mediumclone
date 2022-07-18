import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'
import {FormGroup, FormBuilder} from '@angular/forms'
import {
  ArticleInputInterface,
  ArticlePostBodyInterface,
  BackendErrorsInterface,
} from '@app/shared/types'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean = false
  @Input('errors') errorProps: BackendErrorsInterface | null

  @Output('articleSubmit')
  articleSubmitEvent: EventEmitter<ArticlePostBodyInterface> = new EventEmitter<ArticlePostBodyInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    })
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit({article: this.form.value})
  }
}
