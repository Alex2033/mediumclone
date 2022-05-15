import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {LoadingModule} from '../loading/loading.module'
import {PopularTagsComponent} from './components/popularTags.component'
import {PopularTagsService} from './services/popularTags/popularTags.service'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  exports: [PopularTagsComponent],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
