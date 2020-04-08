import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-now-playing-films',
  templateUrl: './now-playing-films.component.html',
  styleUrls: ['./now-playing-films.component.css']
})
export class NowPlayingFilmsComponent implements OnInit {
  filmList: Object[] = []
  filmName: string;
  loading: boolean = false;
  totalResult: string;
  index: number = 1;
  newIndex: number;
  max: number;
  selectedView: string = "yCards";

  constructor(private service: FilmService) { }

  ngOnInit() {
    this.filmName = ""
    this.getNowPlayingFilms();
  }

  getNowPlayingFilms() {
    this.loading = true;
    this.service.getNowPlayingFilms().subscribe(data => {
      console.log(data);
      // this.filmList = data;
      this.loading = false;
    })
  }
}
