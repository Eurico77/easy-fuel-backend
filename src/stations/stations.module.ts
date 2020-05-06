import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Station } from './station.entity';
import { StationsController } from './stations.controller';
import { StationService } from './station.service';
import { FuelsModule } from 'src/fuels/fuels.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Station]),
        FuelsModule,
    ],
    controllers: [StationsController],
    providers: [StationService],
    exports: [StationService],
})

export class StationsModule {}
