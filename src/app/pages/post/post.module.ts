import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostRepository } from 'src/app/core/repositories/post.repository';
import { PostMapper } from 'src/app/data/post/post.mapper';
import { PostRepositoryGql } from 'src/app/data/post/post.repository-gql';
import { PostDetailComponent } from './post-detail.component';
import { PostListComponent } from './post-list.component';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent, PostListComponent, PostDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent,
        children: [
          {
            path: '',
            component: PostListComponent,
            pathMatch: 'full',
          },
          {
            path: ':id/view',
            component: PostDetailComponent,
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
  providers: [
    PostMapper,
    {
      provide: PostRepository,
      useClass: PostRepositoryGql,
    },
  ],
})
export class PostModule {}
