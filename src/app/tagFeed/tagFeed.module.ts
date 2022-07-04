import {BannerModule} from '../shared/modules/banner/banner.module'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {RouterModule, Routes} from '@angular/router'
import {TagFeedComponent} from './components/tagFeed.component'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {FeedTogglerModule} from '../shared/modules/feedToggler/feedToggler.module'

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
