import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
    data: {
      title: 'home page',
    },
    resolve: {
      post: PostResolver,
    },
    canActivate: [AuthenticatedGuard], // sayfa authenticate olan kullanıcılar için veya spesific bir scope, role sahip kullanıcılar için bir sayfa kontrol mekanizmasıdır.
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
