import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FeedTogglerComponent} from './components/feed-toggler/feed-toggler.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [FeedTogglerComponent],
  declarations: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
