import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { Toggle, ToggleProps } from './toggle';
import TOGGLE_SIZES from './toggle.constants';
import { Box } from '../box/box';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Visual Regression Tests',
  component: Toggle,
  parameters: RESPONSIVE_STORY,
};

export default meta;

type Story = StoryObj<ToggleProps>;
const Default: Story = {
  render: (args) => (
    <Box gap="xl">
      {TOGGLE_SIZES.map((size) => (
        <Box gap="md" key={`${args.id}-${size}`}>
          <Toggle
            {...args}
            id={`${args.id}-${size}-checked`}
            label="I agree to the Terms and Conditions and Privacy Policy"
            isChecked
            size={size}
            onChange={() => {}} // eslint-disable-line
          />
          <Toggle
            {...args}
            id={`${args.id}-${size}-unchecked`}
            label="I agree to the Terms and Conditions and Privacy Policy"
            size={size}
            onChange={() => {}} // eslint-disable-line
          />
        </Box>
      ))}
      <Box gap="md">
        <Toggle
          {...args}
          id={`${args.id}-responsive-checked`}
          label="I agree to the Terms and Conditions and Privacy Policy"
          isChecked
          size={{
            base: 'sm',
            tablet: 'md',
            desktop: 'lg',
            hd: 'sm',
          }}
          onChange={() => {}} // eslint-disable-line
        />
        <Toggle
          {...args}
          id={`${args.id}-responsive-unchecked`}
          label="I agree to the Terms and Conditions and Privacy Policy"
          size={{
            base: 'sm',
            tablet: 'md',
            desktop: 'lg',
            hd: 'sm',
          }}
          onChange={() => {}} // eslint-disable-line
        />
      </Box>
    </Box>
  ),
};

export const AllSizes: Story = {
  ...Default,
  args: {
    id: 'AllSizes',
  },
};

export const AllSizesRequired: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesRequired',
    isRequired: true,
  },
};

export const AllSizesError: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesError',
    error: 'Agreement is required',
  },
};

export const AllSizesDisabled: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesDisabled',
    isDisabled: true,
  },
};

export const AllSizesHideLabel: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesHideLabel',
    hideLabel: true,
  },
};

export const AllSizesHideLabelError: Story = {
  ...Default,
  args: {
    ...AllSizesHideLabel.args,
    ...AllSizesError.args,
    id: 'AllSizesHideLabelError',
  },
};

export const AllSizesWithHelpText: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesWithHelpText',
    helpText: 'This is helpful text',
  },
};

export const AllSizesWithHelpTextRequired: Story = {
  ...Default,
  args: {
    ...AllSizesWithHelpText.args,
    ...AllSizesRequired.args,
    id: 'AllSizesWithHelpTextRequired',
  },
};

export const AllSizesWithHelpTextRequiredError: Story = {
  ...Default,
  args: {
    ...AllSizesWithHelpTextRequired.args,
    ...AllSizesError.args,
    id: 'AllSizesWithHelpTextRequired',
  },
};
