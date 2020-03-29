import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  environmentUrl = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.environmentUrl = environment.apiUrl;
  }

  formModel = this.fb.group({
    Title: ['', Validators.required],
    Email: ['', Validators.email],
    Username: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      Title: this.formModel.value.Title,
      Email: this.formModel.value.Email,
      Username: this.formModel.value.Username,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.environmentUrl + '/register', body);
  }

  login(formData: object) {
    return this.http.post(this.environmentUrl + '/token', formData, { observe: 'response', responseType: 'text' });
  }

  getCurrentUser() {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    return this.http.get(this.environmentUrl + "/users/current", { headers: tokenHeader });
  }
}
