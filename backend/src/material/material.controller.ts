import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './material.schema';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async create(@Body() materialData: Partial<Material>): Promise<Material> {
    return this.materialService.create(materialData);
  }

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }
}
