import {Component, Input, OnInit} from '@angular/core'
import {PopularTagType} from 'src/app/shared/types/popularTagType.interface'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[]

  constructor() {}

  ngOnInit(): void {}
}
