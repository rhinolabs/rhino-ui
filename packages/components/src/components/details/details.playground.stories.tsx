import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Box, boxPropsKeys } from '../box/box';
import { Details, DetailsProps } from './details';

const meta: Meta<typeof Details> = {
  title: 'Components/Details/Playground',
  component: Details,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    ...boxPropsKeys.reduce(
      (acc, curr) => ({ ...acc, [curr]: { table: { disable: true } } }),
      {}
    ),
  },
};

export default meta;

type Story = StoryObj<DetailsProps>;

export const Playground: Story = {
  render: ({ isOpen, summaryText, detailsText, ...args }) => (
    <Details {...args} isOpen={isOpen}>
      <Details.Summary isDetailsOpen={isOpen}>
        <Button>{summaryText}</Button>
      </Details.Summary>
      <Box padding="lg" background="grey-50" margin="sm 0 0 0">
        {detailsText}
      </Box>
    </Details>
  ),
  args: {
    isOpen: false,
    summaryText: 'Summary',
    detailsText: 'Details go here!',
  },
};
