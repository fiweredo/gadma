import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';
import { MaterialSchema } from './material.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Material', schema: MaterialSchema }])],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
