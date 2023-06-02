import { Injectable } from '@nestjs/common';
import { BranchesRepository } from '@infra/repositories/branches.repository';

@Injectable()
export class ListBranchesUseCase {
  constructor(private branchesRepository: BranchesRepository) {}

  public async list() {
    return await this.branchesRepository.list();
  }
}
