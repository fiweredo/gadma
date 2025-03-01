import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './material.schema';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  // Ruta para obtener todos los materiales
  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  // Ruta para crear un nuevo material
  @Post()
  async create(@Body() materialData: Material): Promise<Material> {
    return this.materialService.create(materialData);
  }
}
