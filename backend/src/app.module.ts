import { Module } from '@nestjs/common';
import { ControllerModule } from '@application/controllers/controller.module';

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
