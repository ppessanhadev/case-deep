import { Body } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateComputerUseCase } from '@domain/computer/create-computer.usecase';
import { CreateComputerRequest } from '@schemas/computer/create-computer.schema';

@DefineController('computer')
export class CreateComputerController {
  constructor(private createComputerUseCase: CreateComputerUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Create a new computer associated with a branch',
    code: 201,
  })
  public async create(@Body() computer: CreateComputerRequest) {
    return this.createComputerUseCase.create(computer);
  }
}
