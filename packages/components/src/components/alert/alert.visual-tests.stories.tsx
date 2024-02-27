import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from './alert';
import { ALERT_VARIANTS } from './alert.constants';
import { Box } from '../box/box';
import { Heading } from '../heading/heading';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert/Visual Regression Tests',
  component: Alert,
};

export default meta;

type Story = StoryObj<AlertProps>;
const Default: Story = {
  render: (args) => (
    <Box>
      {ALERT_VARIANTS.map((variant) => (
        <Alert
          {...args}
          className="m-bottom-md"
          variant={variant}
          key={variant}
        />
      ))}
      <Box className="m-top-xl m-bottom-md">
        <Heading size="md">isCompact</Heading>
      </Box>
      {ALERT_VARIANTS.map((variant) => (
        <Alert
          {...args}
          className="m-bottom-md"
          variant={variant}
          isCompact
          key={`compact-${variant}`}
        />
      ))}
    </Box>
  ),
};

const TitleOnly: Story = {
  ...Default,
  args: {
    title: 'Title Text Only',
  },
};

const MessageOnly: Story = {
  ...Default,
  args: {
    message: 'Message text only',
  },
};

const hasIcon: Story = {
  ...Default,
  args: {
    hasIcon: true,
  },
};

const isClosable: Story = {
  ...Default,
  args: {
    isClosable: true,
  },
};

export const AllProps: Story = {
  ...Default,
  args: {
    ...TitleOnly.args,
    ...MessageOnly.args,
    ...hasIcon.args,
    ...isClosable.args,
  },
};

export { TitleOnly };
export { MessageOnly };
