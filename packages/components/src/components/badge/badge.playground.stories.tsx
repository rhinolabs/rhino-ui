import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<BadgeProps>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    message: 'install ready',
  },
};
