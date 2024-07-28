import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { BusinessDevelopmentComponent } from './Components/business-development/business-development.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DistributionComponent } from './Components/distribution/distribution.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { FaqComponent } from './Components/faq/faq.component';

const routes: Routes = [
  {  path:'',  component:HomeComponent },
  {  path:'home',  component:HomeComponent },
  {  path:'about',  component:AboutComponent },
  {  path:'product',  component:ProductsComponent },
  {  path:'addtocart',  component:AddToCartComponent },
  {  path:'business',  component:BusinessDevelopmentComponent },
  {  path:'contracts',  component:ContactUsComponent },
  {  path:'distribution',  component:DistributionComponent },
  {  path:'login',  component:LoginComponent },
  {  path:'faq',  component:FaqComponent },
  {  path:'***',  component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
