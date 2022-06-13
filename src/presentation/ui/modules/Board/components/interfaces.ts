import { IPositionInfo } from '../../../../../domain/entity/Board/structures/interfaces';

export interface IChessBoardProps {
  cellsMatrix: Array<string[]>;
  positions: Record<string, IPositionInfo>;
  movePiece: (lastPosition: string, nextPosition: string) => void;
}

export interface IChessBoardRowProps {
  row: string[];
  isEven: boolean;
  positions: Record<string, IPositionInfo>;
  movePiece: (lastPosition: string, nextPosition: string) => void;
}

export interface IChessBoardCellProps {
  cell: string;
  background: string;
  positions: Record<string, IPositionInfo>;
  movePiece: (lastPosition: string, nextPosition: string) => void;
}

export enum EPieceName {
  PAWN = 'pawn',
  ROOK = 'rook',
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  KING = 'king',
  QUEEN = 'queen'
}

export enum EPlayerName {
  WHITE = 'white',
  BLACK = 'black'
}
