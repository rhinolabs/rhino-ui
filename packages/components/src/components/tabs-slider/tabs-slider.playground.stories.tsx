import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, boxPropsKeys } from '../box/box';
import { TabsSlider, TabsSliderProps } from './tabs-slider';
import { TabPanels } from '../tab-panels/tab-panels';

const meta: Meta<typeof TabsSlider> = {
  title: 'Components/TabsSlider/Playground',
  component: TabsSlider,
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
        options: ['sm', 'md', 'lg'],
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

type Story = StoryObj<TabsSliderProps>;
export const Playground: Story = {
  render: ({ value, size, disabledTabs, ...args }) => (
    <Box gap="md">
      <TabsSlider {...args} value={value} size={size}>
        <TabsSlider.Item isDisabled={disabledTabs.includes(0)}>
          Tab 0
        </TabsSlider.Item>
        <TabsSlider.Item isDisabled={disabledTabs.includes(1)}>
          Tab 1
        </TabsSlider.Item>
        <TabsSlider.Item isDisabled={disabledTabs.includes(2)}>
          Tab 2
        </TabsSlider.Item>
      </TabsSlider>
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
