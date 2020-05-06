import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';

import { Station } from 'src/stations/station.entity';
import { StationFuels } from 'src/station-fuels/station-fuels.entity';

@Entity()
export class Fuel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => StationFuels, stationFuels => stationFuels.idFuel, { onDelete: 'CASCADE' })
    stationFuels: StationFuels[];
}
