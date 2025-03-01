import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Material extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
