import { Injectable } from '@nestjs/common';
import { AutoresModule } from './autores.module';
import { CriarAutorDto } from './autores.dto';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro santos',
    email: 'pedro.santos@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    if (!autores) {
      return 'Não há autores cadastrados';
    }
    return autores;
  }

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado');
    }

    return autorEncontrado;
  }
  criarAutor(bodyRequest: CriarAutorDto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e email são obrigatórios';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });

    return autores;
  }

  atualizarAutor(idAutor: number, bodyRequest: any) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (!bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome e email são obrigatórios');
    }
    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }

    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }
  deletarAutor(idAutor: number) {
    const autorEncontrado = this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
