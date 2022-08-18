import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];
  total: any = 0;
  constructor(private service: CartsService) {

  }

  ngOnInit(): void {
    this.getcartproducts();
  }

  getcartproducts() {
    if ("cart" in localStorage) {

      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);

    }
    this.cartTotal();
  }
  cartTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  PLUS(i:number) {
    this.cartProducts[i].quantity++;
    this.cartTotal();
     localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
  MINUS(i:number) {
    this.cartProducts[i].quantity--;
    this.cartTotal();
     localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  detect() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
     this.cartTotal();
  }
  deleteItem(i:number) {
    this.cartProducts.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
     this.cartTotal();
  }
  clearCart() {
    this.cartProducts = [];
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
     this.cartTotal();

  }
  //add cart to the backend
  AddCart() {
    let products = this.cartProducts.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
    })
    let Model={
      userId: 5,
      date: new Date(),
      products: products

    }
    this.service.createCart(Model).subscribe(res => {
 console.log(Model);
    } )

  }
}
