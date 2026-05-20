import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { CriarLivroDto } from './livros.dto';

@Injectable()
export class LivrosService {
  constructor(private readonly LivrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.LivrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    return await this.LivrosRepository.criarLivro(bodyRequest);
  }
}
