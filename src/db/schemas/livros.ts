import {
  datetime,
  int,
  mssqlTable,
  text,
  varchar,
} from 'drizzle-orm/mssql-core';
import { autoresTabela } from './autores';

export const livrosTabela = mssqlTable('livros', {
  id: int('id').primaryKey().identity(),
  idAutor: int('id_autor')
    .notNull()
    .references(() => autoresTabela.id),
  titulo: varchar('titulo', { length: 100 }).notNull(),
  descricao: text('descricao').notNull(),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Livro = typeof livrosTabela.$inferSelect;
export type CriarLivro = typeof livrosTabela.$inferInsert;
