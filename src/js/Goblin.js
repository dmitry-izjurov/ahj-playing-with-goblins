import { positionsDOM } from './utils';

export default class Goblin {
  constructor() {
    this.position = undefined;
  }

  static add() {
    const positions = [];
    positionsDOM.forEach((a, i) => positions.push(i));
    let index = Math.floor(Math.random() * positions.length);

    if (this.position === undefined) {
      positionsDOM[index].classList.add('hole_has-mole');
      this.position = index;
    } else if (index === this.position) {
      positionsDOM[index].classList.remove('hole_has-mole');
      positions.splice(index, 1);
      index = Math.floor(Math.random() * positions.length);
      const newPosition = positions[index];
      positionsDOM[newPosition].classList.add('hole_has-mole');
      this.position = newPosition;
    } else {
      positionsDOM[this.position].classList.remove('hole_has-mole');
      positionsDOM[index].classList.add('hole_has-mole');
      this.position = index;
    }
  }
}
