import CharactersCollection from './CharactersCollection';
import { Customer } from './Customer';
import CustomerCollection from './CustomerCollection';
import NamooSorter from './NamooSorter';
import NumbersCollection from './NumbersCollection';

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);
let charCollection = new CharactersCollection('TypeScript');
let customerCollection = new CustomerCollection([
  new Customer('A111', 'Kim'),
  new Customer('B111', 'Park'),
  new Customer('C111', 'Andy')
]);


// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter(charCollection);
let sorter = new NamooSorter(customerCollection);

sorter.sort();
console.log(sorter.printCollection());
