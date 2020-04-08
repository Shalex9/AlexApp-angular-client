import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StartComponent } from './start/start.component';
import { FilmComponent } from './film/film.component';
import { FilmCardXComponent } from './film-card-x/film-card-x.component';
import { FilmCardYComponent } from './film-card-y/film-card-y.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularFilmsComponent } from './films/popular-films/popular-films.component';
import { TopRatedFilmsComponent } from './films/top-rated-films/top-rated-films.component';
import { NowPlayingFilmsComponent } from './films/now-playing-films/now-playing-films.component';
import { UpcomingFilmsComponent } from './films/upcoming-films/upcoming-films.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    StartComponent,
    FilmComponent,
    FilmCardXComponent,
    FilmCardYComponent,
    FilmDetailComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    PopularFilmsComponent,
    TopRatedFilmsComponent,
    NowPlayingFilmsComponent,
    UpcomingFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
