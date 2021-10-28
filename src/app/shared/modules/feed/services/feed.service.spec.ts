/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FeedService } from './feed.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedService]
    });
  });

  it('should ...', inject([FeedService], (service: FeedService) => {
    expect(service).toBeTruthy();
  }));
});
