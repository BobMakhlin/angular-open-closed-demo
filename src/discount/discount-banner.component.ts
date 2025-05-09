import {
  DISCOUNT_STRATEGY_TOKEN,
  DiscountStrategy,
  provideDiscountStrategy,
} from './strategy/discount.strategy';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'discount-banner',
  template: `<div>Your discount is {{ discount }}%</div>`,
  providers: [provideDiscountStrategy],
  standalone: true,
})
export class DiscountBannerComponent {
  discount = 0;

  constructor(
    @Inject(DISCOUNT_STRATEGY_TOKEN) private strategy: DiscountStrategy
  ) {
    this.discount = this.strategy.calculateDiscount();
  }
}
