import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export abstract class BaseRepository<TEntity> {
  constructor(@Inject(DatabaseService) private database: DatabaseService) {}

  private get entitiyName() {
    const entitiyName = this.constructor.name.replace('Repository', '');
    return entitiyName.replace(entitiyName[0], entitiyName[0].toLowerCase());
  }

  public async findOne(options = {}): Promise<TEntity> {
    return this.database[this.entitiyName].findFirst(options);
  }

  public async list(options = {}): Promise<TEntity> {
    return this.database[this.entitiyName].findMany(options);
  }

  public async create(data: TEntity): Promise<TEntity> {
    return this.database[this.entitiyName].create({ data: data });
  }

  public async update(id: string, branch: TEntity): Promise<TEntity> {
    return this.database[this.entitiyName].update({ where: { id }, data: branch });
  }

  public async delete(id: string): Promise<TEntity> {
    return this.database[this.entitiyName].delete({ where: { id } });
  }
}
