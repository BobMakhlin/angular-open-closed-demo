import { Injectable } from '@angular/core';
import { DiscountStrategy } from './discount.strategy';

@Injectable()
export class ProductBundleDiscountStrategy implements DiscountStrategy {
  calculateDiscount(): number {
    return 75;
  }
}
