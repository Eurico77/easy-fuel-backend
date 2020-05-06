import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Fuel } from './fuel.entity';

@Injectable()
export class FuelService {
    constructor(
        @InjectRepository(Fuel)
        private readonly fuelRepository: Repository<Fuel>,
    ) {}

    async create(fuel: Fuel) {
        return await this.fuelRepository.save(fuel);
    }

    async getAll() {
        return await this.fuelRepository.find();
    }

    async getById(id: number) {
        return await this.fuelRepository.findOne(id);
    }

    async update(id: number, fuel: Fuel) {
        const fuelToUpdate = await this.fuelRepository.findOne(id);
        fuelToUpdate.name = fuel.name;
        // fuelToUpdate.price = fuel.price;

        await this.fuelRepository.save(fuelToUpdate);

        return fuelToUpdate;
    }

    async delete(id: number) {
        const fuelToDelete = await this.fuelRepository.findOne(id);
        return await this.fuelRepository.remove(fuelToDelete);
    }
}
