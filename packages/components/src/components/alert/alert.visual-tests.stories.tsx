import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert, AlertProps } from './alert';
import { ALERT_VARIANTS } from './alert.constants';
import { Box } from '../box/box';
import { Heading } from '../heading/heading';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert/Visual Regression Tests',
  component: Alert,
};

export default meta;

const Template: StoryFn<AlertProps> = args => (
  <Box>
    {ALERT_VARIANTS.map(variant => (
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
    {ALERT_VARIANTS.map(variant => (
      <Alert
        {...args}
        className="m-bottom-md"
        variant={variant}
        isCompact
        key={`compact-${variant}`}
      />
    ))}
  </Box>
);

export const AllProps: StoryFn<AlertProps> = Template.bind({});
AllProps.args = {
  title: 'Title Text',
  message: 'Message text',
  hasIcon: true,
  isClosable: true,
};

export const TitleOnly: StoryFn<AlertProps> = Template.bind({});
TitleOnly.args = {
  title: 'Title Text Only',
};

export const MessageOnly: StoryFn<AlertProps> = Template.bind({});
MessageOnly.args = {
  message: 'Message text only',
};
