import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { convertDataToClient } from 'src/app/helpers/location-convert';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentLocation: number;

  constructor( private locationService: LocationsService, 
               private route: ActivatedRoute,
               private toastService: ToastService,
               private systemService: SystemService ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if(params.locationKey == 'current') {
        this.findMe();
      } else {
        this.currentLocation = params.locationKey;
      }
    })
  }

  findMe() {
    navigator.geolocation.watchPosition((position) => {
      navigator.geolocation.getCurrentPosition((position) => {
        let currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.locationService.searchGeoLocation(currentPosition)
        .subscribe((response) => {
          this.currentLocation = response.Key;
          this.systemService.changeLocationPermission(true);
        },
        (err) => {
          this.toastService.handleError(err);
          this.systemService.changeLocationPermission(false);
        })
      });
    }, 
    (error) => {
      this.toastService.handleError(error);
    });
  }
}
