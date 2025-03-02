import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables del archivo .env
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/gadma'), // Usa el valor por defecto si no está definido
  ],
})
export class DatabaseModule {}
