import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import { useDrop } from 'react-dnd';
import { EPieceName, EPlayerName, IChessBoardCellProps } from './interfaces';
import { ReactComponent as Pawn } from '../../../../assets/piecec/pawn.svg';
import { ReactComponent as Bishop } from '../../../../assets/piecec/bishop.svg';
import { ReactComponent as Rook } from '../../../../assets/piecec/rook.svg';
import { ReactComponent as Knight } from '../../../../assets/piecec/knight.svg';
import { ReactComponent as Queen } from '../../../../assets/piecec/queen.svg';
import { ReactComponent as King } from '../../../../assets/piecec/king.svg';
import Piece from './Piece';
import { canMovePiece } from '../../../../ViewModels/BoardViewModel/MovePredicates';

const Cell: FC<IChessBoardCellProps> = ({
  cell,
  background,
  positions,
  movePiece
}) => {
  const piece = positions[cell].piece as EPieceName;
  const player = positions[cell].player as EPlayerName;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'cell',
      canDrop: ({ cell: fromCell }) => {
        const currentPiece = positions[fromCell].piece as EPieceName;
        const currentPlayer = positions[fromCell].player as EPlayerName;

        const params = {
          fromCell: fromCell,
          toCell: cell
        };

        return canMovePiece(currentPiece, currentPlayer, params);
      },
      //Todo сделать чтобы на вид было ближе к интерфейсу fromCell, cell => fromCell, toCell
      drop: ({ cell: fromCell }: Record<'cell', string>) => {
        movePiece(fromCell, cell);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }),
    [cell]
  );

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

  return (
    <div ref={drop} style={{ background }} className='cell'>
      {cell}
      <Piece cell={cell}>{pieceIcon}</Piece>
      {isOver && !canDrop && <div className='red' />}
      {!isOver && canDrop && <div className='yellow' />}
      {isOver && canDrop && <div className='green' />}
    </div>
  );
};

export default observer(Cell);
