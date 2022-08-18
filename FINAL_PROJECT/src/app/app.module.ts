import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { LoginModule } from './Login/Login.module';
import { SignupModule } from './Signup/Signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    ProductsModule,
    FormsModule,
    CartsModule,
    ReactiveFormsModule,
    LoginModule,SignupModule
  ],
  exports:[ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
