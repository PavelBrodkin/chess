import { IPlayer } from '../sturcures/interfaces';

export interface IPlayerModel {
  item: IPlayer;
  setPiecePlacement: (placements: IPlayer['placements']) => void;
}
