import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Button, ButtonProps } from './button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import { Box } from '../box/box';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Visual Regression Tests',
  component: Button,
};

export default meta;

type StoryWithIcon = StoryObj<ButtonProps & { showIconButton: boolean }>;
type Story = StoryObj<typeof Button>;

const Default: StoryWithIcon = {
  render: ({ showIconButton, ...args }: { showIconButton: boolean }) => (
    <Box gap="xl">
      {BUTTON_SIZES.map((size) => (
        <Box gap="sm" key={size}>
          <Box gap="sm" direction="row" alignItems="flex-start">
            {BUTTON_VARIANTS.map((variant) => (
              <Button
                {...args}
                size={size}
                variant={variant}
                key={`${size}-${variant}`}
              >
                {`${size} ${variant}`}
              </Button>
            ))}
            {showIconButton && (
              <Button
                {...args}
                iconPrefix="circle"
                iconSuffix="property-agreement"
                size={size}
                variant="primary"
                key={`${size}-icon`}
              >
                {`${size} icon`}
              </Button>
            )}
          </Box>
          <Box gap="sm" direction="row" alignItems="flex-start" key={size}>
            {BUTTON_VARIANTS.map((variant) => (
              <Button
                {...args}
                size={size}
                variant={variant}
                isOutlined
                key={`${size}-${variant}-outline`}
              >
                {`${size} ${variant}`}
              </Button>
            ))}
            {showIconButton && (
              <Button
                {...args}
                iconPrefix="circle"
                iconSuffix="property-agreement"
                size={size}
                isOutlined
                variant="primary"
                key={`${size}-icon`}
              >
                {`${size} icon`}
              </Button>
            )}
          </Box>
        </Box>
      ))}
      <Box gap="sm">
        <Button {...args}>Full Width</Button>
        <Button {...args} fullWidth isOutlined>
          Full Width Outline
        </Button>
      </Box>
    </Box>
  ),
};

const SingleButton: Story = {
  render: (args) => (
    // the div is to add padding so that chromatic captures the box-shadow focus state
    <div className="p-md">
      <Button {...args}>label</Button>
    </div>
  ),
};

export const Sizes: StoryWithIcon = {
  ...Default,
  args: {
    showIconButton: true,
  },
  parameters: RESPONSIVE_STORY,
};

export const Loading: StoryWithIcon = {
  ...Default,
  args: {
    isLoading: true,
    showIconButton: true,
  },
};

export const Disabled: StoryWithIcon = {
  ...Default,
  args: {
    isDisabled: true,
    showIconButton: true,
  },
};

export const WithIcons: StoryWithIcon = {
  ...Default,
  args: {
    iconPrefix: 'mail',
    iconSuffix: 'chat',
  },
};

const Focus: Story = {
  ...SingleButton,
  play: async ({ canvasElement }) => {
    // Starts querying the component from its root
    const canvas = within(canvasElement);

    // Looks up the button and interacts with it.
    canvas.getByRole('button').focus();
  },
};

export const PrimaryFocus: Story = {
  ...Focus,
  args: {},
};

export const SuccessFocus: Story = {
  ...Focus,
  args: {
    variant: 'success',
  },
};

export const DangerFocus: Story = {
  ...Focus,
  args: {
    variant: 'danger',
  },
};

export const LightFocus: Story = {
  ...Focus,
  args: {
    variant: 'light',
  },
};

export const DarkFocus: Story = {
  ...Focus,
  args: {
    variant: 'dark',
  },
};

export const WhiteFocus: Story = {
  ...Focus,
  args: {
    variant: 'white',
  },
};

const OutlinedFocus: Story = {
  ...Focus,
  args: {
    isOutlined: true,
  },
};
export const PrimaryOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
  },
};

export const SuccessOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
    variant: 'success',
  },
};

export const DangerOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
    variant: 'danger',
  },
};

export const LightOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
    variant: 'light',
  },
};

export const DarkOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
    variant: 'dark',
  },
};

export const WhiteOutlinedFocus: Story = {
  ...Focus,
  args: {
    ...OutlinedFocus.args,
    variant: 'white',
  },
};
