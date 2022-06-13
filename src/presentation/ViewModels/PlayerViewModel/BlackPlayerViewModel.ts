import { inject, injectable } from 'tsyringe';
import DATA_SOURCE from '../../../bootstrap/configs/di/dataSource';
import type { IPlayerModel } from '../../../domain/entity/Player/model/interfaces';
import { AbstractPlayerViewModel } from './AbstractPlayerViewModel';
import type { IPlayerViewModel } from './interfaces';

@injectable()
export class BlackPlayerViewModel
  extends AbstractPlayerViewModel
  implements IPlayerViewModel
{
  constructor(
    @inject(DATA_SOURCE.BlackPlayerModel) protected model: IPlayerModel
  ) {
    super(model);
  }

  init() {
    console.log('Black player init');
  }
}
