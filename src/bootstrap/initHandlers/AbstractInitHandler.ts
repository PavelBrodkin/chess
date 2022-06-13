import { IBootstrap } from '../interfaces';
import { IInitConfig, InitHandler } from './interfaces';

export abstract class AbstractInitHandler {
  private nextHandler?: InitHandler;

  constructor(protected config: IInitConfig) {}

  setNext(handler: InitHandler) {
    this.nextHandler = handler;
    return handler;
  }

  async handle(bootstrap: IBootstrap): Promise<IBootstrap> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(bootstrap);
    }

    return bootstrap;
  }
}
