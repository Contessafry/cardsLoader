/*export function storeGetNode(nodeID: NodeID) {
    const node = document.getElementById(nodeID);
    if (!!node) return node;
    else throw new Error(`Element with id ${nodeID} not found`);
}*/

import { cardComponent } from '../declarations';

// export function saveCards() {
//   localStorage.setItem('cards', JSON.stringify(cardArray));
// }

// export function getCards() {
//   return JSON.parse(localStorage.getItem('cards') || '[]');
// }

export class CardsClass {
  cardsArray: cardComponent[] = this.getCards();
  markedCards: cardComponent[] = this.getMarkedCards();

  addCard(card: cardComponent) {
    this.cardsArray = [card, ...this.cardsArray];
  }

  addMarkedcard() {
    this.markedCards = this.cardsArray.filter(card => card.isMarked);
  }
  saveCards() {
    localStorage.setItem('cards', JSON.stringify(this.cardsArray));
  }
  saveMarkedCards() {
    localStorage.setItem('markedcards', JSON.stringify(this.markedCards));
  }
  getCards() {
    return JSON.parse(localStorage.getItem('cards') || '[]');
  }
  getMarkedCards() {
    return JSON.parse(localStorage.getItem('markedcards') || '[]');
  }
}
