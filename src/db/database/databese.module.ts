import { Global, Module } from '@nestjs/common';
import { DRIZZLE } from './databese.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle('', { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
