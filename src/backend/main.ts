import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env['API_PORT'] || 3000;
  await app.listen(port);
  
  console.log(`🚀 NestJS server running at http://localhost:${port}`);
  console.log(`📊 API endpoint: http://localhost:${port}/api/data`);
}

bootstrap();
