export type IPiece = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';

export type TPlacements = Record<IPiece, string[]>;

export interface IPlayer {
  placements: TPlacements;
}
