import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { LocationsService } from 'src/app/services/locations.service';
import { Router } from '@angular/router';
import { ALERT } from 'src/assets/variables';
import { SystemService } from 'src/app/services/system.service';
import { ISettings } from 'src/app/interfaces/ISettings';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  alertIcon = ALERT;

  favouriteList: ILocation[];
  settings: ISettings;

  constructor( private localStorage: LocalStorageService, private router: Router ) { }

  ngOnInit() {
    this.favouriteList = this.localStorage.getFromLocalStorage(this.localStorage.keys.LOCATIONS);
  }

  locationSelect(locationDetails: ILocation) {
    this.router.navigate([`/main/${locationDetails.locationKey}`]);
  }

}
