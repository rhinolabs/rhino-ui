import React from 'react';
import { ResponsiveContext } from '../../components/responsive-provider/responsive-provider';

export interface HookWindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}
export const useWindowSize = (): HookWindowSize => {
  const {
    innerWidth,
    innerHeight,
    outerHeight,
    outerWidth,
    isCreated,
  } = React.useContext(ResponsiveContext);

  if (isCreated) {
    return {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    };
  }

  return {};
};
