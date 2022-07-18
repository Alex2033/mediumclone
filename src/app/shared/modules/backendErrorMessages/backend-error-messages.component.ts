import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {BackendErrorsInterface} from '@app/shared/types'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnChanges {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface

  errorMessages: string[] = []

  constructor() {}

  ngOnChanges(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')

        return `${name} ${messages}`
      }
    )
  }
}
