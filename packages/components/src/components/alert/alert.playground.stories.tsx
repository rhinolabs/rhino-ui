import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from './alert';
import { ALERT_VARIANTS } from './alert.constants';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert/Playground',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ALERT_VARIANTS,
      },
    },
    message: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    closeText: {
      control: 'text',
    },
    hasIcon: {
      control: 'boolean',
    },
    isCompact: {
      control: 'boolean',
    },
    isClosable: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;
export const Playground: Story = {
  args: {
    variant: 'default',
    message: 'default',
    className: '',
    closeText: '',
    hasIcon: false,
    isCompact: false,
    isClosable: false,
    title: '',
  },
};
