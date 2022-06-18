import { POINT_LETTERS } from '../../constants';
import { KNIGHT_MAX_MOVE_CELL_COUNT } from './constants';

interface IParams {
  fromCell: string;
  toCell: string;
}

export const canMoveKnight = ({ toCell, fromCell }: IParams): boolean => {
  const [pointLetter, pointNumber] = fromCell.split('');

  const index = POINT_LETTERS.indexOf(pointLetter);

  const leftTop =
    POINT_LETTERS[index - KNIGHT_MAX_MOVE_CELL_COUNT] + (+pointNumber + 1);

  const rightTop =
    POINT_LETTERS[index + KNIGHT_MAX_MOVE_CELL_COUNT] + (+pointNumber + 1);

  const leftBottom =
    POINT_LETTERS[index - KNIGHT_MAX_MOVE_CELL_COUNT] + (+pointNumber - 1);

  const rightBottom =
    POINT_LETTERS[index + KNIGHT_MAX_MOVE_CELL_COUNT] + (+pointNumber - 1);

  const topLeft =
    POINT_LETTERS[index - 1] + (+pointNumber + KNIGHT_MAX_MOVE_CELL_COUNT);

  const topRight =
    POINT_LETTERS[index + 1] + (+pointNumber + KNIGHT_MAX_MOVE_CELL_COUNT);

  const bottomLeft =
    POINT_LETTERS[index - 1] + (+pointNumber - KNIGHT_MAX_MOVE_CELL_COUNT);

  const bottomRight =
    POINT_LETTERS[index + 1] + (+pointNumber - KNIGHT_MAX_MOVE_CELL_COUNT);

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
