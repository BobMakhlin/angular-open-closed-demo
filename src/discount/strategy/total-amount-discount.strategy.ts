import { Injectable } from '@angular/core';
import { DiscountStrategy } from './discount.strategy';

@Injectable()
export class TotalAmountDiscountStrategy implements DiscountStrategy {
  calculateDiscount(): number {
    return 55;
  }
}
