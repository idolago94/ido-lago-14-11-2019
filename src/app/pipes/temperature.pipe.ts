import { Pipe, PipeTransform } from '@angular/core';
import { units } from 'src/app/helpers/system-variables';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(args == units.CELSIUS) {
      let celsiusValue = (value-32)*5/9;
      celsiusValue = Math.round( celsiusValue * 10 ) / 10;
      return `${celsiusValue}°C`;
    }
    return `${value}°F`;
  }

}
