import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  createCart(Model:any) {
    return this.http.post('https://fakestoreapi.com/carts',Model)
  }
}
