import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {path: '', component: AuthComponent}, 
  {path:'home', component: HomeComponent},
  {path: 'sign-in', component: AuthComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'products', component: ProductsComponent},
  {path: 'products/add-product', component: AddProductComponent},
  {path: 'products/details/:prodId', component: ViewProductComponent},
  {path: 'products/edit/:prodId', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}