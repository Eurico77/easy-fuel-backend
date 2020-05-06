import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, ManyToMany } from 'typeorm';

import { Fuel } from 'src/fuels/fuel.entity';
import { StationFuels } from 'src/station-fuels/station-fuels.entity';

@Entity()
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon: string;

    @Column()
    address: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @OneToMany(type => StationFuels, stationFuels => stationFuels.idStation, { onDelete: 'CASCADE' })
    stationFuels: StationFuels[];

    @Column()
    status: boolean;
}
