import { ILocation } from "../interfaces/Ilocation";

export const convertDataToClient = (data): ILocation => {
    return {
        name: data.LocalizedName,
        locationKey: data.Key
    };
}
