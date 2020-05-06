import { Module, forwardRef } from '@nestjs/common';

import { Fuel } from './fuel.entity';
import { FuelsController } from './fuels.controller';
import { FuelService } from './fuel.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Fuel]),
    ],
    controllers: [FuelsController],
    providers: [FuelService],
    exports: [FuelService],
})
export class FuelsModule { }
