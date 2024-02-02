import { cardApp } from '..';
import { NodeID, mapNodes } from '../declarations';
import { cardGenerator } from './cardGeneretor';
import { toggleMarkCards } from './dataCard';
import { utilityGetNode } from './getNode';

export function render(nodeID: NodeID, component: () => string) {
  const node = utilityGetNode(nodeID);
  node.innerHTML = component();
}
export function toggleRenderList() {
  utilityGetNode(mapNodes.switchCards).addEventListener('click', () => {
    let favoritesIcon = document.getElementById('favorites') as HTMLElement;
    favoritesIcon.textContent = favoritesIcon.textContent == '⭐' ? '📰' : '⭐';
    let formStyle = utilityGetNode(mapNodes.form).style;
    formStyle.display = formStyle.display === 'none' ? 'flex' : 'none';
    let cardlist = utilityGetNode(mapNodes.cardsList);
    if (formStyle.display === 'none') cardlist.innerHTML = cardGenerator(cardApp.markedCards);
    else cardlist.innerHTML = cardGenerator(cardApp.cardsArray);
    toggleMarkCards();
  });
}
