import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts() {
   return this.http.get('https://warm-sea-99266.herokuapp.com/product/getAll');

    //return this.http.get('https://fakestoreapi.com/products');
  }

  getProductsById(id:number) {

    return this.http.get('https://warm-sea-99266.herokuapp.com/product/getById/'+id)
//return this.http.get('https://fakestoreapi.com/products/'+id)
  }




}
