import { makeVar } from '@apollo/client';
import { globalNavigateVar } from '../../store/global-navigate.ts';

export const isUserMenuOpenVar = makeVar(false);

export const userMenuToggleFn = () => isUserMenuOpenVar(!isUserMenuOpenVar());

export const navigateFromMenu = (route: string) => {
  userMenuToggleFn();
  globalNavigateVar()(route);
};
