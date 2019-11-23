import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';
import { ISettings } from 'src/app/interfaces/ISettings';
import { units } from 'src/app/helpers/system-variables';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  unitOptions = units;

  constructor( private systemService: SystemService ) { }

  settings: ISettings;

  ngOnInit() {
    this.settings = this.systemService.getSettings();
    this.systemService.settingsChanged.subscribe(() => {
      this.settings = this.systemService.getSettings();
    })
  }

  unitClick() {
    this.systemService.changeUnit();
  }

}
