import { DefineController, DefineRoute } from '@application/decorators';
import { ListBranchesResponse } from '@schemas/branches/list-branches.schema';

@DefineController('branches')
export class ListBranchesController {
  @DefineRoute({
    method: 'GET',
    summary: 'List all registered branches',
    response: { type: ListBranchesResponse },
  })
  public async list() {
    return [];
  }
}
