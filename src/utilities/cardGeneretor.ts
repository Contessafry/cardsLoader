import { cardApp } from '..';
import { cardComponent } from '../declarations';
import { toggleMarkCards } from './dataCard';

export function cardGenerator(cards: cardComponent[]) {
  //let cards: cardComponent[] = getCards();

  let parsedCards = cards
    .map(card => {
      return `<div class="card">
    <div>
    <img src="${card.img}"/>
    </div>
    <h2 class="card-title">${card.title}</h2>
    <p class="card-desc">${card.desc}</p>
    <label for="${card.id}" class="checkboxCustom"> <span style="${card.isMarked ? 'transform: translateX(100%);' : ''} class="checkboxSlide">${card.isMarked ? '⚪' : '⚫'}</span>
    <input type="checkbox" " id="${card.id}" class="markChecker" ${card.isMarked ? 'checked' : ''}/>
    </label>
    </div> `;
    })
    .join('');
  return parsedCards;
}
// all evento di click sulla checkbox card.ismarked = true e poi savemarkedcards
