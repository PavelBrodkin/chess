import { AbstractInitHandler } from './AbstractInitHandler';
import { IBootstrap } from '../interfaces';

export class InitBoardHandler extends AbstractInitHandler {
  async handle(bootstrap: IBootstrap) {
    const handler = this.config.initBoard;

    if (handler) {
      bootstrap.initBoard(handler);
    }

    return await super.handle(bootstrap);
  }
}
