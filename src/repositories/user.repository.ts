import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Project, User, UserRelations} from '../models';
import {ProjectRepository} from './project.repository';

export type Credentials = {
  email: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {

  public readonly projects: HasManyRepositoryFactory<Project, typeof User.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('BlogRepository') protected blogRepositoryGetter: Getter<ProjectRepository>,
  ) {
    super(User, dataSource);
    this.projects = this.createHasManyRepositoryFactoryFor('projects', blogRepositoryGetter,);
    this.registerInclusionResolver('projects', this.projects.inclusionResolver);
  }
}
