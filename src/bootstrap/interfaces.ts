import { IInitConfig } from './initHandlers/interfaces';
import { DependencyContainer } from 'tsyringe';

export interface IBootstrap {
  getDiContainer: DependencyContainer;
  initDI(cb: IInitConfig['initDI']): void;
  initPlayers(cb: IInitConfig['initPlayers']): void;
  initBoard(cb: IInitConfig['initBoard']): void;
  dispose: () => void;
}
