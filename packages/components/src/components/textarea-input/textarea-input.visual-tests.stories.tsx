import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextareaInput, TextareaInputProps } from './textarea-input';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof TextareaInput> = {
  title: 'Components/TextareaInput/Visual Regression Tests',
  component: TextareaInput,
};

export default meta;

const Template: StoryFn<TextareaInputProps> = args => (
  <TextareaInput
    {...args}
    onChange={() => {}} // eslint-disable-line
  />
);

export const ResponsiveSize = Template.bind({});
ResponsiveSize.args = {
  size: {
    base: 'sm',
    tablet: 'md',
    desktop: 'lg',
    hd: 'sm',
  },
  value: 'Responsive size',
  label: 'Textarea Input Visual Test',
};
ResponsiveSize.parameters = RESPONSIVE_STORY;
