import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ILocation } from 'src/app/interfaces/Ilocation';
import { YELLOW_STAR } from 'src/assets/variables';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  yellowStarIcon = YELLOW_STAR;

  @Input() details: ILocation;
  isFavourite: boolean = false;

  constructor( private localStorageService: LocalStorageService ) { }

  ngOnInit() {
    this.isFavourite = this.localStorageService.checkIfInList(
      this.localStorageService.keys.LOCATIONS, this.details.locationKey
    );
  }

}
