import { EPieceName, EPlayerName } from '../../../ui/modules/Board';
import { IPositionInfo } from '../../../../domain/entity/Board/structures/interfaces';
import { canMoveKnight } from './canMoveKnight';
import { canMovePawn } from './canMovePawn';
import { canMoveBishop } from './canMoveBishop';

interface IParams {
  positions: Record<string, IPositionInfo>;
  player: EPlayerName;
  piece: EPieceName;
  fromCell: string;
  toCell: string;
}

export const canMovePiece = (params: IParams): boolean => {
  const { fromCell, toCell, piece, player, positions } = params;

  if (positions[toCell].player === player) {
    return false;
  }

  switch (piece) {
    case EPieceName.KNIGHT:
      return canMoveKnight({ fromCell, toCell });

    case EPieceName.PAWN:
      return canMovePawn({ fromCell, toCell, player });

    case EPieceName.BISHOP:
      return canMoveBishop({ fromCell, toCell, positions });

    case EPieceName.ROOK:
      return false;

    case EPieceName.QUEEN:
      return false;

    case EPieceName.KING:
      return false;
  }
};
