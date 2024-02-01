/** @format */

import { cardGenerator } from './utilities/cardGeneretor';
import { getCards } from './utilities/store';

export const mapNodes = {
  root: 'root',
  addBtn: 'addBtn',
  titleInput: 'titleInput',
  descInput: 'descInput',
  imgInput: 'imgInput',
  cardsList: 'cardsList',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];

export type cardComponent = {
  img: string;
  title: string;
  desc: string;
};

export const cardArray: cardComponent[] = getCards();
