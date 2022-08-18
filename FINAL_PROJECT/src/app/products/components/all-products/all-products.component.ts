import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  cartProducts: any[] = [];


  constructor(private service:ProductsService ) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
       console.log(this.products)
    }, error => {
      alert('error !');
    }
    )
  }

  // JSON.stringfy() yb3t l data zy ma ana b3thalo
  //JSON.parse() yst2bl data zy ma ana mkhznha

  addToCart(event: any) {

    if ("cart" in localStorage) {

      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exist) {
        alert('already in cart')
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
   }
     else {
       this.cartProducts.push(event);
       localStorage.setItem("cart", JSON.stringify(this.cartProducts));
     }

  }

}
