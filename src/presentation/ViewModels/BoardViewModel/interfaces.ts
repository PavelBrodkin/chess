import { IPositionInfo } from '../../../domain/entity/Board/structures/interfaces';

export interface IBoardViewModel {
  init: () => void;
  cellsMatrix: Array<string[]>;
  positions: Record<string, IPositionInfo>;
  movePiece: (lastPosition: string, nextPosition: string) => void;
}
