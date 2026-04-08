import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores/autores.module';
import { DatabaseModule } from './db/database/databese.module';

@Module({
  imports: [AutoresModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
