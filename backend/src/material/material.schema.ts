import { Schema, Document } from 'mongoose';

export const MaterialSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Material extends Document {
  id: string;
  name: string;
  description: string;
  quantity: number;
  createdAt: Date;
}
