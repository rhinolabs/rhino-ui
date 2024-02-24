import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { CheckboxInput, CheckboxInputProps } from './checkbox-input';
import { CheckboxSize } from './components/checkbox';

const meta: Meta<typeof CheckboxInput> = {
  title: 'Components/CheckboxInput/Visual Regression Tests',
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<CheckboxInputProps>;

const Responsive: Story = {
  parameters: RESPONSIVE_STORY,
};

const SizeOne: CheckboxSize = {
  base: 'sm',
  tablet: 'md',
  desktop: 'lg',
  hd: 'sm',
};

const SizeTwo: CheckboxSize = {
  base: 'md',
  tablet: 'lg',
  desktop: 'sm',
  hd: 'md',
};

const SizeThree: CheckboxSize = {
  base: 'lg',
  tablet: 'sm',
  desktop: 'md',
  hd: 'lg',
};

const ResponsiveUnchecked: Story = {
  ...Responsive,
  args: {
    isChecked: false,
  },
};

const ResponsiveChecked: Story = {
  ...Responsive,
  args: {
    isChecked: true,
  },
};

const ResponsiveInderterminate: Story = {
  ...ResponsiveChecked,
  args: {
    ...ResponsiveChecked.args,
    isIndeterminate: true,
  },
};

export const ResponsiveSizeOneUnchecked: Story = {
  ...ResponsiveUnchecked,
  args: {
    ...ResponsiveUnchecked.args,
    id: 'ResponsiveSizeOneUnchecked',
    label: 'ResponsiveSizeOneUnchecked',
    size: SizeOne,
  },
};

export const ResponsiveSizeTwoUnchecked: Story = {
  ...ResponsiveUnchecked,
  args: {
    ...ResponsiveUnchecked.args,
    id: 'ResponsiveSizeTwoUnchecked',
    label: 'ResponsiveSizeTwoUnchecked',
    size: SizeTwo,
  },
};

export const ResponsiveSizeThreeUnchecked: Story = {
  ...ResponsiveUnchecked,
  args: {
    ...ResponsiveUnchecked.args,
    id: 'ResponsiveSizeThreeUnchecked',
    label: 'ResponsiveSizeThreeUnchecked',
    size: SizeThree,
  },
};

export const ResponsiveSizeOneChecked: Story = {
  ...ResponsiveChecked,
  args: {
    ...ResponsiveChecked.args,
    id: 'ResponsiveSizeOneChecked',
    label: 'ResponsiveSizeOneChecked',
    size: SizeOne,
  },
};

export const ResponsiveSizeTwoChecked: Story = {
  ...ResponsiveChecked,
  args: {
    ...ResponsiveChecked.args,
    id: 'ResponsiveSizeTwoChecked',
    label: 'ResponsiveSizeTwoChecked',
    size: SizeTwo,
  },
};

export const ResponsiveSizeThreeChecked: Story = {
  ...ResponsiveChecked,
  args: {
    ...ResponsiveChecked.args,
    id: 'ResponsiveSizeThreeChecked',
    label: 'ResponsiveSizeThreeChecked',
    size: SizeThree,
  },
};

export const ResponsiveSizeOneIndeterminate: Story = {
  ...ResponsiveInderterminate,
  args: {
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeOneIndeterminate',
    label: 'ResponsiveSizeOneIndeterminate',
    size: SizeOne,
  },
};

export const ResponsiveSizeTwoIndeterminate: Story = {
  ...ResponsiveInderterminate,
  args: {
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeTwoIndeterminate',
    label: 'ResponsiveSizeTwoIndeterminate',
    size: SizeTwo,
  },
};

export const ResponsiveSizeThreeIndeterminate: Story = {
  ...ResponsiveInderterminate,
  args: {
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeThreeIndeterminate',
    label: 'ResponsiveSizeThreeIndeterminate',
    size: SizeThree,
  },
};

const Focus: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getByRole('checkbox').focus();
  },
};
export const FocusChecked: Story = {
  ...Focus,
  args: {
    id: 'FocusUnchecked',
    label: 'Focus Checked',
    isChecked: true,
  },
};

export const FocusUnchecked: Story = {
  ...Focus,
  args: {
    id: 'FocusUnchecked',
    label: 'Focus Unchecked',
    isChecked: false,
  },
};

export const FocusErrorChecked: Story = {
  ...Focus,
  args: {
    id: 'FocusErrorChecked',
    label: 'Focus Error Checked',
    isChecked: true,
    error: true,
  },
};

export const FocusErrorUnchecked: Story = {
  ...Focus,
  args: {
    id: 'FocusErrorUnchecked',
    label: 'Focus Error Unchecked',
    isChecked: false,
  },
};
