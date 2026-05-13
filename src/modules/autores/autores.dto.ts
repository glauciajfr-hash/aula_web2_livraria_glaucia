import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CriarAutorDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  nome: string;

  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @MaxLength(255, { message: 'O email deve ter no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  email: string;
}

export class AtualizarAutorDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsOptional()
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  nome: string;

  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @MaxLength(255, { message: 'O email deve ter no máximo 255 caracteres' })
  @IsOptional()
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  email: string;
}
