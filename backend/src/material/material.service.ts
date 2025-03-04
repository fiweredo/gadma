import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Material } from './material.schema';
import { CreateMaterialDto } from './material.dto';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name) private materialModel: Model<Material>,
  ) {}

  // Crear un material
  async create(createMaterialDto: CreateMaterialDto): Promise<Material> {
    const createdMaterial = new this.materialModel(createMaterialDto);
    return createdMaterial.save(); // Guarda el material en la base de datos
  }

  // Obtener todos los materiales
  async findAll(): Promise<Material[]> {
    return this.materialModel.find().exec();
  }
}
