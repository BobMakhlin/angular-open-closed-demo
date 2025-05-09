import { InjectionToken } from '@angular/core';
import { DISCOUNT_TYPE_TOKEN, DiscountType } from './discount.type';
import { ProductBundleDiscountStrategy } from './product-bundle-discount.strategy';
import { SeasonalDiscountStrategy } from './seasonal-discount.strategy';
import { TotalAmountDiscountStrategy } from './total-amount-discount.strategy';

export interface DiscountStrategy {
  calculateDiscount(): number;
}

export const DISCOUNT_STRATEGY_TOKEN = new InjectionToken<DiscountStrategy>(
  'DISCOUNT_STRATEGY'
);

const discountStrategyFactory = (discountType: DiscountType) => {
  switch (discountType) {
    case DiscountType.TotalAmount:
      return new TotalAmountDiscountStrategy();
    case DiscountType.SeasonalDiscount:
      return new SeasonalDiscountStrategy();
    case DiscountType.ProductBundleDiscount:
      return new ProductBundleDiscountStrategy();
  }
};

export const provideDiscountStrategy = {
  provide: DISCOUNT_STRATEGY_TOKEN,
  useFactory: discountStrategyFactory,
  deps: [DISCOUNT_TYPE_TOKEN],
};
