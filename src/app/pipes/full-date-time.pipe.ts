import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullDateTime'
})
export class FullDateTimePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    let day = value.getDate();
    let month = value.getMonth()+1;
    let dayName = '';
    switch (value.getDay()) {
      case 0: dayName = 'Sun';
      case 1: dayName = 'Mon';
      case 2: dayName = 'Tue';
      case 3: dayName = 'Wed';
      case 4: dayName = 'Thu';
      case 5: dayName = 'Fri';
      case 6: dayName = 'Sat';
    }
    return `${day}/${month}  ${dayName}`;
  }

}
