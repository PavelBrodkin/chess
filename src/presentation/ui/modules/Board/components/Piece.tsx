import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useDrag } from 'react-dnd';

interface IProps {
  cell: string;
}

const Piece: FC<IProps> = ({ children, cell }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'cell',
      item: { cell },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [cell]
  );

  return (
    <span
      className='piece'
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'move'
      }}
      ref={drag}
    >
      {children}
    </span>
  );
};

export default observer(Piece);
