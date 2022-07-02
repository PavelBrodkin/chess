import { POINT_LETTERS } from '../../../constants';
import { KNIGHT_MAX_MOVE_CELL_COUNT } from '../constants';
import { IMovePiecePredicateParams } from '../interfaces';

export const canMoveKnight = ({
  toCell,
  fromCell
}: Pick<IMovePiecePredicateParams, 'fromCell' | 'toCell'>): boolean => {
  const [currentPointLetter, currentPointNumber] = fromCell.split('');

  const currentLetterIndex = POINT_LETTERS.indexOf(currentPointLetter);

  const leftTop =
    POINT_LETTERS[currentLetterIndex - KNIGHT_MAX_MOVE_CELL_COUNT] +
    (+currentPointNumber + 1);

  const rightTop =
    POINT_LETTERS[currentLetterIndex + KNIGHT_MAX_MOVE_CELL_COUNT] +
    (+currentPointNumber + 1);

  const leftBottom =
    POINT_LETTERS[currentLetterIndex - KNIGHT_MAX_MOVE_CELL_COUNT] +
    (+currentPointNumber - 1);

  const rightBottom =
    POINT_LETTERS[currentLetterIndex + KNIGHT_MAX_MOVE_CELL_COUNT] +
    (+currentPointNumber - 1);

  const topLeft =
    POINT_LETTERS[currentLetterIndex - 1] +
    (+currentPointNumber + KNIGHT_MAX_MOVE_CELL_COUNT);

  const topRight =
    POINT_LETTERS[currentLetterIndex + 1] +
    (+currentPointNumber + KNIGHT_MAX_MOVE_CELL_COUNT);

  const bottomLeft =
    POINT_LETTERS[currentLetterIndex - 1] +
    (+currentPointNumber - KNIGHT_MAX_MOVE_CELL_COUNT);

  const bottomRight =
    POINT_LETTERS[currentLetterIndex + 1] +
    (+currentPointNumber - KNIGHT_MAX_MOVE_CELL_COUNT);

  return [
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    leftTop,
    rightTop,
    leftBottom,
    rightBottom
  ].includes(toCell);
};
