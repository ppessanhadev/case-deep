import { Module } from '@nestjs/common';
import { ComputerDomainModule } from '@domain/computer/computer-domain.module';
import { ListComputersController } from '@controllers/computer/list-computers.controller';

@Module({
  imports: [ComputerDomainModule],
  controllers: [ListComputersController],
})
export class ComputerModule {}
