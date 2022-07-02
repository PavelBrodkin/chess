import { POINT_LETTERS } from '../../../constants';
import {
  BISHOP_MAX_MOVE_CELL_COUNT,
  END_BOARD_POINT_NUMBER,
  START_BOARD_POINT_NUMBER
} from '../constants';
import { IMovePiecePredicateParams } from '../interfaces';
import { isCollide } from '../helpers';

export const canMoveBishop = ({
  fromCell,
  toCell,
  positions,
  player
}: Omit<IMovePiecePredicateParams, 'piece'>): boolean => {
  let [currentPointLetter, currentPointNumber] = fromCell.split('');

  const currentLetterIndex = POINT_LETTERS.indexOf(currentPointLetter);

  const leftAvailableLetters = POINT_LETTERS.slice(0, currentLetterIndex);
  const rightAvailableLetters = POINT_LETTERS.slice(
    currentLetterIndex + 1,
    POINT_LETTERS.length
  );

  const leftTop =
    +currentPointNumber < END_BOARD_POINT_NUMBER
      ? [...leftAvailableLetters]
          .reverse()
          .map((letter, i) =>
            +currentPointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i >
            END_BOARD_POINT_NUMBER
              ? ''
              : letter + (+currentPointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i)
          )
          .filter((letter) => Boolean(letter))
      : [];

  const leftBottom =
    +currentPointNumber > START_BOARD_POINT_NUMBER
      ? [...leftAvailableLetters]
          .reverse()
          .map((letter, i) =>
            +currentPointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i > 0
              ? letter + (+currentPointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i)
              : ''
          )
          .filter((letter) => Boolean(letter))
      : [];

  const rightTop =
    +currentPointNumber < END_BOARD_POINT_NUMBER
      ? [...rightAvailableLetters]
          .map((letter, i) =>
            +currentPointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i >
            END_BOARD_POINT_NUMBER
              ? ''
              : letter + (+currentPointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i)
          )
          .filter((letter) => Boolean(letter))
      : [];

  const rightBottom =
    +currentPointNumber > START_BOARD_POINT_NUMBER
      ? [...rightAvailableLetters]
          .map((letter, i) =>
            +currentPointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i > 0
              ? letter + (+currentPointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i)
              : ''
          )
          .filter((letter) => Boolean(letter))
      : [];

  return [
    ...isCollide(leftTop, positions, player),
    ...isCollide(leftBottom, positions, player),
    ...isCollide(rightTop, positions, player),
    ...isCollide(rightBottom, positions, player)
  ].includes(toCell);
};
