import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: 'Foo',
    description: 'Baz',
    body: 'Baz',
    tagList: ['hello', 'world'],
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('res:', res)
  }
}
