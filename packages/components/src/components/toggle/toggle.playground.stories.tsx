import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toggle, ToggleProps } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Playground',
  component: Toggle,
  argTypes: {
    id: {
      control: 'text',
    },
    isChecked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
    hideLabel: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

export default meta;

const Template: StoryFn<ToggleProps> = ({ ...args }) => <Toggle {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  id: 'togglePlayground',
  size: 'md',
  label: 'Toggle component playground',
  helpText: 'Help text',
};
