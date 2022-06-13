import React from 'react';
import { DependencyContainer } from 'tsyringe';

export const DIContext = React.createContext<DependencyContainer | null>(null);
