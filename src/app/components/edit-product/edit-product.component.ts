import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    prodId:any;
    productDetails:any;
    updatedProduct:any;
    gender!:string;
    @ViewChild('form')
  data!: NgForm;

  constructor(private prodService: ProductsDataService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.prodId=this.route.snapshot.paramMap.get('prodId'); 
    this.getProductDetails(this.prodId);
  }

  getProductDetails(prodId:number){
    this.prodService.getProductDetails(prodId).subscribe((ret)=>{
      this.productDetails=ret;
      this.gender= this.productDetails.gender.toLowerCase();
      console.log(document.getElementById(`rb-${this.gender}`));
    })
  }
  updateProductDetails(){
     this.updatedProduct= this.data.form.value;
     this.updatedProduct.prodId= this.prodId;
    this.prodService.editProduct(this.updatedProduct).subscribe(() =>{
      this.router.navigate(['products']);
    })
  }
  close(){
    this.router.navigate(['products']);
  }
}
