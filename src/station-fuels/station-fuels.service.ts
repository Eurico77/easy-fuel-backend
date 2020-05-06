import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StationFuels } from "./station-fuels.entity";
import { Repository } from "typeorm";

@Injectable()
export class StationFuelsService {
  constructor(
    @InjectRepository(StationFuels)
    private readonly fuelRepository: Repository<StationFuels>
  ) {}

  async create(stationFuels: StationFuels) {
    return await this.fuelRepository.save(stationFuels);
  }

  async getAll() {
    return this.fuelRepository.find();
  }

  async getById(id: number) {
    return await this.fuelRepository.findOne({ where: { id } });
  }

  async update(id: number, stationFuels: StationFuels) {

    await this.fuelRepository.update({ id }, stationFuels);
    return await this.fuelRepository.findOne({ id })
   
    /* Metodo convencional
    const fuelsToUpdate = await this.fuelRepository.findOne(id);
    fuelsToUpdate.id = stationFuels.id;

    await this.fuelRepository.save(fuelsToUpdate);

    return fuelsToUpdate;
    */
  }

  async delete(id: number) {
      await this.fuelRepository.delete({ id })
      return {deleted: true}
  }
}
