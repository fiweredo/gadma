import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Material, MaterialSchema } from './material.schema';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { MaterialService } from './material/material.service';
import { MaterialController } from './material/material.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Material.name, schema: MaterialSchema }])],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
