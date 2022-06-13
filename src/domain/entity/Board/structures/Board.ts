import { IBoard } from './interfaces';
import { makeAutoObservable } from 'mobx';

export class Board implements IBoard {
  positions = {};

  constructor() {
    makeAutoObservable(this);
  }
}
