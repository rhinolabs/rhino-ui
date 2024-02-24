import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextareaInput, TextareaInputProps } from './textarea-input';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof TextareaInput> = {
  title: 'Components/TextareaInput/Visual Regression Tests',
  component: TextareaInput,
};

export default meta;

type Story = StoryObj<TextareaInputProps>;
const Default: Story = {
  render: (args) => (
    <TextareaInput
      {...args}
      onChange={() => {}} // eslint-disable-line
    />
  ),
};

export const ResponsiveSize: Story = {
  ...Default,
  args: {
    size: {
      base: 'sm',
      tablet: 'md',
      desktop: 'lg',
      hd: 'sm',
    },
    value: 'Responsive size',
    label: 'Textarea Input Visual Test',
  },
  parameters: RESPONSIVE_STORY,
};
