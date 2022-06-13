import { AbstractInitHandler } from './AbstractInitHandler';
import { IBootstrap } from '../interfaces';

export class InitDIHandler extends AbstractInitHandler {
  async handle(bootstrap: IBootstrap): Promise<IBootstrap> {
    const handler = this.config.initDI;

    if (handler) {
      bootstrap.initDI(handler);
    }

    return await super.handle(bootstrap);
  }
}
