import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TopBarComponent} from './top-bar.component'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
