import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Station } from 'src/stations/station.entity';
import { Fuel } from 'src/fuels/fuel.entity';
import { StationFuels } from 'src/station-fuels/station-fuels.entity';

export const dbconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'easy_fuel',
    entities: [
        Station,
        Fuel,
        StationFuels,
    ],
    synchronize: true,
};
