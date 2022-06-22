import { elementDead, elementLost } from './utils';

export default class Inspector {
  constructor() {
    this.find = undefined;
  }

  check() {
    this.find = 1;
    Array.from(document.querySelectorAll('.hole')).forEach((a) => {
      // eslint-disable-next-line no-param-reassign
      a.onclick = (e) => {
        const find = e.target.classList.contains('hole_has-mole');
        if (find) {
          e.target.classList.remove('lost');
          e.target.classList.remove('hole_has-mole');
        }
      };
    });
  }

  static findLost() {
    Array.from(document.querySelectorAll('.hole')).forEach((a) => {
      if (a.classList.contains('lost')) {
        a.classList.remove('lost');
        elementLost.textContent = Number(elementLost.textContent) + 1;
        if (Number(elementLost.textContent) === 5) {
          elementDead.textContent = 0;
          elementLost.textContent = 0;
          alert('Game Over!');
        }
      }
    });
  }
}
