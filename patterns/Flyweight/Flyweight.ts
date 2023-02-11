interface Character {
  symbol: string;
  width: number;
  height: number;
  ascent: number;
  descent: number;
  pointSize: number;
}

class CharacterA implements Character {
  constructor(
    public symbol: string,
    public width: number,
    public height: number,
    public ascent: number,
    public descent: number,
    public pointSize: number
  ) {}
}

class CharacterFlyweightFactory {
  private characters: { [key: string]: Character } = {};

  getCharacter(symbol: string): Character {
    if (!this.characters[symbol]) {
      this.characters[symbol] = new CharacterA(symbol, 10, 20, 5, 5, 10);
    }

    return this.characters[symbol];
  }

  getLength() {
    return Object.keys(this.characters).length;
  }
}

const characterFlyweightFactory = new CharacterFlyweightFactory();

const a = characterFlyweightFactory.getCharacter("a");
const b = characterFlyweightFactory.getCharacter("b");
const c = characterFlyweightFactory.getCharacter("c");
const d = characterFlyweightFactory.getCharacter("d");

console.log(characterFlyweightFactory.getLength()); // 4
console.log(a === b); // false
console.log(a === c); // false
console.log(a === d); // false
