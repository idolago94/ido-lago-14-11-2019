import { Component, OnInit, Input } from '@angular/core';
import { WEATHER } from 'src/assets/variables';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  weatherIcon = WEATHER;

  @Input() mobile: boolean;

  constructor() { }

  ngOnInit() {
  }

}
