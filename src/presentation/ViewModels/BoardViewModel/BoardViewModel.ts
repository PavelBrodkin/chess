import { inject, injectable } from 'tsyringe';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import DATA_SOURCE from '../../../bootstrap/configs/di/dataSource';
import USE_CASE from '../../../bootstrap/configs/di/usecase';
import { IBoardViewModel } from './interfaces';
import type { IBoardModel } from '../../../domain/entity/Board/model/interfaces';
import type { IMovePieceUseCase } from '../../../domain/usecase/Board/interface';
import { calculateCellsMatrix, getPiecePlacementDictionary } from '../helpers';

@injectable()
export class BoardViewModel implements IBoardViewModel {
  get cellsMatrix() {
    return this._cellsMatrix;
  }

  get positions() {
    return this.model.item.positions;
  }

  constructor(
    @inject(DATA_SOURCE.BoardModel) private model: IBoardModel,
    @inject(USE_CASE.MovePiece) private movePieceUseCase: IMovePieceUseCase
  ) {
    makeObservable<IBoardViewModel, 'model'>(this, {
      model: observable,
      positions: computed,
      init: action.bound,
      movePiece: action.bound
    });
  }

  init(): void {
    this._cellsMatrix = calculateCellsMatrix();
    const placementDictionary = getPiecePlacementDictionary();
    this.model.setPositions(placementDictionary);
  }

  movePiece(fromCell: string, toCell: string): void {
    this.movePieceUseCase.execute(this.model.item, fromCell, toCell);
  }

  private _cellsMatrix: Array<string[]> = [];
}
