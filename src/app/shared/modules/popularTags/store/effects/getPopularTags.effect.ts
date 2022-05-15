import {
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './../actions/getPopularActions.action'
import {PopularTagsService} from './../../services/popularTags/popularTags.service'
import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'

import {of} from 'rxjs'
import {getPopularTagsAction} from '../actions/getPopularActions.action'
import {PopularTagType} from 'src/app/shared/types/popularTagType.interface'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({popularTags})
          }),

          catchError(() => {
            return of(getPopularTagsFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
