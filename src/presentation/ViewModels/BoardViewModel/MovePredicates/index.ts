import { EPieceName, EPlayerName } from '../../../ui/modules/Board';
import { canMoveKnight } from './canMoveKnight';
import { canMovePawn } from './canMovePawn';

interface IParams {
  fromCell: string;
  toCell: string;
}

export const canMovePiece = (
  piece: EPieceName,
  currentPlayer: EPlayerName,
  params: IParams
): boolean => {
  const { fromCell, toCell } = params;

  switch (piece) {
    case EPieceName.KNIGHT:
      return canMoveKnight(fromCell, toCell);

    case EPieceName.PAWN:
      return canMovePawn(fromCell, toCell, currentPlayer);

    case EPieceName.BISHOP:
      return false;

    case EPieceName.ROOK:
      return false;

    case EPieceName.QUEEN:
      return false;

    case EPieceName.KING:
      return false;
  }
};
