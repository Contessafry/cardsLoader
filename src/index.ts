/** @format */

import { render, toggleRenderList } from './utilities/render';
import './css/general.css';
import { utilityAddEventListener } from './utilities/addEventListener';
import { mapNodes } from './declarations';
import { handlerPushCard, toggleMarkCards } from './utilities/dataCard';
import { CardsClass } from './utilities/store';
import { cardGenerator } from './utilities/cardGeneretor';
import { utilityGetNode } from './utilities/getNode';

function startRender() {
  return `<div><div id="form">
  <input type="text" name="" id="imgInput">
  <input type="text" name="" id="titleInput">
  <input type="text" name="" id="descInput">
  <button id="addBtn">ADD</button>
  </div>
  <label for="switchCards" class="switchCards">
  <span id="favorites">⭐</span>
  <input type="checkbox" id="switchCards">
  </label>
  <div id="cardsList">${cardGenerator(cardApp.cardsArray)}</div>
  </div>`;
}
export const cardApp = new CardsClass();
window.onload = () => {
  render(mapNodes.root, startRender);
  toggleMarkCards();
  toggleRenderList();
  console.log(toggleMarkCards());
  utilityAddEventListener(mapNodes.addBtn, 'click', handlerPushCard);
};
