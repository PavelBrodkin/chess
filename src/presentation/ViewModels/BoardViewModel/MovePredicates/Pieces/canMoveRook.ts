import { IMovePiecePredicateParams } from '../interfaces';
import { POINT_LETTERS, POINT_NUMBERS } from '../../../constants';
import { isCollide } from '../helpers';

export const canMoveRook = ({
  fromCell,
  toCell,
  player,
  positions
}: Omit<IMovePiecePredicateParams, 'piece'>) => {
  let [currentPointLetter, currentPointNumber] = fromCell.split('');

  const currentLetterIndex = POINT_LETTERS.indexOf(currentPointLetter);
  const currentNumberIndex = POINT_NUMBERS.indexOf(+currentPointNumber);

  const topAvailablePointNumbers = POINT_NUMBERS.slice(
    currentNumberIndex + 1,
    POINT_NUMBERS.length
  );

  const bottomAvailablePointNumbers = POINT_NUMBERS.slice(
    0,
    currentNumberIndex
  );

  const leftAvailablePointLetters = POINT_LETTERS.slice(0, currentLetterIndex);

  const rightAvailablePointLetters = POINT_LETTERS.slice(
    currentLetterIndex + 1,
    POINT_LETTERS.length
  );

  const left = [...leftAvailablePointLetters]
    .reverse()
    .map((letter) => letter + currentPointNumber);

  const right = [...rightAvailablePointLetters].map(
    (letter) => letter + currentPointNumber
  );

  const bottom = [...bottomAvailablePointNumbers]
    .reverse()
    .map((number) => currentPointLetter + number);

  const top = [...topAvailablePointNumbers].map(
    (number) => currentPointLetter + number
  );

  return [
    ...isCollide(left, positions, player),
    ...isCollide(right, positions, player),
    ...isCollide(top, positions, player),
    ...isCollide(bottom, positions, player)
  ].includes(toCell);
};
