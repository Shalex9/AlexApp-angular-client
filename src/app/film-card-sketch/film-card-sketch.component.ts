import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'film-card-sketch',
  templateUrl: './film-card-sketch.component.html',
  styleUrls: ['./film-card-sketch.component.css']
})
export class FilmCardSketchComponent implements OnInit {
  @Input()
  filmId: string;
  filmItem: {} = {};
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    if (!this.filmId) { return; }
    this.filmService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
    })
  }
}
