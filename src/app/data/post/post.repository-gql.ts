import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostEntity } from 'src/app/core/entities/post.entity';
import { PostRepository } from 'src/app/core/repositories/post.repository';
import { GRAPHQL_QUERY } from './post.constant';
import { PostDto } from './post.dto';
import { PostMapper } from './post.mapper';

@Injectable()
export class PostRepositoryGql extends PostRepository {
  constructor(private apollo: Apollo, private mapper: PostMapper) {
    super();
  }

  fetchAll(): Observable<PostEntity[]> {
    return this.apollo
      .watchQuery({
        query: GRAPHQL_QUERY.fetchAll,
      })
      .valueChanges.pipe(
        map((response: any) => {
          return response.data.posts.map(this.mapper.toEntity);
        }),
      );
  }

  fetchOne(id: string): Observable<PostEntity> {
    return this.apollo
      .watchQuery({
        query: GRAPHQL_QUERY.fetchOne,
        variables: {
          id: id,
        },
      })
      .valueChanges.pipe(
        map((response: any) => {
          return this.mapper.toEntity(response.data.post);
        }),
      );
  }

  update(postDto: PostDto[]): void {
    throw new Error('Method not implemented.');
  }
}
