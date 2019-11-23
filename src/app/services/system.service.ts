import { Injectable } from '@angular/core';
import { ISettings } from '../interfaces/ISettings';
import { units, themes } from 'src/app/helpers/system-variables';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  settings: ISettings = {
    unit: units.CELSIUS,
    theme: themes.LIGHT,
    locationPermission: false
  }

  constructor() { }

  settingsChanged = new Subject();

  getSettings(): ISettings {
    return Object.assign(this.settings);
  }

  changeUnit() {
    if(this.settings.unit == units.FAHRENHEIT) {
      this.settings.unit = units.CELSIUS;
    } else {
      this.settings.unit = units.FAHRENHEIT;
    }
    this.settingsChanged.next();
  }

  changeLocationPermission(value: boolean) {
    this.settings.locationPermission = value;
    this.settingsChanged.next();
  }
}
