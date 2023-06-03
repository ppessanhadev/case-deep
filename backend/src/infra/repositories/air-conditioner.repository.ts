import { Injectable } from '@nestjs/common';
import { AirConditioner, Prisma } from '@prisma/client';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export class AirConditionerRepository {
  constructor(private database: DatabaseService) {}

  public async findOne(options: Prisma.AirConditionerFindFirstArgs = {}) {
    return this.database.airConditioner.findFirst(options);
  }

  public async list(options: Prisma.AirConditionerFindManyArgs = {}) {
    return this.database.airConditioner.findMany(options);
  }

  public async create(airConditioner: AirConditioner) {
    await this.database.airConditioner.create({ data: airConditioner });
  }

  public async update(id: string, airConditioner: AirConditioner) {
    return this.database.airConditioner.update({ where: { id }, data: airConditioner });
  }

  public async delete(id: string) {
    await this.database.airConditioner.delete({ where: { id } });
  }
}
