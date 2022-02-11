import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  fakeLogin = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('authenticated-guard');
    // burada bir kontrol süreci var bu süreç başarılı ise true değil ise false dönüyor
    // localStorage da kullanıcı token bilgisi varsa autheticated bizim için değilse zaten bu sayfaya giriş

    const token = this.localStorageService.get('token');
    console.log('check-token', token);

    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
