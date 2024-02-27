import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { OptionTileGroup, OptionTileGroupProps } from './option-tile-group';

const meta: Meta<typeof OptionTileGroup> = {
  title: 'Components/OptionTileGroup/Visual Regression Tests',
  component: OptionTileGroup,
};

export default meta;

const options = [
  {
    id: 'chocolate_default',
    value: 'chocolate',
    label: 'Chocolate',
  },
  {
    id: 'strawberry_default',
    value: 'strawberry',
    label: 'Strawberry',
  },
  {
    id: 'vanilla_default',
    value: 'vanilla',
    label: 'Vanilla',
  },
];

const Template: StoryFn<OptionTileGroupProps> = args => (
  <OptionTileGroup
    {...args}
    onChange={() => {}} // eslint-disable-line
  />
);

export const DefaultRadio: StoryFn<OptionTileGroupProps> = Template.bind({});
DefaultRadio.args = {
  options,
  name: 'default',
};

export const RadioOptionSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioOptionSelected.args = {
  options,
  value: 'chocolate',
  name: 'optionSelected',
};

export const MultipleOptionsNoneSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
MultipleOptionsNoneSelected.args = {
  options,
  name: 'multiNone',
  isMulti: true,
};

export const MultipleOptionsOneSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
MultipleOptionsOneSelected.args = {
  options,
  name: 'multiOne',
  isMulti: true,
  value: ['chocolate'],
};

export const MultipleOptionsAllSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
MultipleOptionsAllSelected.args = {
  options,
  name: 'multiAll',
  isMulti: true,
  value: ['chocolate', 'vanilla', 'strawberry'],
};

export const RadioWithDisabledOption: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithDisabledOption.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'radioOneDisabled',
};

export const RadioWithDisabledOptionSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithDisabledOptionSelected.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'radioOneDisabledSelected',
  value: 'cookies',
};

export const CheckboxWithDisabledOption: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithDisabledOption.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'checkboxWithDisabledOption',
  isMulti: true,
};

export const CheckboxWithDisabledOptionSelected: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithDisabledOptionSelected.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'checkboxWithDisabledOptionSelected',
  value: ['cookies'],
  isMulti: true,
};

export const RadioWithTitle: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithTitle.args = {
  options: [
    ...options,
  ],
  name: 'radioWithTitle',
  title: 'Ice cream flavors',
};

export const RadioWithTitleRequired: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithTitleRequired.args = {
  options: [
    ...options,
  ],
  name: 'radioWithTitleRequired',
  title: 'Ice cream flavors',
  isRequired: true,
};

export const RadioWithTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'radioOneWithTitleAndDescription',
  title: 'Ice cream flavors',
  description: 'Only if you finish your dinner',
};

export const RadioWithDescriptionOnly: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithDescriptionOnly.args = {
  options: [
    ...options,
  ],
  name: 'radioOneWithDescriptionOnly',
  description: 'Only if you finish your dinner',
};

export const CheckboxWithTitle: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithTitle.args = {
  options: [
    ...options,
  ],
  name: 'checkboxWithTitle',
  title: 'Ice cream flavors',
  isMulti: true,
};

export const CheckboxWithTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'checkboxOneWithTitleAndDescription',
  title: 'Ice cream flavors',
  description: 'Only if you finish your dinner',
  isMulti: true,
};

export const CheckboxWithDescriptionOnly: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithDescriptionOnly.args = {
  options: [
    ...options,
  ],
  name: 'checkboxOneWithDescriptionOnly',
  description: 'Only if you finish your dinner',
  isMulti: true,
};

export const RadioWithError: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithError.args = {
  options: [
    ...options,
  ],
  name: 'radioWithError',
  error: true,
};

export const RadioWithErrorTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithErrorTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorTitleAndDescription',
  error: true,
  title: 'Ice Cream Flavors',
  description: 'Only if you finish your dinner',
};

export const RadioRequiredWithErrorTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioRequiredWithErrorTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorTitleAndDescription',
  error: true,
  title: 'Ice Cream Flavors',
  description: 'Only if you finish your dinner',
  isRequired: true,
};

export const RadioWithErrorMessage: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithErrorMessage.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorMessage',
  error: 'something is wrong',
};

export const RadioWithErrorMessageTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithErrorMessageTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorMessageTitleAndDescription',
  title: 'Ice Cream Flavors',
  description: 'Only if you finish your dinner',
  error: 'something is wrong',
};

export const RadioRequiredWithErrorMessageTitleAndDescription: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioRequiredWithErrorMessageTitleAndDescription.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorMessageTitleAndDescription',
  title: 'Ice Cream Flavors',
  description: 'Only if you finish your dinner',
  isRequired: true,
  error: 'something is wrong',
};

export const RadioWithErrorAndSelectedOption: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithErrorAndSelectedOption.args = {
  options: [
    ...options,
  ],
  name: 'radioWithErrorAndSelectedOption',
  error: true,
  value: 'chocolate',
};

export const RadioWithErrorAndSelectedDisabledOption: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithErrorAndSelectedDisabledOption.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'radioWithErrorAndSelectedDisabledOption',
  error: true,
  value: 'cookies',
};

export const CheckboxWithErrorAndSelectedOption: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithErrorAndSelectedOption.args = {
  options: [
    ...options,
  ],
  name: 'checkboxWithErrorAndSelectedOption',
  error: true,
  value: ['chocolate'],
  isMulti: true,
};

export const CheckboxWithErrorAndSelectedDisabledOption: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithErrorAndSelectedDisabledOption.args = {
  options: [
    ...options,
    {
      label: 'Cookies and Cream',
      value: 'cookies',
      id: 'cookies',
      disabled: true,
    },
  ],
  name: 'checkboxWithErrorAndSelectedOption',
  error: true,
  isMulti: true,
  value: ['cookies'],
};

export const RadioWithHorizontalDirection: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithHorizontalDirection.args = {
  options: [
    ...options,
  ],
  name: 'radioWithHorizontalDirection',
  direction: 'row',
};

export const RadioWithContentWidthVertical: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithContentWidthVertical.args = {
  options: [
    ...options,
  ],
  name: 'radioWithContentWidthVertical',
  isFullWidth: false,
};

export const RadioWithContentWidthHorizontal: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithContentWidthHorizontal.args = {
  options: [
    ...options,
  ],
  name: 'radioWithContentWidthHorizontal',
  isFullWidth: false,
  direction: 'row',
};

export const RadioWithCustomContent: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithCustomContent.args = {
  options: [
    ...options,
    {
      label: 'custom',
      value: 'custom',
      id: 'custom',
      render: () => <div>hello world, I am a custom node!</div>,
    },
  ],
  name: 'radioWithCustomContent',
};

export const CheckboxWithCustomContent: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithCustomContent.args = {
  options: [
    ...options,
    {
      label: 'custom',
      value: 'custom',
      id: 'custom',
      render: () => <div>hello world, I am a custom node!</div>,
    },
  ],
  name: 'checkboxWithCustomContent',
  isMulti: true,
};

export const RadioWithHiddenRadio: StoryFn<OptionTileGroupProps> = Template.bind({});
RadioWithHiddenRadio.args = {
  options: [
    ...options,
  ],
  hideInput: true,
  name: 'radioWithHiddenRadio',
};

export const CheckboxWithHiddenCheckbox: StoryFn<OptionTileGroupProps> = Template.bind({});
CheckboxWithHiddenCheckbox.args = {
  options: [
    ...options,
  ],
  hideInput: true,
  name: 'checkboxWithHiddenCheckbox',
  isMulti: true,
};

export const ResponsiveDirection: StoryFn<OptionTileGroupProps> = Template.bind({});
ResponsiveDirection.args = {
  options: [
    ...options,
  ],
  direction: {
    base: 'column',
    tablet: 'row',
    desktop: 'column',
    hd: 'row',
  },
  name: 'radioWithResponsiveDirection',
};
ResponsiveDirection.parameters = RESPONSIVE_STORY;
