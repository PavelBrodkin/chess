import { DependencyContainer } from 'tsyringe';
import { MovePieceUseCase } from '../../../domain/usecase/Board/MovePieceUseCase';
import { IMovePieceUseCase } from '../../../domain/usecase/Board/interface';

const USE_CASE = {
  MovePiece: Symbol.for('MovePieceUseCase')
};

export const getContainerWithUseCases = (
  container: DependencyContainer
): DependencyContainer => {
  container.registerInstance<IMovePieceUseCase>(
    USE_CASE.MovePiece,
    new MovePieceUseCase()
  );

  return container;
};

export default USE_CASE;
