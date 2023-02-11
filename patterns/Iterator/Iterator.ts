interface Iterator<T> {
  hasNext: () => boolean;
  next: () => T;
}

class Collection<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getIterator(): Iterator<T> {
    let i = 0;
    return {
      hasNext: () => i < this.items.length,
      next: () => {
        const item = this.items[i];
        i++;
        return item;
      },
    };
  }
}

const collection = new Collection<number>();
collection.addItem(1);
collection.addItem(2);
collection.addItem(3);

const iterator = collection.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
