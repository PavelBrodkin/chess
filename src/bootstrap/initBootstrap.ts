import { InitDIHandler } from './initHandlers/initDIHandler';
import { IBootstrap } from './interfaces';
import { config } from './configs/config';
import { InitPlayersHandler } from './initHandlers/initPlayersHandler';
import { InitBoardHandler } from './initHandlers/initBoardHandler';

export const initBootstrap = async (
  bootstrap: IBootstrap
): Promise<IBootstrap> => {
  const handler = new InitDIHandler(config);
  handler
    .setNext(new InitPlayersHandler(config))
    .setNext(new InitBoardHandler(config));
  return await handler.handle(bootstrap);
};
