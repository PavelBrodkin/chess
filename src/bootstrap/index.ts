import { container, DependencyContainer } from 'tsyringe';
import { IBootstrap } from './interfaces';
import { IInitConfig } from './initHandlers/interfaces';

export class Bootstrap implements IBootstrap {
  private diContainer = container;

  get getDiContainer(): DependencyContainer {
    return this.diContainer;
  }

  constructor() {
    this.initDI = this.initDI.bind(this);
  }

  initDI(cb: IInitConfig['initDI']): void {
    this.diContainer = cb(this.diContainer);
  }

  initPlayers(cb: IInitConfig['initPlayers']): void {
    this.diContainer = cb(this.diContainer);
  }

  initBoard(cb: IInitConfig['initBoard']): void {
    this.diContainer = cb(this.diContainer);
  }

  async dispose() {
    this.diContainer.reset();
  }
}
