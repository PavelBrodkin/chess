import { POINT_LETTERS, POINT_NUMBERS } from '../../../constants';
import { IMovePiecePredicateParams } from '../interfaces';
import { KING_MAX_MOVE_CELL_COUNT } from '../constants';

export const canMoveKing = ({
  fromCell,
  toCell
}: Pick<IMovePiecePredicateParams, 'fromCell' | 'toCell'>) => {
  let [currentPointLetter, currentPointNumber] = fromCell.split('');

  const currentLetterIndex = POINT_LETTERS.indexOf(currentPointLetter);
  const currentNumberIndex = POINT_NUMBERS.indexOf(+currentPointNumber);

  const topAvailablePointNumber = POINT_NUMBERS.slice(
    +currentNumberIndex + KING_MAX_MOVE_CELL_COUNT,
    POINT_NUMBERS.length
  )[0];

  const bottomAvailablePointNumber = POINT_NUMBERS.slice(
    +currentNumberIndex > 0
      ? currentNumberIndex - KING_MAX_MOVE_CELL_COUNT
      : currentNumberIndex,
    POINT_NUMBERS.length
  )[0];

  const rightAvailablePointLetter = POINT_LETTERS.slice(
    currentLetterIndex + KING_MAX_MOVE_CELL_COUNT,
    POINT_LETTERS.length
  )[0];

  const leftAvailablePointLetter = POINT_LETTERS.slice(
    currentLetterIndex > 0
      ? currentLetterIndex - KING_MAX_MOVE_CELL_COUNT
      : currentLetterIndex,
    POINT_LETTERS.length
  )[0];

  return [
    currentPointLetter + topAvailablePointNumber,
    currentPointLetter + bottomAvailablePointNumber,
    rightAvailablePointLetter + currentPointNumber,
    rightAvailablePointLetter + topAvailablePointNumber,
    rightAvailablePointLetter + bottomAvailablePointNumber,
    leftAvailablePointLetter + currentPointNumber,
    leftAvailablePointLetter + topAvailablePointNumber,
    leftAvailablePointLetter + bottomAvailablePointNumber
  ].includes(toCell);
};
