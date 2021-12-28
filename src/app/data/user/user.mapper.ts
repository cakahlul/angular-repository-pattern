import { Injectable } from '@angular/core';
import { UserEntity } from 'src/app/core/entities/user.entity';
import { DtoMapper, EntityMapper } from 'src/app/shared/base/mapper';
import { UserDto } from './user.dto';

@Injectable()
export class UserMapper
  implements EntityMapper<UserDto, UserEntity>, DtoMapper<UserDto, UserEntity>
{
  toDto(entity: UserEntity): UserDto {
    const { id, name, age } = entity;
    return {
      id,
      firstName: name,
      age,
    };
  }

  toEntity(dto: UserDto): UserEntity {
    const { id, firstName, age } = dto;
    return {
      id,
      name: firstName,
      age,
    };
  }
}
