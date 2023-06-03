import { Module } from '@nestjs/common';
import { ComputerDomainModule } from '@domain/computer/computer-domain.module';
import { ListComputersController } from '@controllers/computer/list-computers.controller';
import { CreateComputerController } from '@controllers/computer/create-computer.controller';
import { UpdateComputerController } from '@controllers/computer/update-computer.controller';

@Module({
  imports: [ComputerDomainModule],
  controllers: [ListComputersController, CreateComputerController, UpdateComputerController],
})
export class ComputerModule {}
