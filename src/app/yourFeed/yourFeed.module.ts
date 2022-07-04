import {BannerModule, FeedModule, PopularTagsModule} from '@app/shared'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {YourFeedComponent} from './components/yourFeed.component'
import {FeedTogglerModule} from '../shared/modules/feedToggler/feedToggler.module'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes),
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
