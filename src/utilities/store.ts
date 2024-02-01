/*export function storeGetNode(nodeID: NodeID) {
    const node = document.getElementById(nodeID);
    if (!!node) return node;
    else throw new Error(`Element with id ${nodeID} not found`);
}*/

import { cardArray } from '../declarations';

export function saveCards() {
  localStorage.setItem('cards', JSON.stringify(cardArray));
}

export function getCards() {
  return JSON.parse(localStorage.getItem('cards') || '[]');
}
