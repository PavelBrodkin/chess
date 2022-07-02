import { IMovePiecePredicateParams } from '../interfaces';
import { canMoveBishop } from './canMoveBishop';
import { canMoveRook } from './canMoveRook';

export const canMoveQueen = ({
  fromCell,
  toCell,
  player,
  positions
}: Omit<IMovePiecePredicateParams, 'piece'>) => {
  return (
    canMoveBishop({ fromCell, toCell, player, positions }) ||
    canMoveRook({ fromCell, toCell, player, positions })
  );
};
