import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl: string = '/articles'

  constructor() {}

  ngOnInit() {}
}
