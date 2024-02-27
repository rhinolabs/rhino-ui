import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectInput, SelectInputProps } from './select-input';

const meta: Meta<typeof SelectInput> = {
  title: 'Components/SelectInput/Playground',
  component: SelectInput,
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    autoFocus: {
      control: 'boolean',
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
    isClearable: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isMulti: {
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
    placeholder: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
    menuPortalTarget: {
      control: 'none',
    },
  },
};

export default meta;

const Template: StoryFn<SelectInputProps> = ({ ...args }) => <SelectInput {...args} />;

export const Playground: StoryFn<SelectInputProps> = Template.bind({});
Playground.args = {
  id: 'playgroundSelectInput',
  label: 'Playground SelectInput',
  description: 'Helpful text',
  name: 'playgroundSelectInput',
  menuPortalTarget: document.body,
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};
