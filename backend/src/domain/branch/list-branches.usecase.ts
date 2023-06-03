import { Injectable } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';

@Injectable()
export class ListBranchesUseCase {
  constructor(private branchRepository: BranchRepository) {}

  public async list() {
    return await this.branchRepository.list();
  }
}
