import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { FuelService } from './fuel.service';
import { Fuel } from './fuel.entity';
import { CreateFuelDto } from './dto/createFuelDto';

@Controller('fuels')
export class FuelsController {
    constructor(
        private fuelService: FuelService,
    ) {}

    @Post()
    async create(@Body() fuelDto: CreateFuelDto): Promise<Fuel> {
        const newFuel = new Fuel();
        newFuel.name = fuelDto.name;
      //  newFuel.price = fuelDto.price;
     //   newFuel.station.id = fuelDto.station;

        return this.fuelService.create(newFuel);
    }

    @Get()
    async getAll(): Promise<Fuel[]> {
        return this.fuelService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Fuel> {
        return this.fuelService.getById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() fuel: Fuel): Promise<Fuel> {
        return this.fuelService.update(id, fuel);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Fuel> {
        return this.fuelService.delete(id);
    }
}
