import { Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { DeleteComputerUseCase } from '@domain/computer/delete-computer.usecase';

@DefineController('computer')
export class DeleteComputerController {
  constructor(private deleteComputerUseCase: DeleteComputerUseCase) {}

  @DefineRoute({
    method: 'DELETE',
    summary: 'Deletes specific computer by received query id',
    queries: [{ name: 'id', example: 'efeb858e-77a7-4e78-8960-7e0754b70f76' }],
    code: 204,
  })
  public async delete(@Query('id') id: string) {
    await this.deleteComputerUseCase.delete(id);
  }
}
