import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Station } from './station.entity';

@Injectable()
export class StationService {
    constructor(
        @InjectRepository(Station)
        private readonly stationRepository: Repository<Station>,
    ) {}

    async create(station: Station) {
        return await this.stationRepository.save(station);
    }

    async getAll() {
        return await this.stationRepository.find();
    }

    async getById(id: number) {
        return await this.stationRepository.findOne(id);
    }

    async update(id: number, station: Station) {
        const stationToUpdate = await this.stationRepository.findOne(id);
        stationToUpdate.name = station.name;
        stationToUpdate.icon = station.icon;
        stationToUpdate.address = station.address;
        //stationToUpdate.fuels = station.fuels;

        await this.stationRepository.save(stationToUpdate);

        return stationToUpdate;
    }

    async delete(id: number) {
        const stationToDelete = await this.stationRepository.findOne(id);
        return await this.stationRepository.remove(stationToDelete);
    }
}
