import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup/Playground',
  component: RadioGroup,
  argTypes: {
    value: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    direction: {
      control: {
        type: 'radio',
        options: ['column', 'row'],
      },
    },
    options: {
      control: 'object',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

const Template: StoryFn<RadioGroupProps> = ({ ...args }) => <RadioGroup {...args} />;

export const Playground: StoryFn<RadioGroupProps> = Template.bind({});
Playground.args = {
  title: 'Playground Radiogroup',
  description: 'Choose your favorite flavor',
  name: 'playgroundRadioGroup',
  direction: 'row',
  value: 'chocolate',
  options: [
    {
      id: 'chocolate',
      value: 'chocolate',
      label: 'Chocolate',
    },
    {
      id: 'strawberry',
      value: 'strawberry',
      label: 'Strawberry',
    },
    {
      id: 'vanilla',
      value: 'vanilla',
      label: 'Vanilla',
    },
  ],
};
