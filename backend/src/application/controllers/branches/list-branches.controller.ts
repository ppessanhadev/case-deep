import { DefineController, DefineRoute } from '@application/decorators';

@DefineController('branches')
export class ListBranchesController {
  @DefineRoute({
    method: 'GET',
    summary: 'List all registered branches',
  })
  public async list() {
    return [];
  }
}
