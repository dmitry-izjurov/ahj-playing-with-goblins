export const positionsDOM = Array.from(document.querySelectorAll('.hole'));

// Функция, отвечающая за атаку
export function getAttack(positionsDOMArr) {
  const elementDead = document.getElementById('dead');
  const elementLost = document.getElementById('lost');
  positionsDOMArr.forEach((a) => {
    a.addEventListener('click', () => {
      if (a.classList.contains('hole_has-mole')) {
        elementDead.textContent = Number(elementDead.textContent) + 1;
      } else {
        elementLost.textContent = Number(elementLost.textContent) + 1;
      }
      if (Number(elementDead.textContent) === 10) {
        elementDead.textContent = 0;
        elementLost.textContent = 0;
        alert('Победа!');
      }
      if (Number(elementLost.textContent) === 5) {
        elementDead.textContent = 0;
        elementLost.textContent = 0;
        alert('Game over');
      }
    });
  });
}
