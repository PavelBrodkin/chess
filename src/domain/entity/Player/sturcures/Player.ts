import { IPlayer } from './interfaces';
import { makeAutoObservable } from 'mobx';

export class Player implements IPlayer {
  placements = {
    pawn: [],
    rook: [],
    knight: [],
    bishop: [],
    queen: [],
    king: []
  };

  constructor() {
    makeAutoObservable(this);
  }
}
