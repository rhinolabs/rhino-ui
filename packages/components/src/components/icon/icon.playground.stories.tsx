import { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from './icon';
import {
  FONT_SIZE_OPTIONS,
  FONT_COLOR_OPTIONS,
  ICON_NAMES,
} from '../../lib/tokens';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Playground',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [null, ...ICON_NAMES],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [null, ...FONT_COLOR_OPTIONS],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [null, ...FONT_SIZE_OPTIONS],
      },
    },
  },
};

export default meta;

type Story = StoryObj<IconProps>;
export const Playground: Story = {
  args: {
    name: 'home',
    size: '5xl',
    color: 'grey-600',
  },
};
