import { Body, Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { UpdateBranchUseCase } from '@domain/branch/update-branch.usecase';
import { UpdateBranchRequest, UpdateBranchResponse } from '@schemas/branches/update.branch.controller';

@DefineController('branches')
export class UpdateBranchController {
  constructor(private updateBranchUseCase: UpdateBranchUseCase) {}

  @DefineRoute({
    method: 'UPDATE',
    summary: 'Updates one branch, receives id as query and all data that will be modified',
    queries: [{ name: 'id', example: 'efeb858e-77a7-4e78-8960-7e0754b70f76' }],
    response: { type: UpdateBranchResponse },
  })
  public async create(@Body() body: UpdateBranchRequest, @Query('id') id: string) {
    return this.updateBranchUseCase.update(id, body);
  }
}
