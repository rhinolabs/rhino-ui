import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { CheckboxInput, CheckboxInputProps } from './checkbox-input';

const meta: Meta<typeof CheckboxInput> = {
  title: 'Components/CheckboxInput/Visual Regression Tests',
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<CheckboxInputProps>;

const Responsive: Story = {
  parameters: RESPONSIVE_STORY,
};

const ResponsiveSizeOne: Story = {
  ...Responsive,
  args: {
    size: {
      base: 'sm',
      tablet: 'md',
      desktop: 'lg',
      hd: 'sm',
    },
  },
};

const ResponsiveSizeTwo: Story = {
  ...Responsive,
  args: {
    size: {
      base: 'md',
      tablet: 'lg',
      desktop: 'sm',
      hd: 'md',
    },
  },
};

const ResponsiveSizeThree: Story = {
  ...Responsive,
  args: {
    size: {
      base: 'lg',
      tablet: 'sm',
      desktop: 'md',
      hd: 'lg',
    },
  },
};
const Checked: Story = {
  args: {
    isChecked: true,
  },
};

const Unchecked: Story = {
  args: {
    isChecked: false,
  },
};

const ResponsiveInderterminate: Story = {
  ...Responsive,
  args: {
    isIndeterminate: true,
  },
};

export const ResponsiveSizeOneUnchecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeOne,
    ...Unchecked.args,
    id: 'ResponsiveSizeOneUnchecked',
    label: 'ResponsiveSizeOneUnchecked',
  },
};

export const ResponsiveSizeTwoUnchecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeTwo.args,
    ...Unchecked.args,
    id: 'ResponsiveSizeTwoUnchecked',
    label: 'ResponsiveSizeTwoUnchecked',
  },
};

export const ResponsiveSizeThreeUnchecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeThree.args,
    ...Unchecked.args,
    id: 'ResponsiveSizeThreeUnchecked',
    label: 'ResponsiveSizeThreeUnchecked',
  },
};

export const ResponsiveSizeOneChecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeOne.args,
    ...Checked.args,
    id: 'ResponsiveSizeOneChecked',
    label: 'ResponsiveSizeOneChecked',
  },
};

export const ResponsiveSizeTwoChecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeTwo.args,
    ...Checked.args,
    id: 'ResponsiveSizeTwoChecked',
    label: 'ResponsiveSizeTwoChecked',
  },
};

export const ResponsiveSizeThreeChecked: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeThree.args,
    ...Checked.args,
    id: 'ResponsiveSizeThreeChecked',
    label: 'ResponsiveSizeThreeChecked',
  },
};

export const ResponsiveSizeOneIndeterminate: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeOne.args,
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeOneIndeterminate',
    label: 'ResponsiveSizeOneIndeterminate',
  },
};

export const ResponsiveSizeTwoIndeterminate: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeTwo.args,
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeTwoIndeterminate',
    label: 'ResponsiveSizeTwoIndeterminate',
  },
};

export const ResponsiveSizeThreeIndeterminate: Story = {
  ...Responsive,
  args: {
    ...ResponsiveSizeThree.args,
    ...ResponsiveInderterminate.args,
    id: 'ResponsiveSizeThreeIndeterminate',
    label: 'ResponsiveSizeThreeIndeterminate',
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
    ...Checked.args,
    id: 'FocusUnchecked',
    label: 'Focus Checked',
  },
};

export const FocusUnchecked: Story = {
  ...Focus,
  args: {
    ...Unchecked.args,
    id: 'FocusUnchecked',
    label: 'Focus Unchecked',
  },
};

const FocusError: Story = {
  ...Focus,
  args: {
    id: 'FocusError',
    label: 'Focus Error',
    error: true,
  },
};

export const FocusErrorChecked: Story = {
  ...Focus,
  args: {
    ...FocusError.args,
    ...Checked.args,
    id: 'FocusErrorChecked',
    label: 'Focus Error Checked',
  },
};

export const FocusErrorUnchecked: Story = {
  ...Focus,
  args: {
    ...FocusError.args,
    ...Unchecked.args,
    id: 'FocusErrorUnchecked',
    label: 'Focus Error Unchecked',
  },
};
