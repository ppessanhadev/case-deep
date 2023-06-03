import { Branch, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export class BranchRepository {
  constructor(private database: DatabaseService) {}

  public async findOne(options: Prisma.BranchFindFirstArgs = {}) {
    return this.database.branch.findFirst(options);
  }

  public async list(options: Prisma.BranchFindManyArgs = {}) {
    return this.database.branch.findMany(options);
  }

  public async create(branch: Branch) {
    await this.database.branch.create({ data: branch });
  }

  public async update(id: string, branch: Branch) {
    return this.database.branch.update({ where: { id }, data: { ...branch } });
  }
}
