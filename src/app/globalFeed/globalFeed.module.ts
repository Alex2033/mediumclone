import {BannerModule} from './../shared/modules/banner/banner.module'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {RouterModule, Routes} from '@angular/router'
import {GlobalFeedComponent} from './components/globalFeed.component'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes),
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
