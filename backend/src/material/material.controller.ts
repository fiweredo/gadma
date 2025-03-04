import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './material.dto'; // Asegúrate de importar correctamente el DTO
import { Material } from './material.schema'; // El esquema de Material

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  // Ruta para obtener todos los materiales
  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll(); // Llama al servicio para obtener todos los materiales
  }

  // Ruta para crear un nuevo material
  @Post()
  async create(@Body() createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialService.create(createMaterialDto); // Crea un material usando el DTO
  }
}
