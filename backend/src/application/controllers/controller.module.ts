import { Module } from '@nestjs/common';
import { BranchModule } from '@controllers/branch/branch.module';
import { ComputerModule } from '@controllers/computer/computer.module';
import { AirConditionerModule } from '@controllers/air-conditioner/air-conditioner.module';

@Module({
  imports: [BranchModule, AirConditionerModule, ComputerModule],
})
export class ControllerModule {}
