import { cardArray, cardComponent, mapNodes } from '../declarations';
import { utilityGetNode } from './getNode';

export function handlerPushCard() {
  let imgInput = utilityGetNode(mapNodes.imgInput) as HTMLInputElement;
  let titleInput = utilityGetNode(mapNodes.titleInput) as HTMLInputElement;
  let descInput = utilityGetNode(mapNodes.descInput) as HTMLInputElement;
  let card: cardComponent = {
    img: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
  };
  cardArray.push(card);
}
