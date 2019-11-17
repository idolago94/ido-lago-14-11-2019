import { IWeather } from "../interfaces/IWeather";

export const convertCurrentWeather = (data): IWeather => {
    return {
        temperature: data.Temperature.Value,
        dateTime: new Date(data.DateTime)
    }
}

export const convertWeekWeather = (data): IWeather => {
    return {
        temperature: data.Temperature.Minimum.Value,
        maxTemperature: data.Temperature.Maximum.Value,
        dateTime: new Date(data.Date)
    }
}
