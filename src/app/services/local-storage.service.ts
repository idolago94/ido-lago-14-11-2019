import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILocation } from '../interfaces/Ilocation';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  listChanged = new Subject();
  
  keys = {
    LOCATIONS: 'locations'
  }

  saveToLocalStorage(key: string, value) {
    let newList = this.getFromLocalStorage(key);
    newList.push(value);
    localStorage.setItem(key, JSON.stringify(newList));
    this.listChanged.next();
  }

  removeFromLocalStorage(key: string, value: ILocation) {
    let newList: ILocation[] = this.getFromLocalStorage(key);
    newList = newList.filter(el => el.locationKey!=value.locationKey);
    localStorage.setItem(key, JSON.stringify(newList));
    this.listChanged.next();
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  checkIfInList(key: string, value: number) {
    let list: ILocation[] = this.getFromLocalStorage(key);
    let found = list.findIndex((el) => el.locationKey === value);
    if(found != -1) {
      return true;
    } return false;
  }
}
