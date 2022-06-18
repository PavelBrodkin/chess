import React, { FC } from 'react';
import VIEW_MODEL from '../../bootstrap/configs/di/viewModel';
import { IBoardViewModel } from '../ViewModels/BoardViewModel/interfaces';
import useViewModel from '../hooks/useViewModel';
import { observer } from 'mobx-react-lite';
import ChessBoard from './modules/Board/components/Board/Board';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './App.scss';

export const App: FC = () => {
  const { cellsMatrix, positions, movePiece } = useViewModel<IBoardViewModel>(
    VIEW_MODEL.BoardViewModel
  );

  // const whitePlayer = useViewModel<IPlayerViewModel>(
  //   VIEW_MODEL.WhitePlayerViewModel
  // );
  //
  // const blackPlayer = useViewModel<IPlayerViewModel>(
  //   VIEW_MODEL.BlackPlayerViewModel
  // );

  return (
    <DndProvider backend={HTML5Backend}>
      <ChessBoard
        cellsMatrix={cellsMatrix}
        positions={positions}
        movePiece={movePiece}
      />
    </DndProvider>
  );
};

export default observer(App);
