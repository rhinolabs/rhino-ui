import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<AlertProps> = ({ ...args }) => <Alert {...args} />;

export const Playground: StoryFn<AlertProps> = Template.bind({});
Playground.args = {
  variant: 'default',
  message: 'default',
  className: '',
  closeText: '',
  hasIcon: false,
  isCompact: false,
  isClosable: false,
  title: '',
};
