import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[ProductService]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // observable subscribe componenten ayrılırken kaldırma. destruct işlemi
  }

  ngOnInit(): void {
    this.subscription = this.productService
      .getProductV1()
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  logout() {
    this.localStorageService.remove('token');
    this.router.navigateByUrl('/login');
  }
}
