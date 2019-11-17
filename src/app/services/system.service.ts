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
    theme: themes.LIGHT
  }

  constructor() { }

  settingsChanged = new Subject();

  getSettings() {
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
}
