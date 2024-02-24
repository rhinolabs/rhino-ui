import { Meta, StoryObj } from '@storybook/react';
import { Spinner, SpinnerProps } from './spinner';
import { BRAND_COLOR_NAMES } from '../../lib/tokens';
import { SPINNER_SIZES } from './spinner.constants';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner/Playground',
  component: Spinner,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: BRAND_COLOR_NAMES,
      },
    },
    size: {
      control: {
        type: 'select',
        options: SPINNER_SIZES,
      },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<SpinnerProps>;

export const Playground: Story = {
  args: {
    variant: 'primary',
  },
};
