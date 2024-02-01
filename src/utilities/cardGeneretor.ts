import { cardComponent } from '../declarations';
import { getCards } from './store';

export function cardGenerator() {
  let cards: cardComponent[] = getCards();
  let parsedCards = cards
    .map(card => {
      return `<div>
    <div>
    <img src="${card.img}"/>
    </div>
    <h2>${card.title}</h2>
    <p>${card.desc}</p>
    </div> `;
    })
    .join('');
  return parsedCards;
}
