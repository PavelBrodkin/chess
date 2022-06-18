import { POINT_LETTERS } from '../../constants';
import { EPlayerName } from '../../../ui/modules/Board';
import {
  BLACK_PAWN_INITIAL_CELL_POINT_NUMBER,
  WHITE_PAWN_INITIAL_CELL_POINT_NUMBER,
  PAWN_MAX_INITIAL_CELL_COUNT,
  PAWN_MAX_MOVE_CELL_COUNT
} from './constants';

interface IParams {
  fromCell: string;
  toCell: string;
  player: EPlayerName;
}

export const canMovePawn = ({ fromCell, toCell, player }: IParams): boolean => {
  let [pointLetter, pointNumber] = fromCell.split('');

  const index = POINT_LETTERS.indexOf(pointLetter);

  const moves = [];

  switch (player) {
    case EPlayerName.WHITE:
      +pointNumber === WHITE_PAWN_INITIAL_CELL_POINT_NUMBER
        ? moves.push(
            POINT_LETTERS[index] + (+pointNumber + PAWN_MAX_MOVE_CELL_COUNT),
            POINT_LETTERS[index] + (+pointNumber + PAWN_MAX_INITIAL_CELL_COUNT)
          )
        : moves.push(
            POINT_LETTERS[index] + (+pointNumber + PAWN_MAX_MOVE_CELL_COUNT)
          );
      break;

    case EPlayerName.BLACK:
      +pointNumber === BLACK_PAWN_INITIAL_CELL_POINT_NUMBER
        ? moves.push(
            POINT_LETTERS[index] + (+pointNumber - PAWN_MAX_MOVE_CELL_COUNT),
            POINT_LETTERS[index] + (+pointNumber - PAWN_MAX_INITIAL_CELL_COUNT)
          )
        : moves.push(
            POINT_LETTERS[index] + (+pointNumber - PAWN_MAX_MOVE_CELL_COUNT)
          );
      break;

    default:
      return false;
  }

  return moves.includes(toCell);
};
