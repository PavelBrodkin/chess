import { AbstractInitHandler } from './AbstractInitHandler';
import { IBootstrap } from '../interfaces';

export class InitPlayersHandler extends AbstractInitHandler {
  async handle(bootstrap: IBootstrap) {
    const handler = this.config.initPlayers;

    if (handler) {
      bootstrap.initPlayers(handler);
    }

    return await super.handle(bootstrap);
  }
}
