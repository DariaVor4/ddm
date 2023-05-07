import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { runtimeMode } from '@common';
import { AppModule } from './app.module';
import './common/dayjs-configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: process.env.NODE_ENV !== 'development' ? ['error', 'warn', 'log'] : undefined,
  });
  // app.enableCors();
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

  await app.listen(5000);
}

bootstrap();
