import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './badge';
import { BADGE_SIZES, BADGE_VARIANTS } from './badge.constants';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge/Playground',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: BADGE_VARIANTS,
      },
    },
    size: {
      control: {
        type: 'select',
        options: BADGE_SIZES,
      },
    },
    message: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<BadgeProps> = ({ ...args }) => <Badge {...args} />;

/**
 * Use the playground to see different results
 */

export const Playground: StoryFn<BadgeProps> = Template.bind({});
Playground.args = {
  variant: 'primary',
  message: 'install ready',
};
