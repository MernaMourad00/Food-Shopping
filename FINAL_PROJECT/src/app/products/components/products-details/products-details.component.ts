import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id: any
  data: any = {};
  constructor(private route: ActivatedRoute, private service:ProductsService) {

    this.id = this.route.snapshot.paramMap.get("id");
    this.route.queryParams
      .subscribe(params => {
        console.log(params, "params");

      })
    console.log(this.id);
  }

  getProductdetails() {
    this.service.getProductsById(this.id).subscribe(res => {
      this.data = res;
    })
  }




  ngOnInit(): void {
    console.log("here in product details......")
    this.getProductdetails();
  }

}
