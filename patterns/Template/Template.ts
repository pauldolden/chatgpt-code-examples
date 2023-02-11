abstract class Game {
  abstract initialize(): void;
  abstract startPlay(): void;
  abstract endPlay(): void;

  play(): void {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }
}

class Cricket extends Game {
  initialize(): void {
    console.log("Cricket Game Initialized! Start playing.");
  }
  startPlay(): void {
    console.log("Cricket Game Started. Enjoy the game!");
  }
  endPlay(): void {
    console.log("Cricket Game Finished!");
  }
}

class Football extends Game {
  initialize(): void {
    console.log("Football Game Initialized! Start playing.");
  }
  startPlay(): void {
    console.log("Football Game Started. Enjoy the game!");
  }
  endPlay(): void {
    console.log("Football Game Finished!");
  }
}

const cricket = new Cricket();
cricket.play();

const football = new Football();
football.play();
