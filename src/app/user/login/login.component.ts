import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Username: '',
    Password: ''
  }
  user: Object

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.body);

        this.getCurrent()
        this.service.isLogin = true;
      },
      err => {
        this.service.isLogin = false;
        if (err.status == 400)
          this.toastr.error('Неверный логин или пароль.', 'Ошибка входа.');
        else
          console.log("ERROR: ", err);
      }
    )
  }

  getCurrent() {
    this.service.getCurrentUser().subscribe(
      (res: any) => {
        this.user = {
          id: res.id,
          name: res.name,
          title: res.title,
          email: res.email
        }
        this.service.userDetails = this.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('')
      })
  }
}