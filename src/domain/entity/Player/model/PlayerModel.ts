import { IPlayer } from '../sturcures/interfaces';
import { Player } from '../sturcures/Player';
import { makeAutoObservable } from 'mobx';
import { IPlayerModel } from './interfaces';

export class PlayerModel implements IPlayerModel {
  get item() {
    return this._item;
  }
  constructor(private _item: IPlayer = new Player()) {
    makeAutoObservable(this);
  }

  setPiecePlacement(placements: IPlayer['placements']) {
    this._item.placements = placements;
  }
}
