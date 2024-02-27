import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { boxPropsKeys } from '../box/box';
import { OptionTileGroup, OptionTileGroupProps } from './option-tile-group';

const meta: Meta<typeof OptionTileGroup> = {
  title: 'Components/OptionTileGroup/Playground',
  component: OptionTileGroup,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['chocolate', 'strawberry', 'vanilla'],
      },
    },
    isFullWidth: {
      control: {
        type: 'boolean',
      },
    },
    isMulti: {
      control: {
        type: 'boolean',
      },
    },
    hideInput: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    ...boxPropsKeys.reduce(
      (acc, curr) => ({ ...acc, [curr]: { table: { disable: true } } }),
      {}
    ),
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<OptionTileGroupProps>;

export const Playground: Story = {
  render: ({ value, onChange, name, ...args }) => (
    <OptionTileGroup
      {...args}
      options={[
        { value: 'chocolate', label: 'chocolate', id: 'chocolate' },
        { value: 'strawberry', label: 'strawberry', id: 'strawberry' },
        { value: 'vanilla', label: 'vanilla', id: 'vanilla' },
      ]}
      value={value}
      onChange={onChange}
      name={name}
    />
  ),
  args: {
    value: null,
    onChange: () => {}, // eslint-disable-line
    name: 'optionTilesPlayground',
  },
};
