import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/products/product';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
    serverUrl: string= "https://estorehouse-161297-default-rtdb.firebaseio.com";
    employeesList:any;
    employeeEntry:number=0;
  constructor(private httpClient: HttpClient, private _authService: AuthService) { }

  public getProductsList(){
    return this.httpClient.get<any>(this.serverUrl+'/products-list.json').pipe(
      map(responseData=>{
        let productsArray=[];
        for(let key in responseData){
          if(responseData.hasOwnProperty(key))
            productsArray.push({prodId:key, ...responseData[key]});
        }
        console.log(productsArray);
        return productsArray;
      })
    );
    
  }

  public getProductDetails(productID:any){
    return this.httpClient.get(this.serverUrl+'/products-list/'+productID+'.json');
  }

  public addProduct(product: Product) {
   return this.httpClient.post(this.serverUrl+'/products-list.json',product);
  }

  public deleteProduct(productID:number){
   return this.httpClient.delete(this.serverUrl+'/products-list/'+productID+'.json');
  }

  public editProduct(product: Product){
    console.log(product);
    console.log(this.serverUrl+'/products-list/'+product.prodId+'.json');
   return this.httpClient.put(this.serverUrl+'/products-list/'+product.prodId+'.json',product);
  }
}
