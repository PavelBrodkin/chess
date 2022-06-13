import { IPlayerViewModel } from './interfaces';
import { IPlayerModel } from '../../../domain/entity/Player/model/interfaces';
import { TPlacements } from '../../../domain/entity/Player/sturcures/interfaces';

export abstract class AbstractPlayerViewModel implements IPlayerViewModel {
  get placements(): TPlacements {
    return this.model.item.placements;
  }

  protected constructor(protected model: IPlayerModel) {}

  abstract init(): void;
}
