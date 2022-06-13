import useDiContainer from './useDiContainer';

export default function useViewModel<T>(vmSymbol: symbol) {
  const container = useDiContainer();
  if (!container.isRegistered(vmSymbol)) {
    throw Error('View model does not bound to container');
  }
  return container.resolve<T>(vmSymbol);
}
