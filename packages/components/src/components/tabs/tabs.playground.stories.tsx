import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, boxPropsKeys } from '../box/box';
import { Tabs, TabsProps } from './tabs';
import { TabPanels } from '../tab-panels/tab-panels';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Playground',
  component: Tabs,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [0, 1, 2],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['md', 'sm'],
      },
    },
    isCentered: {
      control: {
        type: 'boolean',
      },
    },
    isFullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabledTabs: {
      control: {
        type: 'check',
        options: [0, 1, 2],
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    ...boxPropsKeys.reduce(
      (acc, curr) => ({ ...acc, [curr]: { table: { disable: true } } }),
      {}
    ),
  },
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Playground: Story = {
  render: ({value, size, disabledTabs, ...args}) => (
    <Box gap="md">
      <Tabs {...args} value={value} size={size}>
        <Tabs.Item isDisabled={disabledTabs.includes(0)}>Tab 0</Tabs.Item>
        <Tabs.Item isDisabled={disabledTabs.includes(1)}>Tab 1</Tabs.Item>
        <Tabs.Item isDisabled={disabledTabs.includes(2)}>Tab 2</Tabs.Item>
      </Tabs>
      <TabPanels value={value}>
        <Box padding="md" background="grey-50">
          Panel 0
        </Box>
        <Box padding="md" background="grey-50">
          Panel 1
        </Box>
        <Box padding="md" background="grey-50">
          Panel 2
        </Box>
      </TabPanels>
    </Box>
  ),
  args: {
    value: 0,
    size: 'md',
    disabledTabs: [],
  },
};
