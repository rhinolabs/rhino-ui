import { Meta, StoryObj } from '@storybook/react';
import { boxPropsKeys } from '../box/box';
import {
  SelectInputNative,
  SelectInputNativeProps,
} from './select-input-native';

const meta: Meta<typeof SelectInputNative> = {
  title: 'Components/SelectInputNative/Playground',
  component: SelectInputNative,
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    value: {
      control: {
        type: 'radio',
        options: ['chocolate', 'strawberry', 'vanilla'],
      },
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
    placeholder: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
    ...boxPropsKeys.reduce(
      (acc, curr) => ({ ...acc, [curr]: { table: { disable: true } } }),
      {}
    ),
  },
};

export default meta;

type Story = StoryObj<SelectInputNativeProps>;

export const Playground: Story = {
  args: {
    id: 'playgroundSelectInputNative',
    label: 'Playground SelectInputNative',
    name: 'playgroundSelectInputNative',
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  },
};
