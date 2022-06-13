import type { IBoardModel } from './interfaces';
import { IBoard } from '../structures/interfaces';
import { Board } from '../structures/Board';
import { makeAutoObservable } from 'mobx';

export class BoardModel implements IBoardModel {
  get item(): IBoard {
    return this._item;
  }

  constructor(private _item: IBoard = new Board()) {
    makeAutoObservable(this);
  }

  setPositions(positions: IBoard['positions']): void {
    this._item.positions = positions;
  }

  updatePosition(fromCell: string, toCell: string): void {
    this._item.positions[toCell] = {
      player: this._item.positions[fromCell].player,
      piece: this._item.positions[fromCell].piece
    };

    this._item.positions[fromCell] = {
      player: '',
      piece: ''
    };
  }

  mergeBoard(board: Partial<IBoard>): void {
    this._item = {
      ...this._item,
      ...board
    };
  }
}
