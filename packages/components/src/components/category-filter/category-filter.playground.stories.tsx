import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<CategoryFilterProps> = ({ ...args }) => <CategoryFilter {...args}>My Category</CategoryFilter>;

export const Playground = Template.bind({});
Playground.args = {
  isSelected: false,
  isDisabled: false,
  size: 'md',
};
