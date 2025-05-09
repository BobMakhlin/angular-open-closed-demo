This example demonstrates the Open/Closed Principle in Angular using the Strategy Pattern.

The DiscountBannerComponent doesn’t contain any discount logic. Instead, it depends on a DiscountStrategy that's injected via Angular Dependency Injection.

Each page (cart, product, promo) provides a different DISCOUNT_TYPE token, and a factory selects the appropriate strategy based on that value.

This keeps the component clean, testable, and closed for modification — new discount types can be added without touching the component.
