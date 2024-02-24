import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/box';
import { FONT_COLOR_OPTIONS, FONT_SIZE_OPTIONS } from '../../lib/tokens';
import { Heading, HeadingProps } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading/Visual Regression Tests',
  component: Heading,
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const Size: Story = {
  render: (args) => (
    <Box>
      {[...FONT_SIZE_OPTIONS].map((size) => (
        <Box>
          <Heading {...args} size={size} />
        </Box>
      ))}
    </Box>
  ),
  args: {
    children: 'Hello world!',
  },
};

export const Variant: Story = {
  render: (args) => (
    <Box>
      {[...FONT_COLOR_OPTIONS].reverse().map((variant) => (
        <Box>
          <Box>
            <Heading {...args} variant={variant} />
          </Box>
        </Box>
      ))}
    </Box>
  ),
  args: {
    children: 'Hello world!',
  },
};
