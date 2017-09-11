import { Product } from './product';

/**
 * This is a bit of a gross way to do this.
 * This is assuming that in a real implementation all products
 * would actually have quality and sellIn values defined.
 *
 * If the randomization was actually a feature in real
 * implementation then I would re-think this, perhaps change
 * the values when returned as an Observable?
 */
function randomize() {
  return Math.floor(Math.random() * 50);
};

export const PRODUCTS: Product[] = [
  { name: 'Aged Brie', quality: randomize(), sellIn: randomize() },
  { name: 'Sulfarus the Legendary Sword', quality: randomize(), sellIn: undefined },
  { name: 'Backstage Pass', quality: randomize(), sellIn: randomize() },
  { name: 'Conjured Shield', quality: randomize(), sellIn: randomize() },
  { name: 'Regular Shield', quality: randomize(), sellIn: randomize() }
];
