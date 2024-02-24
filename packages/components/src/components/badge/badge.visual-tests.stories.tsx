import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps, BadgeSize, BadgeVariant } from './badge';
import { Box } from '../box/box';
import { BADGE_SIZES, BADGE_VARIANTS } from './badge.constants';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge/Visual Regression Tests',
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const VariantsAndSizes: Story = {
  render: (args) => (
    <Box gap="xl">
      {BADGE_SIZES.map((size) => (
        <Box gap="sm" key={size}>
          <Box gap="sm" direction="row">
            {BADGE_VARIANTS.map((variant) => (
              <Badge
                {...args}
                variant={variant as BadgeVariant}
                size={size as BadgeSize}
                message={`${size as BadgeSize} ${variant as BadgeVariant}`}
                key={`${size as BadgeSize}-${variant as BadgeVariant}`}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};
