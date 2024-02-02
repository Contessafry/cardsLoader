import { cardApp } from '..';
import { cardComponent, mapNodes } from '../declarations';

import { cardGenerator } from './cardGeneretor';
import { utilityGetNode } from './getNode';

export function handlerPushCard() {
  let imgInput = utilityGetNode(mapNodes.imgInput) as HTMLInputElement;
  let titleInput = utilityGetNode(mapNodes.titleInput) as HTMLInputElement;
  let descInput = utilityGetNode(mapNodes.descInput) as HTMLInputElement;
  let cardsList = utilityGetNode(mapNodes.cardsList);
  let card: cardComponent = {
    id: cardApp.cardsArray.length + 1,
    img: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
    isMarked: false,
  };
  cardApp.addCard(card);
  cardApp.saveCards();
  cardsList.innerHTML = cardGenerator(cardApp.cardsArray);
  toggleMarkCards();
  console.log(toggleMarkCards());
}

export function toggleMarkCards() {
  let marked: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkboxSlide');
  let markers: NodeListOf<HTMLInputElement> = document.querySelectorAll('.markChecker');
  markers.forEach((checkbox, i) => {
    checkbox.addEventListener('click', () => {
      marked[i].textContent = checkbox.checked ? '⚪' : '⚫';
      marked[i].style.transform = checkbox.checked ? 'translateX(100%)' : 'translateX(0%)';

      cardApp.cardsArray[i].isMarked = checkbox.checked;
      cardApp.saveCards();
      cardApp.addMarkedcard();
      cardApp.saveMarkedCards();
    });
  });
}
