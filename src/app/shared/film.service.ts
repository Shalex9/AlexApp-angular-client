import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  movieUrl: string = "https://api.themoviedb.org/3/movie/";
  actorsUrl: string = "https://api.themoviedb.org/3/credit/"
  searchUrl: string = "https://api.themoviedb.org/3/search/movie";
  apiKey: string = "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade";
  language: string = "&language=ru-RU";
  include: string = "&include_adult=false";
  pageIndex: number = 1;
  title: string
  filmName: string;
  filmItem: object
  data: any;
  currentFilmId: string
  favorite: any
  favoritesIdList: any
  getfavoritesIdList: any

  constructor(private http: HttpClient) {
  }

  // private extractListData(res: Response) {
  //   let body = res;
  //   body = body.results || body;
  //   return body || {};
  // }
  // private extractGalleryData(res: Response) {
  //   let body = res.json();
  //   return body;
  // }
  // .pipe(tap(this.extractListData))

  getNowPlayingFilms() {
    return this.http.get(this.movieUrl + "now_playing" + this.apiKey + this.language + "&page=1");
  }

  getSearchFilms(filmName: string) {
    filmName = this.filmName;
    console.log('this.filmName GET in Service:', this.filmName);
    // this.subject.next(this.filmName);
    return this.http.get(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=1");
  }
  // https://api.themoviedb.org/3/movie/popular?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU&page=1
}
