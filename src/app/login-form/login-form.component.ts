import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  // FormGroup ile [formGroup] directive bir isim veriyoruz. bu sayede hangi form ile çalışacağımızı anladık

  // FormBuilder servisi ise ts dosyasında form tanımlayı FormGroup tipinde bir değer ile çalışmamıza imkan tanıyor.

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // this.productForm = new FormGroup({
    //   username : new FormControl('ali'),
    //   email : new FormControl('test@test.com')
    // });
    this.loginForm = this.formBuilder.group({
      username: ['mert', Validators.required],
      password: ['1234', Validators.required],
      grantType: ['password'],
    });
  }

  // form gönderildikten sonra api call
  onSubmit(event) {
    console.log('event', event);
    console.log('form', this.loginForm.value);
    console.log('form', this.loginForm);

    // form bilgilerine uyuluyorsa
    if (this.loginForm.valid) {
      const param = { ...this.loginForm.value };

      this.loginService.login(param).subscribe(
        (res) => {
          console.log('res', res);
          this.loginForm.reset();
          this.localStorageService.set('token', res['accessToken']);
          this.localStorageService.set('refresh', res['refreshToken']);
          this.router.navigateByUrl('home');
        },
        (err) => {
          console.log('err', err);
          alert(JSON.stringify(err));
          if (err.statusCode == 401) {
            // refresh token
          }
        }
      );
      // api call

      alert('Valid');
    } else {
      alert('Invalid');
    }
  }

  SetToken() {
    this.localStorageService.set('access_token', 'mert');
  }

  RemoveToken() {
    this.localStorageService.remove('access_token');
  }
}
