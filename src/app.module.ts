import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { FuelsModule } from './fuels/fuels.module';
import { dbconfig } from './config/database';
import { StationFuelsModule } from './station-fuels/station-fuels.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbconfig),
    StationsModule,
    FuelsModule,
    StationFuelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
