import { Component, OnInit, ViewChild } from '@angular/core';
import { CLOSE } from 'src/assets/variables';
import { LocationsService } from 'src/app/services/locations.service';
import { convertDataToClient } from 'src/app/helpers/location-convert';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputIcon = CLOSE;

  @ViewChild('inputSearch') inputSearch: any;
  allResults: ILocation[];

  constructor( private locationService: LocationsService, private router: Router, private toastService: ToastService ) { }

  ngOnInit() {
  }

  search() {
    this.locationService.searchLocation(this.inputSearch.nativeElement.value).subscribe((response) => {
      if(response) {
        this.allResults = [];
        response.map((result) => {
          let newData = convertDataToClient(result)
          this.allResults.push(newData);
        });
      }
    },
    (err) => {
      this.toastService.handleError(err);
    });
  }

  clearInput() {
    this.allResults = null;
    this.inputSearch.nativeElement.value ='';
  }

  resultSelect(result) {
    this.clearInput();
    this.router.navigate([`/main/${result.locationKey}`]);
  }

}
