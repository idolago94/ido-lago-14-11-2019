import { Routes } from "@angular/router";
import * as routes from './routes';
import { MainComponent } from "../components/main/main.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: `/${routes.MAIN}/current`, pathMatch: 'full' },
    { path: `${routes.MAIN}`, redirectTo: `/${routes.MAIN}/current`, pathMatch: 'full' },
    { path: `${routes.MAIN}/:locationKey`, component: MainComponent },
    { path: routes.FAVOURITE, component: FavoritesComponent }
]