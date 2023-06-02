import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';

@Injectable()
export class BranchesRepository {
  constructor(private database: DatabaseService) {}

  public async list() {
    return this.database.branches.findMany();
  }
}
