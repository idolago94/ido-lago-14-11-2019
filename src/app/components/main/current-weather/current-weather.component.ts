import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { IWeather } from 'src/app/interfaces/IWeather';
import { convertCurrentWeather } from 'src/app/helpers/weather-convert';
import { LOADER, STAR, YELLOW_STAR } from 'src/assets/variables';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ISettings } from 'src/app/interfaces/ISettings';
import { SystemService } from 'src/app/services/system.service';
import { LocationsService } from 'src/app/services/locations.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnChanges {

  starIcon: string = STAR;

  @Input() locationKey: number;
  locationName: string;
  currentWeather: IWeather;
  settings: ISettings;
  loaderIcon: string = LOADER;

  constructor( private weatherService: WeatherService, 
               private localStorageService: LocalStorageService,
               private systemService: SystemService,
               private locationService: LocationsService,
               private toastService: ToastService ) { }

  ngOnInit() {
    this.settings = this.systemService.getSettings();
    this.systemService.settingsChanged.subscribe(() => {
      this.settings = this.systemService.getSettings();
    })
  }

  ngOnChanges() {
    if(this.locationKey) {
      if(this.localStorageService.checkIfInList(this.localStorageService.keys.LOCATIONS, this.locationKey)) {
        this.starIcon = YELLOW_STAR;
      } else {
        this.starIcon = STAR;
      }

      this.locationService.getLocationByKey(this.locationKey).subscribe((response) => {
        this.locationName = response.LocalizedName;
      },
      (err) => {
        this.toastService.handleError(err);
      });
      this.weatherService.getCurrentWeather(this.locationKey).subscribe((response) => {
        this.currentWeather = convertCurrentWeather(response[0]);
      },
      (err) => {
        this.toastService.handleError(err);
      });
    }
  }

  locationSelect() {
    let locationDetails = {
      name: this.locationName,
      locationKey: this.locationKey
    }
    if(this.starIcon == STAR) {
      this.starIcon = YELLOW_STAR;
      this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, locationDetails);
    } else {
      this.starIcon = STAR;
      this.localStorageService.removeFromLocalStorage(this.localStorageService.keys.LOCATIONS, locationDetails);
    }
  }

}
