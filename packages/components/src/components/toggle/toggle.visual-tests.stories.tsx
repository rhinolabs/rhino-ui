import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<ToggleProps> = ({ ...args }) => (
  <Box gap="xl">
    {TOGGLE_SIZES.map(size => (
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
);

export const AllSizes: StoryFn<ToggleProps> = Template.bind({});
AllSizes.args = { id: 'AllSizes' };

export const AllSizesRequired: StoryFn<ToggleProps> = Template.bind({});
AllSizesRequired.args = { id: 'AllSizesRequired', isRequired: true };

export const AllSizesError: StoryFn<ToggleProps> = Template.bind({});
AllSizesError.args = { id: 'AllSizesError', error: 'Agreement is required' };

export const AllSizesDisabled: StoryFn<ToggleProps> = Template.bind({});
AllSizesDisabled.args = { id: 'AllSizesDisabled', isDisabled: true };

export const AllSizesHideLabel: StoryFn<ToggleProps> = Template.bind({});
AllSizesHideLabel.args = { id: 'AllSizesHideLabel', hideLabel: true };

export const AllSizesHideLabelError: StoryFn<ToggleProps> = Template.bind({});
AllSizesHideLabelError.args = {
  id: 'AllSizesHideLabelError',
  hideLabel: true,
  error: 'Agreement is required',
};

export const AllSizesWithHelpText: StoryFn<ToggleProps> = Template.bind({});
AllSizesWithHelpText.args = {
  id: 'AllSizesWithHelpText',
  helpText: 'This is helpful text',
};

export const AllSizesWithHelpTextRequired: StoryFn<ToggleProps> = Template.bind({});
AllSizesWithHelpTextRequired.args = {
  id: 'AllSizesWithHelpTextRequired',
  helpText: 'This is helpful text',
  isRequired: true,
};

export const AllSizesWithHelpTextRequiredError: StoryFn<ToggleProps> = Template.bind({});
AllSizesWithHelpTextRequiredError.args = {
  id: 'AllSizesWithHelpTextRequired',
  helpText: 'This is helpful text',
  isRequired: true,
  error: 'Agreement is required',
};
