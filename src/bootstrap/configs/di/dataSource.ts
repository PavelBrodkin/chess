import { DependencyContainer } from 'tsyringe';
import { IBoardModel } from '../../../domain/entity/Board/model/interfaces';
import { BoardModel } from '../../../domain/entity/Board/model/BoardModel';
import { PlayerModel } from '../../../domain/entity/Player/model/PlayerModel';
import { IPlayerModel } from '../../../domain/entity/Player/model/interfaces';

const DATA_SOURCE = {
  BoardModel: Symbol.for('BoardModel'),
  BlackPlayerModel: Symbol.for('BlackPlayerModel'),
  WhitePlayerModel: Symbol.for('WhitePlayerModel')
};

export const getContainerWithDataSource = (
  container: DependencyContainer
): DependencyContainer => {
  container.registerInstance<IBoardModel>(
    DATA_SOURCE.BoardModel,
    new BoardModel()
  );
  container.registerInstance<IPlayerModel>(
    DATA_SOURCE.BlackPlayerModel,
    new PlayerModel()
  );
  container.registerInstance<IPlayerModel>(
    DATA_SOURCE.WhitePlayerModel,
    new PlayerModel()
  );

  return container;
};

export default DATA_SOURCE;
