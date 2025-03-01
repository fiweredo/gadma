import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MaterialModule } from './material/material.module';

@Module({
  imports: [DatabaseModule, MaterialModule],
})
export class AppModule {}
