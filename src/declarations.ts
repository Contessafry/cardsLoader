/** @format */

export const mapNodes = {
  root: 'root',
  addBtn: 'addBtn',
  titleInput: 'titleInput',
  descInput: 'descInput',
  imgInput: 'imgInput',
  cardsList: 'cardsList',
  form: 'form',
  switchCards: 'switchCards',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];

export type cardComponent = {
  id: number;
  img: string;
  title: string;
  desc: string;
  isMarked: boolean;
};

//export const cardArray: cardComponent[] = getCards();
