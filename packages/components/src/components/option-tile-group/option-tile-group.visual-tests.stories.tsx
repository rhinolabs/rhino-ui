import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { OptionTileGroup, OptionTileGroupProps } from './option-tile-group';

const meta: Meta<typeof OptionTileGroup> = {
  title: 'Components/OptionTileGroup/Visual Regression Tests',
  component: OptionTileGroup,
};

export default meta;

type Story = StoryObj<OptionTileGroupProps>;

const Default: Story = {
  render: (args) => (
    <OptionTileGroup
      {...args}
      onChange={() => {}} // eslint-disable-line
    />
  ),
  args: {
    options: [
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
    ],
  },
};

export const DefaultRadio: Story = {
  ...Default,
  args: {
    ...Default.args,
    name: 'default',
  },
};

export const RadioOptionSelected: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    value: 'chocolate',
    name: 'optionSelected',
  },
};

const Checkbox: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    isMulti: true,
  },
};
export const MultipleOptionsNoneSelected: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    name: 'multiNone',
  },
};

export const MultipleOptionsOneSelected: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    name: 'multiOne',
    value: ['chocolate'],
  },
};

export const MultipleOptionsAllSelected: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    name: 'multiAll',
    isMulti: true,
    value: ['chocolate', 'vanilla', 'strawberry'],
  },
};

const RadioWithDisabledOption: Story = {
  ...Default,
  args: {
    options: [
      ...DefaultRadio.args?.options!,
      {
        label: 'Cookies and Cream',
        value: 'cookies',
        id: 'cookies',
        disabled: true,
      },
    ],
  },
};

export const RadioWithOneDisabledOption: Story = {
  ...RadioWithDisabledOption,
  args: {
    ...RadioWithDisabledOption.args,
    name: 'radioOneDisabled',
  },
};

export const RadioWithDisabledOptionSelected: Story = {
  ...RadioWithDisabledOption,
  args: {
    ...RadioWithDisabledOption.args,
    name: 'radioOneDisabledSelected',
    value: 'cookies',
  },
};

export const CheckboxWithDisabledOption: Story = {
  ...RadioWithDisabledOption,
  args: {
    ...RadioWithDisabledOption.args,
    name: 'checkboxWithDisabledOption',
    isMulti: true,
  },
};

export const CheckboxWithDisabledOptionSelected: Story = {
  ...RadioWithDisabledOption,
  args: {
    ...RadioWithDisabledOption.args,
    name: 'checkboxWithDisabledOptionSelected',
    value: ['cookies'],
    isMulti: true,
  },
};

export const RadioWithTitle: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    name: 'radioWithTitle',
    title: 'Ice cream flavors',
  },
};

export const RadioWithTitleRequired: Story = {
  ...Default,
  args: {
    ...RadioWithTitle.args,
    name: 'radioWithTitleRequired',
    isRequired: true,
  },
};

export const RadioWithTitleAndDescription: Story = {
  ...Default,
  args: {
    ...RadioWithTitle.args,
    name: 'radioOneWithTitleAndDescription',
    description: 'Only if you finish your dinner',
  },
};

export const RadioWithDescriptionOnly: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    name: 'radioOneWithDescriptionOnly',
    description: 'Only if you finish your dinner',
  },
};

export const CheckboxWithTitle: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    name: 'checkboxWithTitle',
    title: 'Ice cream flavors',
  },
};

export const CheckboxWithTitleAndDescription: Story = {
  ...Default,
  args: {
    ...CheckboxWithTitle.args,
    name: 'checkboxOneWithTitleAndDescription',
    description: 'Only if you finish your dinner',
  },
};

export const CheckboxWithDescriptionOnly: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    name: 'checkboxOneWithDescriptionOnly',
    description: 'Only if you finish your dinner',
  },
};

export const RadioWithError: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    name: 'radioWithError',
    error: true,
  },
};

export const RadioWithErrorTitleAndDescription: Story = {
  ...Default,
  args: {
    ...RadioWithError.args,
    name: 'radioWithErrorTitleAndDescription',
    title: 'Ice Cream Flavors',
    description: 'Only if you finish your dinner',
  },
};

export const RadioRequiredWithErrorTitleAndDescription: Story = {
  ...Default,
  args: {
    ...RadioWithErrorTitleAndDescription.args,
    name: 'radioWithErrorTitleAndDescription',
    isRequired: true,
  },
};

export const RadioWithErrorMessage: Story = {
  ...Default,
  args: {
    ...RadioWithError.args,
    name: 'radioWithErrorMessage',
    error: 'something is wrong',
  },
};

export const RadioWithErrorMessageTitleAndDescription: Story = {
  ...Default,
  args: {
    ...RadioWithErrorTitleAndDescription.args,
    ...RadioWithErrorMessage.args,
    name: 'radioWithErrorMessageTitleAndDescription',
  },
};

export const RadioRequiredWithErrorMessageTitleAndDescription: Story = {
  ...RadioWithErrorMessageTitleAndDescription,
  args: {
    ...RadioWithErrorMessageTitleAndDescription.args,
    name: 'radioWithErrorMessageTitleAndDescription',
    isRequired: true,
  },
};

export const RadioWithErrorAndSelectedOption: Story = {
  ...Default,
  args: {
    ...RadioWithError.args,
    name: 'radioWithErrorAndSelectedOption',
    value: 'chocolate',
  },
};

export const RadioWithErrorAndSelectedDisabledOption: Story = {
  ...Default,
  args: {
    ...RadioWithError.args,
    ...RadioWithDisabledOptionSelected.args,
    name: 'radioWithErrorAndSelectedDisabledOption',
    value: 'cookies',
  },
};

const CheckboxWithError: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    error: true,
  },
};

export const CheckboxWithErrorAndSelectedOption: Story = {
  ...Default,
  args: {
    ...CheckboxWithError.args,
    name: 'checkboxWithErrorAndSelectedOption',
    value: ['chocolate'],
  },
};

export const CheckboxWithErrorAndSelectedDisabledOption: Story = {
  ...Default,
  args: {
    ...CheckboxWithDisabledOptionSelected.args,
    error: true,
  },
};

export const RadioWithHorizontalDirection: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    name: 'radioWithHorizontalDirection',
    direction: 'row',
  },
};

export const RadioWithContentWidthVertical: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    name: 'radioWithContentWidthVertical',
    isFullWidth: false,
  },
};

export const RadioWithContentWidthHorizontal: Story = {
  ...Default,
  args: {
    ...RadioWithHorizontalDirection.args,
    ...RadioWithContentWidthVertical.args,
    name: 'radioWithContentWidthHorizontal',
  },
};

export const RadioWithCustomContent: Story = {
  ...Default,
  args: {
    options: [
      ...DefaultRadio.args?.options!,
      {
        label: 'custom',
        value: 'custom',
        id: 'custom',
        render: (_args) => <div>hello world, I am a custom node!</div>,
      },
    ],
    name: 'radioWithCustomContent',
  },
};

export const CheckboxWithCustomContent: Story = {
  ...Default,
  args: {
    ...RadioWithCustomContent.args,
    isMulti: true,
  },
};

export const RadioWithHiddenRadio: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    hideInput: true,
    name: 'radioWithHiddenRadio',
  },
};

export const CheckboxWithHiddenCheckbox: Story = {
  ...Default,
  args: {
    ...Checkbox.args,
    hideInput: true,
    name: 'checkboxWithHiddenCheckbox',
  },
};

export const ResponsiveDirection: Story = {
  ...Default,
  args: {
    ...DefaultRadio.args,
    direction: {
      base: 'column',
      tablet: 'row',
      desktop: 'column',
      hd: 'row',
    },
    name: 'radioWithResponsiveDirection',
  },
  parameters: RESPONSIVE_STORY,
};
