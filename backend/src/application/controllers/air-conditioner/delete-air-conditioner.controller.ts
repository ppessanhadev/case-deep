import { Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { DeleteAirConditionerUseCase } from '@domain/air-conditioner/delete-air-conditioner.usecase';

@DefineController('air-conditioner')
export class DeleteAirConditionerController {
  constructor(private deleteAirConditionerUseCase: DeleteAirConditionerUseCase) {}

  @DefineRoute({
    method: 'DELETE',
    summary: 'Deletes specific air conditioner by id received query',
    queries: [{ name: 'id', example: 'efeb858e-77a7-4e78-8960-7e0754b70f76' }],
    code: 204,
  })
  public async create(@Query('id') id: string) {
    return this.deleteAirConditionerUseCase.delete(id);
  }
}
