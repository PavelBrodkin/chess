import { DependencyContainer } from 'tsyringe';
import { IBoardViewModel } from '../../../presentation/ViewModels/BoardViewModel/interfaces';
import { BoardViewModel } from '../../../presentation/ViewModels/BoardViewModel/BoardViewModel';
import { IPlayerViewModel } from '../../../presentation/ViewModels/PlayerViewModel/interfaces';
import { WhitePlayerViewModel } from '../../../presentation/ViewModels/PlayerViewModel/WhitePlayerViewModel';
import { BlackPlayerViewModel } from '../../../presentation/ViewModels/PlayerViewModel/BlackPlayerViewModel';

const VIEW_MODEL = {
  BoardViewModel: Symbol.for('BoardViewModel'),
  WhitePlayerViewModel: Symbol.for('WhitePlayerViewModel'),
  BlackPlayerViewModel: Symbol.for('BlackPlayerViewModel')
};

export const getContainerWithViewModel = (
  container: DependencyContainer
): DependencyContainer => {
  container.registerSingleton<IBoardViewModel>(
    VIEW_MODEL.BoardViewModel,
    BoardViewModel
  );

  container.registerSingleton<IPlayerViewModel>(
    VIEW_MODEL.WhitePlayerViewModel,
    WhitePlayerViewModel
  );

  container.registerSingleton<IPlayerViewModel>(
    VIEW_MODEL.BlackPlayerViewModel,
    BlackPlayerViewModel
  );

  return container;
};

export default VIEW_MODEL;
