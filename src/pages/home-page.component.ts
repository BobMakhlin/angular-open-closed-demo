import { Component } from '@angular/core';
import {
  DISCOUNT_TYPE_TOKEN,
  DiscountType,
} from '../discount/strategy/discount.type';
import { DiscountBannerComponent } from '../discount/discount-banner.component';

@Component({
  selector: 'home-page',
  template: `<discount-banner></discount-banner>`,
  providers: [
    { provide: DISCOUNT_TYPE_TOKEN, useValue: DiscountType.TotalAmount },
  ],
  standalone: true,
  imports: [DiscountBannerComponent],
})
export class HomePageComponent {}
