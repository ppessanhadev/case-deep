import { Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { DeleteBranchUseCase } from '@domain/branch/delete-branch.usecase';

@DefineController('branches')
export class DeleteBranchController {
  constructor(private deleteBranchUseCase: DeleteBranchUseCase) {}

  @DefineRoute({
    method: 'DELETE',
    summary: 'Delete one branch on database and all relational content',
    queries: [{ name: 'id', example: 'efeb858e-77a7-4e78-8960-7e0754b70f76' }],
    code: 204,
  })
  public async create(@Query('id') id: string) {
    return this.deleteBranchUseCase.delete(id);
  }
}
