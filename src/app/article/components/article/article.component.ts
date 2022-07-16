import {
  isLoadingSelector,
  errorSelector,
  articleSelector,
} from '../../store/selectors'
import {getArticleAction} from './../../store/actions/getArticle.action'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {ArticleInterface} from '@app/shared'
import {Observable} from 'rxjs'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  slug: string
  article$: Observable<ArticleInterface>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.article$ = this.store.pipe(select(articleSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
