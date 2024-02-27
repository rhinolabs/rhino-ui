import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SelectInput, SelectInputProps } from './select-input';
import { Box } from '../box/box';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof SelectInput> = {
  title: 'Components/SelectInput/Visual Regression Tests',
  component: SelectInput,
};

export default meta;

type Story = StoryObj<SelectInputProps>;
export const Sizes: Story = {
  render: (_args) => (
    <Box gap="xl">
      <SelectInput
        id="smallSelect"
        label="Small"
        options={[]}
        value={null}
        size="sm"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInput
        id="mediumSelect"
        label="Medium"
        options={[]}
        value={null}
        size="md"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInput
        id="largeSelect"
        label="Large"
        options={[]}
        value={null}
        size="lg"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInput
        id="responsiveSelect"
        label="Responsive"
        options={[]}
        value={null}
        size={{
          base: 'sm',
          tablet: 'md',
          desktop: 'lg',
          hd: 'sm',
        }}
        onChange={() => {}} // eslint-disable-line
      />
    </Box>
  ),
  parameters: RESPONSIVE_STORY,
};
