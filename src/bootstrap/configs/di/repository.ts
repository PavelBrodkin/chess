import { DependencyContainer } from 'tsyringe';

const REPOSITORY = {
  User: Symbol.for('UserRepository')
};

export const getContainerWithReps = (
  container: DependencyContainer
): DependencyContainer => {
  return container;
};

export default REPOSITORY;
