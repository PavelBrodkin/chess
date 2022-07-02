import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useDrop } from 'react-dnd';
import { EPieceName, EPlayerName, IChessBoardCellProps } from '../interfaces';
import Piece from '../Piece/Piece';
import { canMovePiece } from '../../../../../ViewModels/BoardViewModel/MovePredicates';
import { PieceIcon } from '../Piece/PieceIcon';

//Todo сделать чтобы на вид было ближе к интерфейсу fromCell, cell => fromCell, toCell

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
          positions,
          player: currentPlayer,
          piece: currentPiece,
          fromCell: fromCell,
          toCell: cell
        };

        return canMovePiece(params);
      },
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

  return (
    <div ref={drop} style={{ background }} className='cell'>
      <Piece cell={cell}>
        <PieceIcon player={player} piece={piece} />
      </Piece>
      {isOver && !canDrop && <div className='red' />}
      {!isOver && canDrop && <div className='yellow' />}
      {isOver && canDrop && <div className='green' />}
    </div>
  );
};

export default observer(Cell);
