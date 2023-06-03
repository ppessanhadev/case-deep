import { DefineController, DefineRoute } from '@application/decorators';
import { ListAirConditionersUseCase } from '@domain/air-conditioner/list-air-conditioners.usecase';
import { ListAirConditionersResponse } from '@schemas/air-conditioner/list-air-conditioner.schema';

@DefineController('air-conditioner')
export class ListAirConditionersController {
  constructor(private listAirConditionersUseCase: ListAirConditionersUseCase) {}

  @DefineRoute({
    method: 'GET',
    summary: 'List all air conditioners avaliable on database',
    response: { type: ListAirConditionersResponse },
  })
  public async list() {
    return this.listAirConditionersUseCase.list();
  }
}
