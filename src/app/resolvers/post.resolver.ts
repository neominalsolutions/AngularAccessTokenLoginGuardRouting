import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    console.log('resolver-begin');

    // mock data için of operatöörü verimizi Observable tipinde yapıyor.
    const data = [
      {
        id:1,
        name:'ali',
        surname:'tan'
      },
      {
        id:2,
        name:'can',
        surname:'tansu'
      }
    ]

    return of(data);
  }
}
