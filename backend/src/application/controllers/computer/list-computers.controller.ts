import { DefineController, DefineRoute } from '@application/decorators';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';
import { ListComputersResponse } from '@schemas/computer/list-computer.schema';

@DefineController('computer')
export class ListComputersController {
  constructor(private listComputersUseCase: ListComputersUseCase) {}

  @DefineRoute({
    method: 'GET',
    summary: 'List all registered computers',
    response: { type: ListComputersResponse },
  })
  public async list() {
    return this.listComputersUseCase.list();
  }
}
