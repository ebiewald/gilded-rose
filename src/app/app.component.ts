import { Component } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products = PRODUCTS;
}

const PRODUCTS: Product[] = [
  { name: 'Aged Brie', quality: 40, sellIn: 6  },
  { name: 'Sulfarus the Legendary Sword', quality: 2, sellIn: 10 },
  { name: 'Backstage Pass', quality: 26, sellIn: 15 },
  { name: 'Conjured Shield', quality: 18, sellIn: 1 },
  { name: 'Regular Shield', quality: 33, sellIn: 25 }
];
