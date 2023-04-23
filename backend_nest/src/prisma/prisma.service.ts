import {
  INestApplication,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma-client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      // log: [
      //   {
      //     emit: 'stdout',
      //     level: 'query',
      //   },
      //   {
      //     emit: 'stdout',
      //     level: 'error',
      //   },
      //   {
      //     emit: 'stdout',
      //     level: 'info',
      //   },
      //   {
      //     emit: 'stdout',
      //     level: 'warn',
      //   },
      // ],
    });
    // Exclude password from select
    // this.$use(async (params, next) => {
    //   const result = await next(params);
    //   if (params?.model === 'User' && params?.args?.select?.password !== true) {
    //     delete result.password;
    //   }
    //   return result;
    // });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => app.close());
  }
}
