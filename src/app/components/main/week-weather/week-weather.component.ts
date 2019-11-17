import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { WeatherService } from 'src/app/services/weather.service';
import { IWeather } from 'src/app/interfaces/IWeather';
import { convertWeekWeather } from 'src/app/helpers/weather-convert';
import { LOADER } from 'src/assets/variables';
import { ISettings } from 'src/app/interfaces/ISettings';
import { SystemService } from 'src/app/services/system.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent implements OnInit, OnChanges {

  loaderIcon = LOADER;

  @Input() locationKey: number;
  weekWeather: IWeather[];
  settings: ISettings;

  constructor( private weatherService: WeatherService, private systemService: SystemService, private toastService: ToastService ) { }

  ngOnInit() {
    this.settings = this.systemService.getSettings();
    this.systemService.settingsChanged.subscribe(() => {
      this.settings = this.systemService.getSettings();
    })
  }

  ngOnChanges() {
    if(this.locationKey) {
      this.weatherService.get5DayWeather(this.locationKey).subscribe((response) => {
        this.weekWeather = [];
        response.DailyForecasts.map((el) => {
          this.weekWeather.push(convertWeekWeather(el));
        });
      },
      (err) => {
        this.toastService.handleError(err);
      });
    }
  }

}
