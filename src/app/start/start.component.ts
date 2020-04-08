import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
  }

}
