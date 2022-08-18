import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';


import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { SignupComponent } from './Signup/Signup.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  { path:'home', component: HomeComponent },
  {path:'login',component:LoginComponent},
  { path: "products", component: AllProductsComponent },
  { path: "details/:id", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },
  {path:"**",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
