import { TPlacements } from '../../../domain/entity/Player/sturcures/interfaces';

export interface IPlayerViewModel {
  init: () => void;
  placements: TPlacements;
}
