import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno del archivo .env
    MongooseModule.forRoot(process.env.MONGO_URI), // Conexión a MongoDB
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
