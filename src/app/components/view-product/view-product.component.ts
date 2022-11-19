import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  prodId: any;
  productDetails:any;

  constructor(private route:ActivatedRoute, private prodService: ProductsDataService) { }

  ngOnInit(): void {
    this.prodId=this.route.snapshot.paramMap.get('prodId');
    this.getProductDetails(this.prodId);
  }

  getProductDetails(prodId: number){
    this.prodService.getProductDetails(prodId).subscribe((ret: any)=>{
      this.productDetails=ret;
      console.log(this.productDetails);
    })
  }

}
