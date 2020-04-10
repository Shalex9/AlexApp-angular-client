import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
  featureList: Object[] = []
  data: any;
  currentFilmId: string
  favorite: any
  favoritesIdList: any
  getfavoritesIdList: any

  constructor(private http: HttpClient) {
  }

  private extractListData(res: any) {
    let body = res;
    // console.log(res)
    body = body.results || body;
    // console.log(body)
    return body || {};
  }
  // private extractGalleryData(res: Response) {
  //   console.log(res)
  //   // let body = res.json();
  //   let body = res.results || body;
  //   return body;
  // }
  // .pipe(tap(this.extractListData))
  // .map(this.extractListData)

  getNowPlayingFilms() {
    return this.http.get(this.movieUrl + "now_playing" + this.apiKey + this.language + "&page=1").pipe(
      map(this.extractListData)
    );
  }
  getFilmById(filmId: string) {
    return this.http.get(this.movieUrl + filmId + this.apiKey + this.language);
  }

  getSearchFilms(filmName: string) {
    filmName = this.filmName;
    console.log('this.filmName GET in Service:', this.filmName);
    // this.subject.next(this.filmName);
    return this.http.get(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=1")
  }
  // https://api.themoviedb.org/3/movie/popular?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU&page=1
}
