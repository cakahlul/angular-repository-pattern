import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostEntity } from '../../core/entities/post.entity';
import { PostRepository } from '../../core/repositories/post.repository';

@Component({
  selector: 'app-post-list',
  template: `
    <tbody>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Created Date</th>
        <th>Action</th>
      </tr>
      <tr *ngFor="let post of postList">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.createdDate }}</td>
        <td><a [routerLink]="[post.id, 'view']">Detail</a></td>
      </tr>
    </tbody>
  `,
})
export class PostListComponent implements OnInit, OnDestroy {
  postList: PostEntity[];

  private subscription: Subscription;

  constructor(private repository: PostRepository) {
    this.postList = [];
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.fetchAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchAll(): void {
    this.subscription.add(
      this.repository.fetchAll().subscribe((postList: PostEntity[]) => {
        this.postList = postList;
      }),
    );
  }
}
