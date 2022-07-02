import { IMovePiecePredicateParams } from './interfaces';
import { EPieceName } from '../../../ui/modules/Board';
import { canMoveKnight } from './Pieces/canMoveKnight';
import { canMovePawn } from './Pieces/canMovePawn';
import { canMoveBishop } from './Pieces/canMoveBishop';
import { canMoveRook } from './Pieces/canMoveRook';
import { canMoveQueen } from './Pieces/canMoveQueen';
import { canMoveKing } from './Pieces/canMoveKing';

// Todo может вынести в отдельный ВМ все как то, подумать

export const canMovePiece = ({
  fromCell,
  toCell,
  piece,
  player,
  positions
}: IMovePiecePredicateParams): boolean => {
  if (positions[toCell].player === player) {
    return false;
  }

  switch (piece) {
    case EPieceName.KNIGHT:
      return canMoveKnight({ fromCell, toCell });

    case EPieceName.PAWN:
      return canMovePawn({ fromCell, toCell, player });

    case EPieceName.BISHOP:
      return canMoveBishop({ fromCell, toCell, positions, player });

    case EPieceName.ROOK:
      return canMoveRook({ fromCell, toCell, positions, player });

    case EPieceName.QUEEN:
      return canMoveQueen({ fromCell, toCell, positions, player });

    case EPieceName.KING:
      return canMoveKing({ fromCell, toCell });
  }
};
