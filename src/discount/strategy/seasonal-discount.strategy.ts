import { Injectable } from '@angular/core';
import { DiscountStrategy } from './discount.strategy';

@Injectable()
export class SeasonalDiscountStrategy implements DiscountStrategy {
  calculateDiscount(): number {
    return 20;
  }
}
