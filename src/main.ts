import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as csurf from 'csurf';
import fs from 'fs';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      snapshot: true,
      abortOnError: false,
      transport: Transport.TCP,
      options: {
        port: 3000,
      },
    },
  );
  app.useGlobalFilters(csurf());
  await app.listen();
}
bootstrap().catch((err: Error) => {
  console.log(err);
  fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
  process.exit(1);
});
