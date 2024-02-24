import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Visual Regression Tests',
  component: Tabs,
};

export default meta;

type Story = StoryObj<TabsProps>;

const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Item>Tab 1</Tabs.Item>
      <Tabs.Item>Tab 2</Tabs.Item>
      <Tabs.Item>Tab 3</Tabs.Item>
      <Tabs.Item isDisabled>Disabled</Tabs.Item>
      <Tabs.Item>Tab 5</Tabs.Item>
      <Tabs.Item>Tab 6</Tabs.Item>
      <Tabs.Item>Tab 7</Tabs.Item>
      <Tabs.Item>Tab 8</Tabs.Item>
    </Tabs>
  ),
  parameters: RESPONSIVE_STORY,
};

export const ManyTabs: Story = {
  ...Default,
  args: {
    value: 0,
  },
};

export const ManyTabsLastSelected: Story = {
  ...Default,
  args: {
    value: 7,
  },
};
