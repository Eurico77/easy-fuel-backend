import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { StationService } from './station.service';
import { Station } from './station.entity';
import { CreateStationDto } from './dto/createStationDto';
import { FuelService } from 'src/fuels/fuel.service';
import { decodeBase64Image, fs, pathUrl } from 'src/utils/utils';
import { join } from 'path';
import { UpdateStationDto } from './dto/updateStationDto';

@Controller('stations')
export class StationsController {
    constructor(
        private stationService: StationService,
        private fuelService: FuelService,
    ) { }

    @Post()
    async create(@Body() stationDto: CreateStationDto): Promise<Station> {
        const newStation = new Station();
        newStation.name = stationDto.name;

        const imgName = newStation.name.replace(/[^A-Z0-9]+/ig, '_');
        const newIcon = decodeBase64Image(stationDto.icon);

        // tslint:disable-next-line:no-console
        (await fs).writeFile(join(process.cwd() + '/static/images/station/') + imgName + '.png', newIcon.data, (err) => console.log(err));
        newStation.icon = pathUrl + '/images/station/' + imgName + '.png';

        newStation.address = stationDto.address;
        // newStation.fuels = [];
        newStation.latitude = stationDto.latitude;
        newStation.longitude = stationDto.longitude;
        newStation.status = true;

        // const fuelsPromises = stationDto.fuels.map(
        //     async (id: number) => {
        //         const fuel = await this.fuelService.getById(id);
        //         if (fuel !== null ) {
        //             newStation.fuels.push(fuel);
        //         }
        //     });

        // await Promise.all(fuelsPromises);

        return this.stationService.create(newStation);
    }

    @Get()
    async getAll(): Promise<Station[]> {
        return this.stationService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Station> {
        return this.stationService.getById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() stationDto: UpdateStationDto): Promise<Station> {
        const stationToUpdate = await this.stationService.getById(id);
        stationToUpdate.name = stationDto.name;
        stationToUpdate.address = stationDto.address;
        // stationToUpdate.fuels = [];

        // const fuelsPromises = stationDto.fuels.map(
        //     async (idFuel: number) => {
        //         const fuel = await this.fuelService.getById(idFuel);
        //         if (fuel !== null ) {
        //             stationToUpdate.fuels.push(fuel);
        //         }
        //     });

       // await Promise.all(fuelsPromises);

        return this.stationService.update(id, stationToUpdate);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Station> {
        return this.stationService.delete(id);
    }
}
