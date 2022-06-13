import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IChessBoardProps } from './interfaces';
import Row from './Row';
import './Board.scss';

const Board: FC<IChessBoardProps> = ({ cellsMatrix, positions, movePiece }) => {
  return (
    <div className='board'>
      {cellsMatrix.map((row, i) => (
        <Row
          positions={positions}
          key={i}
          row={row}
          isEven={i % 2 === 0}
          movePiece={movePiece}
        />
      ))}
    </div>
  );
};

export default observer(Board);
