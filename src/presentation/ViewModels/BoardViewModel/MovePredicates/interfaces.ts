import { EPieceName, EPlayerName } from '../../../ui/modules/Board';
import { IPositionInfo } from '../../../../domain/entity/Board/structures/interfaces';

export interface IMovePiecePredicateParams {
  fromCell: string;
  toCell: string;
  positions: Record<string, IPositionInfo>;
  player: EPlayerName;
  piece: EPieceName;
}
