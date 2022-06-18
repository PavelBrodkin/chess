import { POINT_LETTERS } from '../../constants';
import {
  BISHOP_MAX_MOVE_CELL_COUNT,
  END_BOARD_POINT_NUMBER,
  START_BOARD_POINT_NUMBER
} from './constants';
import { IPositionInfo } from '../../../../domain/entity/Board/structures/interfaces';

interface IParams {
  fromCell: string;
  toCell: string;
  positions: Record<string, IPositionInfo>;
}

export const canMoveBishop = ({
  fromCell,
  toCell,
  positions
}: IParams): boolean => {
  let [pointLetter, pointNumber] = fromCell.split('');

  const index = POINT_LETTERS.indexOf(pointLetter);

  const leftAvailableLetters = POINT_LETTERS.slice(0, index);
  const rightAvailableLetters = POINT_LETTERS.slice(
    index + 1,
    POINT_LETTERS.length
  );

  const leftTopAvailableLetters =
    +pointNumber < END_BOARD_POINT_NUMBER
      ? [...leftAvailableLetters]
          .reverse()
          .map(
            (letter, i) =>
              letter + (+pointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i)
          )
      : [];

  const leftBottomAvailableLetters =
    +pointNumber > START_BOARD_POINT_NUMBER
      ? [...leftAvailableLetters]
          .reverse()
          .map(
            (letter, i) =>
              letter + (+pointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i)
          )
      : [];

  const rightTopAvailableLetters =
    +pointNumber < END_BOARD_POINT_NUMBER
      ? [...rightAvailableLetters].map(
          (letter, i) =>
            letter + (+pointNumber + BISHOP_MAX_MOVE_CELL_COUNT + i)
        )
      : [];

  const rightBottomAvailableLetters =
    +pointNumber > START_BOARD_POINT_NUMBER
      ? [...rightAvailableLetters].map(
          (letter, i) =>
            letter + (+pointNumber - BISHOP_MAX_MOVE_CELL_COUNT - i)
        )
      : [];

  return [
    ...leftTopAvailableLetters,
    ...leftBottomAvailableLetters,
    ...rightTopAvailableLetters,
    ...rightBottomAvailableLetters
  ].includes(toCell);
};
