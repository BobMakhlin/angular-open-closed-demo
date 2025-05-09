import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page.component';
import { PromotionsPageComponent } from './pages/promotions-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page.component';

@Component({
  selector: 'app-root',
  template: `
    Home page:
    <home-page></home-page>
    Promotions page:
    <promotions-page></promotions-page>
    Product details page:
    <product-details-page></product-details-page>
  `,
  imports: [
    HomePageComponent,
    PromotionsPageComponent,
    ProductDetailsPageComponent,
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
