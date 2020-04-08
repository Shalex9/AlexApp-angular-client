import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Object

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        const newUser = {
          username: this.service.formModel.value.Title,
          password: this.service.formModel.value.Passwords.Password
        }

        this.service.formModel.reset();
        this.toastr.success('Новый пользователь создан!', 'Регистрация прошла успешно.');


        this.service.login(newUser).subscribe(
          (res: any) => {
            localStorage.setItem('token', res.body);

            this.getCurrent()
          },
          err => {
            console.log("ERROR: ", err);
          }
        )
      },
      err => {
        if (err.status == 403) {
          this.toastr.error('Логин уже импользуется в системе', 'Ошибка регистрации.');
        }
        else {
          this.toastr.error('Неопознанная ошибка', 'Ошибка регистрации.')
        }
      });
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
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('/home')
      })
  }
}