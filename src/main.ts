import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    //We are going to enable CORS(Cross-origin resource sharing) in order to enable
  //frontend which will run on port 3000, to be able to consume the backend code.

  app.enableCors({
    origin: ["http://localhost:3000"]
  });
  
  await app.listen(8000);
}
bootstrap();
