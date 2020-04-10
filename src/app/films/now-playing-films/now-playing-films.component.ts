import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-now-playing-films',
  templateUrl: './now-playing-films.component.html',
  styleUrls: ['./now-playing-films.component.css']
})
export class NowPlayingFilmsComponent implements OnInit {
  filmList: Object
  filmName: string;
  loading: boolean = false;
  totalResult: string;
  index: number = 1;
  newIndex: number;
  max: number;
  selectedView: string = "yCards";

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmName = ""
    this.getNowPlayingFilms();
  }
  // isFilmListEmpty(): boolean {
  //   return this.filmList && !this.filmList.length;
  // }
  setNewCardView(newCardView: string) {
    this.selectedView = newCardView;
  }
  getNowPlayingFilms() {
    this.loading = true;
    this.filmService.getNowPlayingFilms().subscribe(data => {
      this.filmList = data;
      this.loading = false;
    })
  }
  // getFilmsBySearch(filmName: string) {
  //   this.filmName = filmName;
  //   this.loading = true;
  //   this.filmService.getSearchFilms(this.filmName).subscribe(data => {
  //     this.filmList = data;
  //     this.loading = false;
  //   })
  // }
  // addNowPlayingFilms(index: number, newIndex: number) {
  //   this.loading = true;
  //   this.max = this.filmList.length - 1;
  //   if (this.index < this.max) { this.newIndex = this.index++; }
  //   this.filmService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = [...this.filmList, ...data]
  //     this.loading = false;
  //   }
  //   )
  // }
  // private next(filmName: string, index: number, newIndex: number) {
  //   this.max = this.filmList.length - 1;
  //   if (this.index < this.max) { this.newIndex = this.index++; }
  //   this.filmService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = data;
  //   })
  // }
  // private prev(filmName: string, index: number, newIndex: number) {
  //   this.max = this.filmList.length - 1;
  //   if (this.index > 1) { this.index-- }
  //   this.filmService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = data;
  //   })
  // }
}
