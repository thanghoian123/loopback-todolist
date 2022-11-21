import {Entity, model, property} from '@loopback/repository';

@model()
export class UserProject extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  projectId: number;

  @property({
    type: 'number',
    required: true,
    generated: true,

  })
  ID: number;

  constructor(data?: Partial<UserProject>) {
    super(data);
  }
}

export interface UserProjectRelations {
  // describe navigational properties here
}

export type UserProjectWithRelations = UserProject & UserProjectRelations;
