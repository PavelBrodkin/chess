import { DependencyContainer } from 'tsyringe';
import { useContext } from 'react';
import { DIContext } from '../context/DIContext';

export default function useDiContainer(): DependencyContainer {
  return useContext(DIContext) as DependencyContainer;
}
