import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StationFuelsService } from './station-fuels.service';
import { StationFuels } from './station-fuels.entity';
import { StationFuelsController } from './station-fuels.controller';
import { FuelsModule } from 'src/fuels/fuels.module';
import { StationsModule } from 'src/stations/stations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StationFuels]),
    FuelsModule,
    StationsModule,
  ],
  controllers: [StationFuelsController],
  providers: [StationFuelsService],
  exports: [StationFuelsService],
})
export class StationFuelsModule { }
