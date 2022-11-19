import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsData: any=[];
  constructor(private prodServ: ProductsDataService, private route:Router) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  //Sort-by implementation
  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.productsData = this.productsData.sort(
          (low: { price: number; }, high: { price: number; }) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.productsData = this.productsData.sort(
          (low: { price: number; }, high: { price: number; }) => high.price - low.price
        );
        break;
      }

      case 'Name': {
        this.productsData = this.productsData.sort(function (low: { title: string; }, high: { title: string; }) {
          if (low.title < high.title) {
            return -1;
          } else if (low.title > high.title) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        this.productsData = this.productsData.sort(
          (low: { price: number; }, high: { price: number; }) => low.price - high.price
        );
        break;
      }
    }
    return this.productsData;
  }

  //delete the product
  deleteProduct(id:number){
    this.prodServ.deleteProduct(id).subscribe((response)=>{
    this.getProductsList();
  });
  }

  getProductsList(){
    this.prodServ.getProductsList().subscribe((data)=>{
      this.productsData=data;  
  })
    
  }

}
