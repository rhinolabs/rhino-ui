import React from 'react';
import { Icon } from '../icon/icon';
import { DetailsSummary, DetailsSummaryProps } from '../details/details-summary';
import { Box } from '../box/box';

export interface AccordionPanelSummaryProps extends DetailsSummaryProps {
  hasCaret?: 'left' | 'right' | false;
}

export const AccordionPanelSummary: React.FC<AccordionPanelSummaryProps> = ({
  children,
  onToggle,
  padding = 'md',
  fontWeight = 'bold',
  hasCaret = 'right',
  isDetailsOpen,
  ...restProps
}) => (
  <DetailsSummary
    gap="sm"
    display="flex"
    direction="row"
    fontWeight={fontWeight}
    padding={padding}
    isDetailsOpen={isDetailsOpen}
    onToggle={onToggle}
    {...restProps}
  >
    {hasCaret === 'left' && (
      <Box>
        <Icon
          name={isDetailsOpen ? 'caret-sm-down' : 'caret-sm-right'}
          color="grey-500"
        />
      </Box>
    )}
    {children}
    {hasCaret === 'right' && (
      <Box margin="0 0 0 auto">
        <Icon
          name={isDetailsOpen ? 'caret-sm-up' : 'caret-sm-down'}
          color="grey-500"
        />
      </Box>
    )}
  </DetailsSummary>
);
