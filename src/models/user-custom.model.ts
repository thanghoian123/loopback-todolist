import {Entity, model, property} from '@loopback/repository';

@model()
export class UserCustom extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;


  constructor(data?: Partial<UserCustom>) {
    super(data);
  }
}

export interface UserCustomRelations {
  // describe navigational properties here
}

export type UserCustomWithRelations = UserCustom & UserCustomRelations;
