import { POINT_LETTERS } from '../../constans';
import { EPieceName, EPlayerName } from '../../../ui/modules/Board';

export const canMovePawn = (
  fromCell: string,
  toCell: string,
  player: EPlayerName
): boolean => {
  const [pointLetter, pointNumber] = fromCell.split('');

  const index = POINT_LETTERS.indexOf(pointLetter);

  return false;
};
