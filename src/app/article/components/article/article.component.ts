import {currentUserSelector} from '@app/auth/store'
import {
  isLoadingSelector,
  errorSelector,
  articleSelector,
} from '../../store/selectors'
import {getArticleAction} from './../../store/actions/getArticle.action'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {ArticleInterface, CurrentUserInterface} from '@app/shared'
import {Observable, combineLatest, Subject} from 'rxjs'
import {map, takeUntil} from 'rxjs/operators'
import {deleteArticleAction} from '../../store/actions/deleteArticle.action'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  private destroy$: Subject<void> = new Subject<void>()

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.store
      .pipe(select(articleSelector), takeUntil(this.destroy$))
      .subscribe((article: ArticleInterface) => {
        this.article = article
      })
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => currentUser.username === article.author.username
      )
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
