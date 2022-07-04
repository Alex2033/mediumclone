import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Subscription} from 'rxjs'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string
  tagName: string

  routeSubscription: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.tagName = params.slug
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
  }
}
