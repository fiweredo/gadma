import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator'; // Importa las validaciones necesarias

export class CreateMaterialDto {
  @IsString() // Asegura que el campo "name" es una cadena
  @IsNotEmpty() // El nombre no puede estar vacío
  name: string;

  @IsInt() // Asegura que el campo "quantity" es un número entero
  @Min(1) // El valor mínimo de cantidad es 1
  @Max(1000) // El valor máximo de cantidad es 1000
  quantity: number;
}
