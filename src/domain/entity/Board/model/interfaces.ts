import { IBoard, IPositionInfo } from '../structures/interfaces';

export interface IBoardModel {
  item: IBoard;
  setPositions: (positions: Record<string, IPositionInfo>) => void;
  updatePosition: (lastPosition: string, nextPosition: string) => void;
  mergeBoard: (board: Partial<IBoard>) => void;
}
