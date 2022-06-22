import { positionsDOM, elementLost } from './utils';
import Inspector from './Inspector';

export default class Goblin {
  constructor() {
    this.position = undefined;
  }

  add() {
    Inspector.findLost();
    const positions = [];
    positionsDOM.forEach((a, i) => positions.push(i));
    let index = Math.floor(Math.random() * positions.length);

    if (this.position === undefined) {
      positionsDOM[index].classList.add('hole_has-mole');
      positionsDOM[index].classList.add('lost');
      this.position = index;
    } else if (index === this.position) {
      positionsDOM[index].classList.remove('hole_has-mole');
      positions.splice(index, 1);
      index = Math.floor(Math.random() * positions.length);
      const newPosition = positions[index];
      positionsDOM[newPosition].classList.add('hole_has-mole');
      this.position = newPosition;
      positionsDOM[newPosition].classList.add('lost');
    } else {
      positionsDOM[this.position].classList.remove('hole_has-mole');
      positionsDOM[index].classList.add('hole_has-mole');
      positionsDOM[index].classList.add('lost');
      this.position = index;
    }

    if (Number(elementLost.textContent) === 5) {
      this.position = undefined;
      elementLost.textContent = 0;
    }
  }
}
