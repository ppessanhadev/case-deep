import { Injectable } from '@nestjs/common';
import { Computer, Prisma } from '@prisma/client';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export class ComputerRepository {
  constructor(private database: DatabaseService) {}

  public async findOne(options: Prisma.ComputerFindFirstArgs = {}) {
    return this.database.computer.findFirst(options);
  }

  public async list(options: Prisma.ComputerFindManyArgs = {}) {
    return this.database.computer.findMany(options);
  }

  public async create(computer: Computer) {
    await this.database.computer.create({ data: computer });
  }

  public async update(id: string, computer: Computer) {
    return this.database.computer.update({ where: { id }, data: computer });
  }

  public async delete(id: string) {
    await this.database.computer.delete({ where: { id } });
  }
}
