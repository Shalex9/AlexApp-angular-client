import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'film-card-x',
  templateUrl: './film-card-x.component.html',
  styleUrls: ['./film-card-x.component.css']
})
export class FilmCardXComponent implements OnInit {
  @Input()
  filmId: string;
  filmItem: {} = {};
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    if (!this.filmId) { return; }
    this.filmService.getFilmById(this.filmId).subscribe(data => {
      // console.log("data", data)
      this.filmItem = data;
    })
  }
}
