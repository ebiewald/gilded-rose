import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product',
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  /**
   * On init get the products from the product service.
  */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Update all the product sell in and quality values as we age by a day.
   *
   * We have some custom behavior based on product type.
   * - “Aged Brie” actually increases in quality the older it gets and it never degrades.
   * - “Sulfuras”, being a legendary item, never has to be sold and it never decreases in quality.
   * - “Backstage Pass” increases in quality as its sell in value approaches.
   *   Quality increases by 2 per day when there are 10 days or less,
   *   and by 3 per day when there are 5 days or less,
   *   but quality drops to 0 after the concert.
   * - “Conjured” items degrade in quality twice as fast as normal items.
  */
  ageOneDay(): void {
    for (let product of this.products) {

      // For all products we decrease the sellIn value.
      this.decreaseSellIn(product);

      // For specific products we decrease or increase the quality by particular intervals.
      switch (product.name) {
        case 'Aged Brie':
          this.increaseQuality(product);
          break;
        case 'Backstage Pass':
          if(product.sellIn > 10) {
            this.increaseQuality(product);
          } else if(product.sellIn <= 10 && product.sellIn > 5) {
            this.increaseQuality(product, 2);
          } else if(product.sellIn <= 5 && product.sellIn > 0) {
            this.increaseQuality(product, 3);
          } else if(product.sellIn === 0) {
            product.quality = 0;
          }
          break;
        case 'Conjured Shield':
          this.decraseQuality(product, 2);
          break;
        case 'Sulfarus the Legendary Sword':
          break;
        default:
          this.decraseQuality(product);
          break;
      }
    }
  }

  /**
   * Decrease sell in value.
   *
   * @param {object} product Product object.
   */
  private decreaseSellIn(product): void {
    if(product.sellIn > 0){
      product.sellIn--;
    }
  }

  /**
   * Increase quality value.
   *
   * @param {object} product Product object.
   * @param {number} interval Number with which to increase quality by.
   */
  private increaseQuality(product, interval = 1): void {
    product.quality = product.quality + interval;
  }

  /**
   * Decrease quality value.
   *
   * If the product's sell in date is not 0, degrade quality by interval.
   * If the product's sell in date is 0, degrade by twice the regular interval.
   *
   * @param {object} product Product object.
   * @param {number} interval Number with which to decrement quality by.
   */
  private decraseQuality(product, interval = 1): void {
    let valueBeforeSellIn = product.quality - interval;
    let valueAfterSellIn = product.quality - (interval * 2);

    if(product.sellIn > 0) {
      product.quality = (valueBeforeSellIn > 0) ? valueBeforeSellIn : 0;
    } else if(product.sellIn === 0) {
      product.quality = (valueAfterSellIn > 0) ? valueAfterSellIn : 0;
    }
  }
}
