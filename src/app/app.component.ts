import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shalex - Test Angular8'
  constructor(private router: Router, private service: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.service.isLogin = true;
    }
  }

  // onLogout() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   this.service.isLogin = false;
  //   this.service.userDetails = null;
  //   this.router.navigate(['/user/login']);
  // }
}
