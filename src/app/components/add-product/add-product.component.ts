import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('form')
  data!: NgForm;
  products =   [
    {
      "imgsrc": "https://www.montecarlo.in/images/ProductImages/medium/2220810964DN-1-30_2-Bit-024054-dIh.JPG",
      "title": "Marks & Spencer",
      "price": "2999",
      "quantity": 7,
      "gender": "Women",
      "category": "Jeans",
      "description": "Women's Regular Casual Pants",
      "id": 1
    },
    {
      "id": 2,
      "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/1-Qjm-052043-Hr0.JPG",
      "title": "Monte Carlo",
      "price": "725",
      "description": "Grey Printed Top",
      "quantity": 12,
      "gender": "Women",
      "category": "Top"
    }];

  constructor(private productsService:ProductsDataService, private route:Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.data.form.value);
    const productDetails= this.data.form.value;
    this.products.push(productDetails);
    return this.productsService.addProduct(this.data.form.value).subscribe(()=>{
      this.route.navigate(['products']);
    })
  }

  close(){
    this.route.navigate(['products']);
  }
}
