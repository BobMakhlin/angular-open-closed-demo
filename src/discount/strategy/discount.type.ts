import { InjectionToken } from '@angular/core';

export enum DiscountType {
  ProductBundleDiscount,
  SeasonalDiscount,
  TotalAmount,
}

export const DISCOUNT_TYPE_TOKEN = new InjectionToken<DiscountType>(
  'DISCOUNT_TYPE'
);
