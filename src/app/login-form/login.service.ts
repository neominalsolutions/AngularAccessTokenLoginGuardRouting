import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(param: any) {
    return this.httpClient.post('https://localhost:5001/api/tokens', param);
  }
}
