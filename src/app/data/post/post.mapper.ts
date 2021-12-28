import { Injectable } from '@angular/core';
import { PostEntity } from 'src/app/core/entities/post.entity';
import { DtoMapper, EntityMapper } from 'src/app/shared/base/mapper';
import { PostDto } from './post.dto';

@Injectable()
export class PostMapper
  implements EntityMapper<PostDto, PostEntity>, DtoMapper<PostDto, PostEntity>
{
  toDto(entity: PostEntity): PostDto {
    const { id, createdDate, title } = entity;
    return {
      id,
      date: createdDate,
      title,
      user_id: 1,
    };
  }

  toEntity(dto: PostDto): PostEntity {
    const { id, date, title } = dto;
    return {
      id,
      createdDate: date,
      title,
    };
  }
}
