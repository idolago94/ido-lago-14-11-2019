import { Component, OnInit } from '@angular/core';
import * as appRoutes from 'src/app/router/routes';
import { TARGET, SETTINGS, MENU, CLOSE } from 'src/assets/variables';
import { SystemService } from 'src/app/services/system.service';
import { ISettings } from 'src/app/interfaces/ISettings';
import { settingsKeys } from 'src/app/helpers/system-variables';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  appRoutes = appRoutes;
  settingsKeys = settingsKeys;
  targetIcon = TARGET;
  settingsIcon = SETTINGS;
  menuIcon = MENU;
  closeIcon = CLOSE;

  openSettings: boolean = false;
  mobileMenuOpen: boolean = false;

  settings: ISettings;

  constructor( private systemService: SystemService ) { }

  ngOnInit() {
    this.settings = this.systemService.getSettings();
    this.systemService.settingsChanged.subscribe(() => this.settings = this.systemService.getSettings());
  }

  settingsClick() {
    this.openSettings = !this.openSettings;
  }

  mobileMenuClick() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
