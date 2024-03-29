import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {UtilsService} from '@app/shared/services'

import {PaginationComponent} from './components/pagination.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
