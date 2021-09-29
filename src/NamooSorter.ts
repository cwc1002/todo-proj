import NumbersCollection from './NumbersCollection';

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class NamooSorter {
  constructor(private collection: Sortable) {}

  // get getCollection() {
  //   return this.collection;
  // }

  sort(): void {
    const { length } = this.collection;

    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - i - 1; j++) {
        if(this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }
      }
    }
  }

  printCollection() {
    console.log(this.collection);
  };

}

export default NamooSorter;