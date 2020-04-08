import { Component, OnInit } from '@angular/core';
import { FilmService } from '../shared/film.service';
import { ROUTESSEARCH, ROUTES } from '../sidebar/sidebar-routes.config';
import { Location } from '@angular/common';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filmList: Object
  filmName: string
  loading: boolean = false
  private listTitles: any[]
  routeSearch: any
  location: Location
  amountFavorites: number = 0

  constructor(location: Location, private router: Router, private userService: UserService, private service: FilmService) {
    this.location = location;
  }
  getFilmsBySearch(filmName: string) {
    this.filmName = filmName;
    this.loading = true;
    this.service.getSearchFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.loading = false;
    })
  }
  setFilmsBySearch(filmName: string) {
    this.filmName = filmName;
    console.log('this.filmName', this.filmName)
    // this.getFilmsBySearch();
    // this.service.getSearchFilms(this.filmName).subscribe(data => {
    //     this.filmList = data;
    // })
  }
  // @ViewChild("name", { read: ElementRef })
  // nameFilm: ElementRef;
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.routeSearch = ROUTESSEARCH;
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return this.routeSearch.title;
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userService.isLogin = false;
    this.userService.userDetails = null;
    this.router.navigate(['/user/login']);
  }
}

