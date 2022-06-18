import React, { FC, ReactElement } from 'react';
import { EPieceName, EPlayerName } from '../interfaces';
import { ReactComponent as Pawn } from '../../../../../assets/piecec/pawn.svg';
import { ReactComponent as Bishop } from '../../../../../assets/piecec/bishop.svg';
import { ReactComponent as Knight } from '../../../../../assets/piecec/knight.svg';
import { ReactComponent as Rook } from '../../../../../assets/piecec/rook.svg';
import { ReactComponent as Queen } from '../../../../../assets/piecec/queen.svg';
import { ReactComponent as King } from '../../../../../assets/piecec/king.svg';

interface IProps {
  player: EPlayerName;
  piece: EPieceName;
}

export const PieceIcon: FC<IProps> = ({ player, piece }) => {
  let pieceIcon: ReactElement;

  const className: string =
    player === EPlayerName.WHITE ? 'white_icon' : 'black_icon';

  switch (piece as EPieceName) {
    case EPieceName.PAWN:
      pieceIcon = <Pawn className={className} />;
      break;

    case EPieceName.BISHOP:
      pieceIcon = <Bishop className={className} />;
      break;

    case EPieceName.KNIGHT:
      pieceIcon = <Knight className={className} />;
      break;

    case EPieceName.ROOK:
      pieceIcon = <Rook className={className} />;
      break;

    case EPieceName.QUEEN:
      pieceIcon = <Queen className={className} />;
      break;

    case EPieceName.KING:
      pieceIcon = <King className={className} />;
      break;

    default:
      pieceIcon = <></>;
      break;
  }

  return pieceIcon;
};
