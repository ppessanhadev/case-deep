import { DefineController, DefineRoute } from '@application/decorators';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { ListBranchesResponse } from '@schemas/branch/list-branches.schema';

@DefineController('branch')
export class ListBranchesController {
  constructor(private listBranchesUseCase: ListBranchesUseCase) {}

  @DefineRoute({
    method: 'GET',
    summary: 'List all registered branches',
    response: { type: ListBranchesResponse },
  })
  public async list() {
    return this.listBranchesUseCase.list();
  }
}
