import { cardArray, cardComponent, mapNodes } from '../declarations';
import { cardGenerator } from './cardGeneretor';
import { utilityGetNode } from './getNode';
import { saveCards } from './store';

export function handlerPushCard() {
  let imgInput = utilityGetNode(mapNodes.imgInput) as HTMLInputElement;
  let titleInput = utilityGetNode(mapNodes.titleInput) as HTMLInputElement;
  let descInput = utilityGetNode(mapNodes.descInput) as HTMLInputElement;
  let cardsList = utilityGetNode(mapNodes.cardsList);
  let card: cardComponent = {
    img: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
  };
  cardArray.push(card);
  saveCards();
  cardsList.innerHTML = cardGenerator();
}
