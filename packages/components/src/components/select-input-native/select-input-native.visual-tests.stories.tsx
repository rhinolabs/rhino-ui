import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  SelectInputNative,
  SelectInputNativeProps,
} from './select-input-native';
import { Box } from '../box/box';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof SelectInputNative> = {
  title: 'Components/SelectInputNative/Visual Regression Tests',
  component: SelectInputNative,
};

export default meta;

type Story = StoryObj<SelectInputNativeProps>;
export const Sizes: Story = {
  render: (_args) => (
    <Box gap="xl">
      <SelectInputNative
        id="smallSelect"
        label="Small"
        options={[]}
        value={null}
        size="sm"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInputNative
        id="mediumSelect"
        label="Medium"
        options={[]}
        value={null}
        size="md"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInputNative
        id="largeSelect"
        label="Large"
        options={[]}
        value={null}
        size="lg"
        onChange={() => {}} // eslint-disable-line
      />
      <SelectInputNative
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
