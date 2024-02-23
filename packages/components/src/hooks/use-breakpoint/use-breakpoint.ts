import { useState } from 'react';
import { BREAKPOINTS } from '../../lib/tokens';
import { Breakpoint } from '../../types';
import { useWindowSize } from '../use-window-size/use-window-size';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/use-isomorphic-layout-effect';

const defaultBreakpoint: Breakpoint = { name: 'base', minWidth: 0 };

export interface BreakpointState {
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isHd: boolean;
  activeBreakpoint: Breakpoint;
}

export const useBreakpoint = (): BreakpointState => {
  const windowSize = useWindowSize();

  const [breakpoint, setBreakpoint] = useState<Breakpoint>({ ...defaultBreakpoint });

  useIsomorphicLayoutEffect(() => {
    const sortedBreakpoints = [...BREAKPOINTS].sort((a, b) => b.minWidth - a.minWidth);
    const activeBreakpoint = windowSize && sortedBreakpoints.find(b => b.minWidth <= (windowSize.innerWidth as number));

    setBreakpoint(activeBreakpoint || { ...defaultBreakpoint });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.innerWidth, windowSize.innerHeight, windowSize.outerWidth, windowSize.outerHeight]);

  return {
    isPhone: breakpoint.name === 'base',
    isTablet: breakpoint.name === 'tablet',
    isDesktop: breakpoint.name === 'desktop',
    isHd: breakpoint.name === 'hd',
    activeBreakpoint: breakpoint,
  };
};
