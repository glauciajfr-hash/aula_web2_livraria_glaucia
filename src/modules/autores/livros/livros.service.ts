import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';

@Injectable()
export class LivrosService {
  constructor(private readonly LivrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.LivrosRepository.listarLivros();
  }
}
