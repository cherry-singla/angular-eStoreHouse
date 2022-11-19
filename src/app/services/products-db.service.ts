import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../components/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDbService {

  constructor() { }
  createDb(){
    let products =   [
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
      },
      {
        "id": 3,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/22208581-3-36_1-Bab-114750-kIk.JPG",
        "title": "Polo T-shirt",
        "description": "Polo Collar Neck T-Shirt",
        "price": "649",
        "quantity": 28,
        "gender": "Women",
        "category": "T-shirt"
      },
      {
        "id": 4,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/medium/2-CG7-013544-0oJ.JPG",
        "title": "Levi's Top",
        "description": "Women's Regular Top",
        "price": "549",
        "quantity": 3,
        "gender": "Women",
        "category": "Top"
      },
      {
        "id": 5,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/2220810956DN-1-30_1-8EJ-023823-BkE.JPG",
        "title": "Levi's Jeans",
        "description": "Women's Western Jeans",
        "price": "3372",
        "quantity": 11,
        "gender": "Women",
        "category": "Jeans"
      },
      {
        "id": 6,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/1-1p0-115835-Xvb.JPG",
        "title": "Monte Carlo",
        "description": "Women's Regular T-shirt",
        "price": "504",
        "quantity": 40,
        "gender": "Women",
        "category": "T-Shirt"
      },
      {
        "id": 7,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/2210872794DN-1-32_1-7tq-035523-zMx.JPG",
        "title": "Denim Jeans",
        "description": "1195 Denim Jeans",
        "price": "1250",
        "quantity": 98,
        "gender": "Men",
        "category": "Jeans"
      },
      {
        "id": 8,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/2210602149FS-2-38_1-QtM-053054-Yzy.JPG",
        "title": "Levi's",
        "price": "1139",
        "description": "Men Navy Blue Printed Shirt",
        "quantity": 34,
        "gender": "Men",
        "category": "Shirt"
      },
      {
        "id": 9,
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/ProductColor-51b198370d.JPG",
        "title": "Puma",
        "price": "890",
        "description": "Florecent Green Printed T-Shirt",
        "quantity": 34,
        "gender": "Men",
        "category": "T-shirt"
      },
      {
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/1%20(1)-HsX-035127-Uln.JPG",
        "title": "COTTONOPOLIS LONDON",
        "description": "Navy Blue Solid Polyester Tshirt",
        "price": "599",
        "id": 10,
        "quantity": 12,
        "gender": "Men",
        "category": "T-shirt"
      },
      {
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/2-UA3-045137-HfW.JPG",
        "title": "Monte Carlo",
        "description": "Monte Carlo men plain t-shirt",
        "price": "662",
        "id": 11,
        "quantity": 23,
        "gender": "Men",
        "category": "T-shirt"
      },
      {
        "imgsrc": "https://www.montecarlo.in/images/ProductImages/xlarge/2210872804DN-1-32_2-Vvd-032532-tdw.JPG",
        "title": "Monte Carlo",
        "description": "Men Grey Narrow Fit Denim",
        "price": "1300",
        "id": 12,
        "quantity": 56,
        "gender": "Men",
        "category": "Jeans"
      }
];
  

    return {products};
  }

  // genId(products: Product[]): number {
  //   return products.length > 0 ? Math.max(...products.map(product => product.prodId)) + 1 : 1;
  // }
}
