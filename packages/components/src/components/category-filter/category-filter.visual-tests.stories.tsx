import React from 'react';
import { Meta, StoryFn, ComponentStory } from '@storybook/react';
import { Box } from '../box/box';
import { RESPONSIVE_STORY } from '../../docs/constants';
import {
  CategoryFilter,
  CategoryFilterProps,
  BaseCategoryFilterSize,
} from './category-filter';
import CATEGORY_FILTER_SIZES from './category-filter.constants';

const meta: Meta<typeof CategoryFilter> =  {
  title: 'Components/CategoryFilter/Visual Regression Tests',
  component: CategoryFilter,
};

export default meta;

const Template: StoryFn<CategoryFilterProps> = ({ ...args }) => (
  <Box display="block" childGap="xl">
    {CATEGORY_FILTER_SIZES.map(size => (
      <Box gap="sm" key={size} direction="row">
        <CategoryFilter
          {...args}
          isSelected={false}
          size={size as BaseCategoryFilterSize}
        >
          {`${size} default`}
        </CategoryFilter>
        <CategoryFilter
          {...args}
          isSelected
          size={size as BaseCategoryFilterSize}
        >
          selected
        </CategoryFilter>
        <CategoryFilter
          {...args}
          isDisabled
          size={size as BaseCategoryFilterSize}
        >
          disabled
        </CategoryFilter>
        <CategoryFilter
          {...args}
          isSelected
          isDisabled
          size={size as BaseCategoryFilterSize}
        >
          disabled selected
        </CategoryFilter>
      </Box>
    ))}
  </Box>
);

export const SizesAndStates = Template.bind({});

export const ResponsiveSize: ComponentStory<typeof CategoryFilter> = () => (
  <CategoryFilter
    isSelected
    size={{
      base: 'xs',
      tablet: 'sm',
      desktop: 'md',
      hd: 'lg',
    }}
  >
    Responsive CategoryFilter
  </CategoryFilter>
);

ResponsiveSize.parameters = RESPONSIVE_STORY;
