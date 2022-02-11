import { Directive, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductFormTemplateComponent } from './product-form-template/product-form-template.component';
import { PostResolver } from './resolvers/post.resolver';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { PipeModule } from './pipes/pipe.module';
import { DirectiveModule } from './directives/directive.module';
import { ComponentsModule } from './components/components.module';
// PostResolver resolver yapıları provide olarak modul tanıtılırlar
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductFormTemplateComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLocalStorageModule.forRoot(),
    PipeModule,
    DirectiveModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [PostResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
