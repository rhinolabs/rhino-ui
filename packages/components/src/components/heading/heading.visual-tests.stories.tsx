import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box } from '../box/box';
import { FONT_COLOR_OPTIONS, FONT_SIZE_OPTIONS } from '../../lib/tokens';
import { Heading, HeadingProps } from './heading';

const meta: Meta<typeof Heading> ={
  title: 'Components/Heading/Visual Regression Tests',
  component: Heading,
};

export default meta;

const SizeTemplate: StoryFn<HeadingProps> = args => (
  <Box>
    {[...FONT_SIZE_OPTIONS].map(size => (
      <Box>
        <Heading {...args} size={size} />
      </Box>
    ))}
  </Box>
);

const VariantTemplate: StoryFn<HeadingProps> = args => (
  <Box>
    {[...FONT_COLOR_OPTIONS].reverse().map(variant => (
      <Box>
        <Box>
          <Heading {...args} variant={variant} />
        </Box>
      </Box>
    ))}
  </Box>
);

export const Size = SizeTemplate.bind({});
Size.args = {
  children: 'Hello world!',
};

export const Variant = VariantTemplate.bind({});
Variant.args = {
  children: 'Hello world!',
};
