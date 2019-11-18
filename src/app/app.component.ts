import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { LocationsService } from './services/locations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
}
