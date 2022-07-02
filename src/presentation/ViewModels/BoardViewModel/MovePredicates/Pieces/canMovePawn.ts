import { POINT_LETTERS } from '../../../constants';
import { IMovePiecePredicateParams } from '../interfaces';
import { EPlayerName } from '../../../../ui/modules/Board';
import {
  BLACK_PAWN_INITIAL_CELL_POINT_NUMBER,
  WHITE_PAWN_INITIAL_CELL_POINT_NUMBER,
  PAWN_MAX_INITIAL_CELL_COUNT,
  PAWN_MAX_MOVE_CELL_COUNT
} from '../constants';

// Todo тот уникальный ход
// Todo кушать по диоганали
// Todo коллизия (переходит через фигуры на данный момент)

export const canMovePawn = ({
  fromCell,
  toCell,
  player
}: Pick<
  IMovePiecePredicateParams,
  'fromCell' | 'toCell' | 'player'
>): boolean => {
  let [currentPointLetter, currentPointNumber] = fromCell.split('');

  const currentLetterIndex = POINT_LETTERS.indexOf(currentPointLetter);

  const moves = [];

  switch (player) {
    case EPlayerName.WHITE:
      +currentPointNumber === WHITE_PAWN_INITIAL_CELL_POINT_NUMBER
        ? moves.push(
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber + PAWN_MAX_MOVE_CELL_COUNT),
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber + PAWN_MAX_INITIAL_CELL_COUNT)
          )
        : moves.push(
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber + PAWN_MAX_MOVE_CELL_COUNT)
          );
      break;

    case EPlayerName.BLACK:
      +currentPointNumber === BLACK_PAWN_INITIAL_CELL_POINT_NUMBER
        ? moves.push(
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber - PAWN_MAX_MOVE_CELL_COUNT),
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber - PAWN_MAX_INITIAL_CELL_COUNT)
          )
        : moves.push(
            POINT_LETTERS[currentLetterIndex] +
              (+currentPointNumber - PAWN_MAX_MOVE_CELL_COUNT)
          );
      break;

    default:
      return false;
  }

  return moves.includes(toCell);
};
