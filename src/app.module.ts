import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RazasModule } from './razas/razas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LotesModule } from './lotes/lotes.module';
import { VacasModule } from './vacas/vacas.module';
import { GestionModule } from './gestion/gestion.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

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
    UsuariosModule,
    LotesModule,
    VacasModule,
    GestionModule,
    AutenticacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
