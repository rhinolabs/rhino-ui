import React from 'react';
import { Box, BoxProps } from '../box/box';

export type AccordionPanelDetailsProps = BoxProps;

export const AccordionPanelDetails: React.FC<AccordionPanelDetailsProps> = ({
  children,
  padding = '0 md lg md',
  ...restProps
}) => (
  <Box padding={padding} {...restProps}>
    {children}
  </Box>
);
