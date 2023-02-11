import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RazasModule } from './razas/razas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'aretado',
      entities: ['./**/*.entity.js'],
      synchronize: true,
    }),
    RazasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
