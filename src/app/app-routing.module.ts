import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { PopularFilmsComponent } from './films/popular-films/popular-films.component';
import { NowPlayingFilmsComponent } from './films/now-playing-films/now-playing-films.component';
import { TopRatedFilmsComponent } from './films/top-rated-films/top-rated-films.component';
import { UpcomingFilmsComponent } from './films/upcoming-films/upcoming-films.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'about', component: StartComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  // { path: 'search-film', component: SearchFilmComponent },
  { path: 'popular-films', component: PopularFilmsComponent },
  { path: 'now-playing-films', component: NowPlayingFilmsComponent },
  { path: 'top-rated-films', component: TopRatedFilmsComponent },
  { path: 'upcoming-films', component: UpcomingFilmsComponent },
  // { path: 'film-detail', component: FilmDetailComponent },
  // { path: 'favorites-films', component: FavoritesComponent },
  // { path: "login", component: LoginComponent },
  // { path: "card-detail", component: CardDetailComponent },
  // { path: "congratulation", component: CongratulationComponent },
  // { path: 'peoples/:id', component: PersonComponent },
  { path: '**', redirectTo: '/' }
];
// canActivate: [AuthGuard] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
