import { Body, Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { UpdateComputerUseCase } from '@domain/computer/update-computer.usecase';
import { UpdateComputerRequest, UpdateComputerResponse } from '@schemas/computer/update-computer.schema';

@DefineController('computer')
export class UpdateComputerController {
  constructor(private updateComputerUseCase: UpdateComputerUseCase) {}

  @DefineRoute({
    method: 'UPDATE',
    summary: 'Create a new computer associated with a branch',
    queries: [{ name: 'id', example: 'f1303021-ad06-4e4b-9da2-ce9bf17ca76c' }],
    response: { type: UpdateComputerResponse },
  })
  public async update(@Body() computer: UpdateComputerRequest, @Query('id') id: string) {
    return this.updateComputerUseCase.update(id, computer);
  }
}
