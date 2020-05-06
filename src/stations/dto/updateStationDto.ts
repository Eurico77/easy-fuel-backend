export class UpdateStationDto {
    readonly id: number;
    readonly name: string;
    readonly icon: string;
    readonly address: string;
    readonly fuels: number[];
    readonly latitude: string;
    readonly longitude: string;
}
