import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { WeatherService } from 'src/app/services/weather.service';
import { IWeather } from 'src/app/interfaces/IWeather';
import { convertCurrentWeather } from 'src/app/helpers/weather-convert';
import { SystemService } from 'src/app/services/system.service';
import { ISettings } from 'src/app/interfaces/ISettings';
import { LOADER } from 'src/assets/variables';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.scss']
})
export class SingleLocationComponent implements OnInit {
  loaderIcon = LOADER;

  @Input() locationDetails: ILocation;
  currentWeather: IWeather;
  settings: ISettings;

  constructor( private weatherService: WeatherService, private systemService: SystemService, private toastService: ToastService ) { }

  ngOnInit() {
    this.settings = this.systemService.getSettings();
    this.weatherService.getCurrentWeather(this.locationDetails.locationKey).subscribe((response) => {
      this.currentWeather = convertCurrentWeather(response[0]);
    },
    (err) => {
      this.toastService.handleError(err);
    });

    this.systemService.settingsChanged.subscribe(() => {
      this.settings = this.systemService.getSettings();
    })
  }

}
