import { Body } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { CreateBranchRequest } from '@schemas/branches/create-branch.controller';

@DefineController('branches')
export class CreateBranchController {
  constructor(private createBranchUseCase: CreateBranchUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Register a new branch on database',
    code: 201,
  })
  public async create(@Body() body: CreateBranchRequest) {
    return this.createBranchUseCase.create(body);
  }
}
