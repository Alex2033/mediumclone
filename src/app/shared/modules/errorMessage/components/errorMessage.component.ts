import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'mc-error-message',
  templateUrl: './errorMessage.component.html',
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Something went wrong'

  constructor() {}

  ngOnInit() {}
}
