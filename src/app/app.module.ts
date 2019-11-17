import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router/app-routes';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/main/search/search.component';
import { CurrentWeatherComponent } from './components/main/current-weather/current-weather.component';
import { WeekWeatherComponent } from './components/main/week-weather/week-weather.component';
import { FullDateTimePipe } from './pipes/full-date-time.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ToggleComponent } from './components/navigation/toggle/toggle.component';
import { SingleLocationComponent } from './components/favorites/single-location/single-location.component';
import { ToastComponent } from './components/toast/toast.component';
import { LogoComponent } from './components/logo/logo.component';
import { ResultComponent } from './components/main/search/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoritesComponent,
    NavigationComponent,
    SearchComponent,
    CurrentWeatherComponent,
    WeekWeatherComponent,
    FullDateTimePipe,
    TemperaturePipe,
    ToggleComponent,
    SingleLocationComponent,
    ToastComponent,
    LogoComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
