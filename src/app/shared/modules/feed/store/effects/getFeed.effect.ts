import {
  getFeedFailureAction,
  getFeedSuccessAction,
} from './../actions/getFeed.action'
import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'

import {of} from 'rxjs'

import {FeedService} from '../../services/feed.service'
import {getFeedAction} from '../actions/getFeed.action'
import {GetFeedResponseInterface} from '../../types/getFeedReponse.interface'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({feed})
          }),

          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
