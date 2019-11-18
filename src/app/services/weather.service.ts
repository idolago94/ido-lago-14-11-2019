import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl: string = 'https://dataservice.accuweather.com/forecasts/v1';
  API_KEY: string = 'Em5cfBiARlZWkSrZOWYm2Buvhk5XAsFB';

  constructor( private http: HttpClient ) { }

  getCurrentWeather(locationKey: number): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.weatherUrl}/hourly/1hour/${locationKey}?apikey=${this.API_KEY}`
    );
  }

  get5DayWeather(locationKey: number): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.weatherUrl}/daily/5day/${locationKey}?apikey=${this.API_KEY}`
    );
  }
}
