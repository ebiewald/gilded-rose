import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  products = PRODUCTS;

  /**
   * On Init we sell all of the products to have
   * random sell in and quality values.
  */
  ngOnInit(): void {
    for (let product of this.products) {
      product.sellIn = Math.floor(Math.random() * 50);
      product.quality = Math.floor(Math.random() * 50);
    }
  }

  /**
   * Update all the product sell in and quality values.
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
  updateValues(): void {
    for (let product of this.products) {
      this.decreaseSellIn(product);
    }
  }

  /**
   * Decrease sell in value.
   */
  private decreaseSellIn(product): void {
    if(product.sellIn > 0){
      product.sellIn--;
    }
  }
}

const PRODUCTS: Product[] = [
  { name: 'Aged Brie', quality: 40, sellIn: 6  },
  { name: 'Sulfarus the Legendary Sword', quality: 2, sellIn: 10 },
  { name: 'Backstage Pass', quality: 26, sellIn: 15 },
  { name: 'Conjured Shield', quality: 18, sellIn: 1 },
  { name: 'Regular Shield', quality: 33, sellIn: 25 }
];
