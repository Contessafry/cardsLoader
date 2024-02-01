/** @format */

import { render } from './utilities/render';
import './css/general.css';
import { utilityAddEventListener } from './utilities/addEventListener';
import { mapNodes } from './declarations';
import { handlerPushCard } from './utilities/handlers';

function startRender() {
  return `<div>
  <input type="text" name="" id="imgInput">
  <input type="text" name="" id="titleInput">
  <input type="text" name="" id="descInput">
  <button id="addBtn">ADD</button>
  <div id="cardsList"></div>
  </div>`;
}

window.onload = () => {
  render('root', startRender);
  utilityAddEventListener(mapNodes.addBtn, 'click', handlerPushCard);
};
