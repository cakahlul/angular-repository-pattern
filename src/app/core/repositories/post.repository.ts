import { Observable } from 'rxjs';
import { PostDto } from 'src/app/data/post/post.dto';
import { PostEntity } from '../entities/post.entity';

export abstract class PostRepository {
  abstract fetchAll(): Observable<PostEntity[]>;
  abstract fetchOne(id: string): Observable<PostEntity>;
  abstract update(postDto: PostDto[]): void;
}
