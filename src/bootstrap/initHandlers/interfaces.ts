import { DependencyContainer } from 'tsyringe';
import { IBootstrap } from '../interfaces';

export interface IInitConfig {
  initDI: (container: DependencyContainer) => DependencyContainer;
  initPlayers: (container: DependencyContainer) => DependencyContainer | never;
  initBoard: (container: DependencyContainer) => DependencyContainer | never;
}

export interface InitHandler {
  setNext: (handler: InitHandler) => InitHandler;
  handle: (bootstrap: IBootstrap) => Promise<IBootstrap>;
}
