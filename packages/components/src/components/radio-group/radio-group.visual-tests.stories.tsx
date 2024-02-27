import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { RadioGroup, RadioGroupProps } from './radio-group';
import { Box } from '../box/box';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup/Visual Regression Tests',
  component: RadioGroup,
};

export default meta;

const sizes = [
  'sm',
  'md',
  'lg',
  {
    base: 'sm',
    tablet: 'md',
    desktop: 'lg',
    hd: 'sm',
  },
] as RadioGroupProps['size'][];

const options = [
  {
    id: 'one',
    value: 'one',
    label: 'One',
  },
  {
    id: 'two',
    value: 'two',
    label: 'Two',
  },
  {
    id: 'three',
    value: 'three',
    label: <div>Three - node label</div>,
  },
];

type Story = StoryObj<RadioGroupProps>;

const Default: Story = {
  render: (args) => (
    <Box gap="xl">
      {sizes.map((size) => (
        <Box gap="md" key={`${args.id}-${size}`}>
          {/* eslint-disable-next-line */}
          {/* @ts-ignore */}
          <RadioGroup size={size} options={options} {...args} />
        </Box>
      ))}
    </Box>
  ),
};

export const AllSizes: Story = {
  ...Default,
  args: {
    id: 'AllSizes',
  },
};

export const AllSizesChecked: Story = {
  ...Default,
  args: {
    id: 'AllSizesChecked',
    value: 'one',
  },
  parameters: RESPONSIVE_STORY,
};

export const AllSizesError: Story = {
  ...Default,
  args: {
    id: 'AllSizesError',
    error: 'Agreement is required',
  },
};

export const AllSizesDisabled: Story = {
  ...Default,
  args: {
    id: 'AllSizesDisabled',
    isDisabled: true,
  },
};

export const AllSizesDisabledChecked: Story = {
  ...Default,
  args: {
    ...AllSizesChecked.args,
    ...AllSizesDisabled.args,
    id: 'AllSizesDisabledChecked',
  },
};

export const AllSizesTitle: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    title: 'title',
  },
};

export const AllSizesTitleDisabled: Story = {
  ...Default,
  args: {
    ...AllSizesTitle.args,
    ...AllSizesDisabled.args,
    id: 'AllSizesTitleDisabled',
  },
};

export const AllSizesTitleDisabledError: Story = {
  ...Default,
  args: {
    ...AllSizesTitleDisabled.args,
    ...AllSizesError.args,
    id: 'AllSizesTitleDisabledError',
  },
};

export const AllSizesTitleDisabledErrorChecked: Story = {
  ...Default,
  args: {
    ...AllSizesTitleDisabledError.args,
    ...AllSizesChecked.args,
    id: 'AllSizesTitleDisabledErrorChecked',
  },
};

export const AllSizesTitleDisabledOption: Story = {
  ...Default,
  args: {
    id: 'AllSizesTitleDisabledOption',
    value: 'one',
    options: [
      ...options,
      {
        value: 'disabled',
        id: 'disabled',
        label: 'disabled',
        disabled: true,
      },
    ],
  },
};

export const AllSizesTitleDisabledOptionSelected: Story = {
  ...Default,
  args: {
    ...AllSizesTitleDisabledOption.args,
    id: 'AllSizesTitleDisabledOptionSelected',
    value: 'disabled',
  },
};

export const AllSizesHorizontal: Story = {
  ...Default,
  args: {
    ...AllSizes.args,
    id: 'AllSizesHorizontal',
    direction: 'row',
  },
};

export const AllSizesHorizontalChecked: Story = {
  ...Default,
  args: {
    ...AllSizesChecked.args,
    ...AllSizesHorizontal.args,
    id: 'AllSizesHorizontalRequired',
  },
};

export const AllSizesHorizontalError: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesError.args,
    id: 'AllSizesHorizontalError',
  },
};

export const AllSizesHorizontalDisabled: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesDisabled.args,
    id: 'AllSizesHorizontalDisabled',
  },
};

export const AllSizesHorizontalDisabledChecked: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontalDisabled.args,
    ...AllSizesChecked.args,
    id: 'AllSizesHorizontalDisabled',
  },
};

export const AllSizesHorizontalTitle: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesTitle.args,
    id: 'AllSizesHorizontalTitle',
  },
};

export const AllSizesHorizontalTitleDisabled: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontalTitle.args,
    ...AllSizesDisabled.args,
    id: 'AllSizesHorizontalTitleDisabled',
  },
};

export const AllSizesHorizontalTitleDisabledError: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesTitleDisabledError.args,
    id: 'AllSizesHorizontalTitleDisabledError',
  },
};

export const AllSizesHorizontalTitleDisabledErrorChecked: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesTitleDisabledErrorChecked.args,
    id: 'AllSizesHorizontalTitleDisabledErrorChecked',
  },
};

export const AllSizesHorizontalTitleDisabledOption: Story = {
  ...Default,
  args: {
    ...AllSizesTitleDisabledOption.args,
    ...AllSizesHorizontal.args,
    id: 'AllSizesHorizontalTitleDisabledOption',
  },
};

export const AllSizesHorizontalTitleDisabledOptionSelected: Story = {
  ...Default,
  args: {
    ...AllSizesHorizontal.args,
    ...AllSizesTitleDisabledOptionSelected.args,
    id: 'AllSizesHorizontalTitleDisabledOptionSelected',
  },
};

const Focus: Story = {
  render: (args) => <RadioGroup {...args} options={options} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.queryAllByRole('radio');
    radios[0].focus();
  },
  args: {
    isRequired: true,
    title: 'title required',
  },
};

export const FocusSelected: Story = {
  ...Focus,
  args: {
    ...Focus.args,
    id: 'FocusSelected',
    value: 'one',
  },
};

export const FocusUnselected: Story = {
  ...Focus,
  args: {
    ...Focus.args,
    id: 'FocusUnselected',
    value: 'two',
  },
};
