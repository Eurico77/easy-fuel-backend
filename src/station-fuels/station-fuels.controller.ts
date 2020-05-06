import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';

import { StationFuelsService } from './station-fuels.service';
import { StationFuels } from './station-fuels.entity';
import { FuelService } from 'src/fuels/fuel.service';
import { StationService } from 'src/stations/station.service';
import { Fuel } from 'src/fuels/fuel.entity';

@Controller('station-fuels')
export class StationFuelsController {
    constructor(
        private stationFuelsService: StationFuelsService,
        private fuelService: FuelService,
        private stationService: StationService,
    ) {}

    @Post()
    async create(@Body() stationFuels: StationFuels): Promise<StationFuels> {
        const newFuel = await this.fuelService.getById(1);
        const newStation = await this.stationService.getById(1);

        const newStationFuel = new StationFuels();
        newStationFuel.idFuel = newFuel;
        newStationFuel.idStation = newStation;
        newStationFuel.price = stationFuels.price;

        return this.stationFuelsService.create(newStationFuel);
    }

    @Get()
    async getAll(): Promise<StationFuels[]> {
        return this.stationFuelsService.getAll()

    }

    @Get('id:')
    async getById(@Param('id') id: number ): Promise<StationFuels> {
        return this.stationFuelsService.getById(id)   
    }

    @Put('id:')
    async update(@Param('id')id: number, @Body() stationFuels: StationFuels ): Promise<StationFuels>{
        return this.stationFuelsService.update(id, stationFuels);

    }

    @Delete('id:')
    async delete(@Param('id') id: number){
        return this.stationFuelsService.delete(id);
    }
}
