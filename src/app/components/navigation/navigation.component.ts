import { Component, OnInit } from '@angular/core';
import * as appRoutes from 'src/app/router/routes';
import { TARGET, SETTINGS, MENU, CLOSE } from 'src/assets/variables';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  appRoutes = appRoutes;
  targetIcon = TARGET;
  settingsIcon = SETTINGS;
  menuIcon = MENU;
  closeIcon = CLOSE;

  openSettings: boolean = false;
  mobileMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  settingsClick() {
    this.openSettings = !this.openSettings;
  }

  mobileMenuClick() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
