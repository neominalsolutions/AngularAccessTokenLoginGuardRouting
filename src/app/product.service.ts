import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductV1() {
    return this.httpClient.get<any[]>('https://localhost:5001/api/products/v1');
  }
}
