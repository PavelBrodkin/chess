import { DependencyContainer } from 'tsyringe';
import { getContainerWithDataSource } from './di/dataSource';
import { getContainerWithReps } from './di/repository';
import { getContainerWithUseCases } from './di/usecase';
import VIEW_MODEL, { getContainerWithViewModel } from './di/viewModel';
import { IInitConfig } from '../initHandlers/interfaces';
import { IPlayerViewModel } from '../../presentation/ViewModels/PlayerViewModel/interfaces';
import { IBoardViewModel } from '../../presentation/ViewModels/BoardViewModel/interfaces';

export const config: IInitConfig = {
  initDI: (container: DependencyContainer) => {
    if (!container) {
      throw Error('Container is not passed');
    }

    let appContainer: DependencyContainer;
    appContainer = getContainerWithDataSource(container);
    appContainer = getContainerWithReps(appContainer);
    appContainer = getContainerWithUseCases(appContainer);
    appContainer = getContainerWithViewModel(appContainer);

    return appContainer;
  },
  initPlayers: (container: DependencyContainer) => {
    if (
      !container.isRegistered<IPlayerViewModel>(
        VIEW_MODEL.WhitePlayerViewModel
      ) ||
      !container.isRegistered<IPlayerViewModel>(VIEW_MODEL.BlackPlayerViewModel)
    ) {
      throw Error('Container is not initiated');
    }

    container.resolve<IPlayerViewModel>(VIEW_MODEL.WhitePlayerViewModel).init();
    container.resolve<IPlayerViewModel>(VIEW_MODEL.BlackPlayerViewModel).init();

    return container;
  },
  initBoard: (container: DependencyContainer) => {
    if (!container.isRegistered<IBoardViewModel>(VIEW_MODEL.BoardViewModel)) {
      throw Error('Container is not initiated');
    }

    container.resolve<IBoardViewModel>(VIEW_MODEL.BoardViewModel).init();

    return container;
  }
};
