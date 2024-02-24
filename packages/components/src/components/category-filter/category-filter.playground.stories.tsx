import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CategoryFilter, CategoryFilterProps } from './category-filter';

const meta: Meta<typeof CategoryFilter> = {
  title: 'Components/CategoryFilter/Playground',
  component: CategoryFilter,
  argTypes: {
    isSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<CategoryFilterProps>;
export const Playground: Story = {
  render: (args) => <CategoryFilter {...args}>My Category</CategoryFilter>,
  args: {
    isSelected: false,
    isDisabled: false,
    size: 'md',
  },
};
