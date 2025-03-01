import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Material } from './material.schema';

@Injectable()
export class MaterialService {
  constructor(@InjectModel(Material.name) private materialModel: Model<Material>) {}

  async create(materialData: Partial<Material>): Promise<Material> {
    const newMaterial = new this.materialModel(materialData);
    return newMaterial.save();
  }

  async findAll(): Promise<Material[]> {
    return this.materialModel.find().exec();
  }
}
