import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: Array<any>=[]
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.http.get<Array<any>>("http://localhost:8089/products")
      .subscribe({
        next : data=>{
          this.products=data;
        },
        error : err => {
          console.log(err)
        }

      })
  }


  handleCheckPoduct(product: any) {
    product.checked=!product.checked;
  }
}
