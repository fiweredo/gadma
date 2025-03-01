import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Material } from './material.schema';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name) private materialModel: Model<Material>,
  ) {}

  // Crear un nuevo material
  async create(materialData: Material): Promise<Material> {
    const createdMaterial = new this.materialModel(materialData);
    return createdMaterial.save();
  }

  // Obtener todos los materiales
  async findAll(): Promise<Material[]> {
    return this.materialModel.find().exec();
  }
}
