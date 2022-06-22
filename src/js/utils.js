export const positionsDOM = Array.from(document.querySelectorAll('.hole'));
export const elementDead = document.getElementById('dead');
export const elementLost = document.getElementById('lost');

// Функция, отвечающая за атаку
export function getAttack(positionsDOMArr) {
  positionsDOMArr.forEach((a) => {
    a.addEventListener('click', () => {
      if (a.classList.contains('hole_has-mole')) {
        elementDead.textContent = Number(elementDead.textContent) + 1;
      }
      if (Number(elementDead.textContent) === 10) {
        elementDead.textContent = 0;
        alert('Победа!');
      }
    });
  });
}
