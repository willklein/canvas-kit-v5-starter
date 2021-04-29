import { Coffee } from '../types';

export const splitCoffee = (coffee: Coffee[]) => {
  const range = coffee.length / 6;
  const newCoffee = coffee.slice(0, range);
  const popularCoffee = coffee.slice(range, range * 2);
  const staffCoffee = coffee.slice(range * 2, range * 3);

  return [newCoffee, popularCoffee, staffCoffee]
}
