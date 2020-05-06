import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, ManyToOne } from 'typeorm';

import { Fuel } from 'src/fuels/fuel.entity';
import { Station } from 'src/stations/station.entity';
import { type } from 'os';

@Entity()
export class StationFuels {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Fuel, idFuel => idFuel.stationFuels)
    idFuel: Fuel;

    @ManyToOne(() => Station, idStation => idStation.stationFuels)
    idStation: Station;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    price: number;

}
