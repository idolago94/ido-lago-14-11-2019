import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ToastService } from './toast.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  url: string = 'https://dataservice.accuweather.com/locations/v1';

  constructor( private http: HttpClient ) { }

  searchLocation(searchWord): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.url}/cities/autocomplete?apikey=${environment.API_KEY}&q=${searchWord}`
    );
  }

  searchGeoLocation(position): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.url}/cities/geoposition/search?apikey=${environment.API_KEY}&q=${position.lat},${position.lng}`
    );
  }

  getLocationByKey(key: number): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.url}/${key}?apikey=${environment.API_KEY}`
    );
  }
}
