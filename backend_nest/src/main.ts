import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { runtimeMode } from '@common';
import { AppModule } from './app.module';
import './common/dayjs-configuration';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: !runtimeMode.isDev ? ['error', 'warn', 'log'] : undefined,
  });
  const { config: { port, nodeEnv } } = await app.resolve(ConfigService);
  app.enableCors({
    origin: runtimeMode.isDebug,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  // Swagger
  // const config = new DocumentBuilder()
  //   .setTitle('VisaCenter API')
  //   .setDescription('VisaCenter API description')
  //   .setVersion('1.0')
  //   .addTag('VisaCenter')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(port).then(() => {
    console.log(`App is running in ${nodeEnv.toUpperCase()} mode on port ${port}`);
  });
}

bootstrap();
