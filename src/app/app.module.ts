import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BusinessDevelopmentComponent } from './Components/business-development/business-development.component';
import { AboutComponent } from './Components/about/about.component';
import { DistributionComponent } from './Components/distribution/distribution.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { FaqComponent } from './Components/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddToCartComponent,
    ProductsComponent,
    ContactUsComponent,
    BusinessDevelopmentComponent,
    AboutComponent,
    DistributionComponent,
    LoginComponent,
    PagenotfoundComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule, BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
