import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostEntity } from '../../core/entities/post.entity';
import { PostRepository } from '../../core/repositories/post.repository';

@Component({
  selector: 'app-post-detail',
  template: `
    <div>
      <label>Id: {{ post.id }}</label>
      <br />
      <label>Title: {{ post.title }}</label>
      <br />
      <label>Created Date: {{ post.createdDate }}</label>
    </div>
  `,
})
export class PostDetailComponent implements OnInit, OnDestroy {
  post: PostEntity;

  private subscription: Subscription;

  constructor(
    private repository: PostRepository,
    private activatedRoute: ActivatedRoute,
  ) {
    this.post = { id: 0, createdDate: '', title: '' };
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscribeToActivatedRouteParam();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeToActivatedRouteParam(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe(param => {
        this.fetchOne(param.id);
      }),
    );
  }

  private fetchOne(id: string): void {
    this.subscription.add(
      this.repository.fetchOne(id).subscribe((post: PostEntity) => {
        console.log(post);
        this.post = post;
      }),
    );
  }
}
