import { inject, injectable } from 'tsyringe';
import DATA_SOURCE from '../../../bootstrap/configs/di/dataSource';
import type { IPlayerModel } from '../../../domain/entity/Player/model/interfaces';
import { WHITE_PLAYER_INITIAL_PIECE_PLACEMENT } from '../constans';
import { AbstractPlayerViewModel } from './AbstractPlayerViewModel';
import type { IPlayerViewModel } from './interfaces';

@injectable()
export class WhitePlayerViewModel
  extends AbstractPlayerViewModel
  implements IPlayerViewModel
{
  constructor(
    @inject(DATA_SOURCE.WhitePlayerModel) protected model: IPlayerModel
  ) {
    super(model);
  }

  init() {
    console.log('White player init');
  }
}
