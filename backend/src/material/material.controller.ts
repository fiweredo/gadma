import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './material.schema';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @Post()
  async create(@Body() materialData: Material): Promise<Material> {
    return this.materialService.create(materialData);
  }
}
