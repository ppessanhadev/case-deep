import { Branch } from '@prisma/client';
import { ConflictException, Injectable } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { CreateBranchRequest } from '@schemas/branch/create-branch.schema';

@Injectable()
export class CreateBranchUseCase {
  constructor(private branchRepository: BranchRepository) {}

  public async create(branch: CreateBranchRequest) {
    const alreadyExists = await this.branchRepository.findOne({
      where: { name: { equals: branch.name, mode: 'insensitive' } },
    });

    if (alreadyExists) {
      throw new ConflictException('Branch already exists.');
    }

    await this.branchRepository.create(branch as Branch);
  }
}
