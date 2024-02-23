import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Spinner, SpinnerProps } from './spinner';
import { Box } from '../box/box';
import { BRAND_COLOR_NAMES } from '../../lib/tokens';
import { SPINNER_SIZES } from './spinner.constants';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner/Visual Regression Tests',
  component: Spinner,
};

export default meta;

const Template: StoryFn<SpinnerProps> = args => (
  <Box gap="xl">
    {SPINNER_SIZES.map(size => (
      <Box gap="sm" key={size}>
        <Box gap="sm" direction="row">
          {BRAND_COLOR_NAMES.map(variant => (
            <Spinner {...args} variant={variant} size={size} key={`${size}-${variant}`} />
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

export const VariantsAndSizes = Template.bind({});
