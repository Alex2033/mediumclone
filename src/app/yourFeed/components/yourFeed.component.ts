import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'mc-your-feed',
  templateUrl: './yourFeed.component.html',
})
export class YourFeedComponent implements OnInit {
  apiUrl: string = '/articles/feed'

  constructor() {}

  ngOnInit() {}
}
