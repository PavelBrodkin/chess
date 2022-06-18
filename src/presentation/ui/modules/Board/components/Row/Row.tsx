import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IChessBoardRowProps } from '../interfaces';
import { getCellsColorByRow } from '../../../../../ViewModels/helpers';
import Cell from '../Cell/Cell';

const Row: FC<IChessBoardRowProps> = ({
  row,
  isEven,
  positions,
  movePiece
}) => {
  const [light, dark] = getCellsColorByRow(isEven);

  return (
    <div className='row'>
      {row.map((cell, i) => (
        <Cell
          positions={positions}
          key={cell}
          cell={cell}
          background={i % 2 === 0 ? dark : light}
          movePiece={movePiece}
        />
      ))}
    </div>
  );
};

export default observer(Row);
