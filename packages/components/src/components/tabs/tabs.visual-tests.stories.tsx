import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Visual Regression Tests',
  component: Tabs,
};

export default meta;

const Template: StoryFn<TabsProps> = ({ ...args }) => (
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
);

export const ManyTabs: StoryFn<TabsProps> = Template.bind({});
ManyTabs.args = {
  value: 0,
};
ManyTabs.parameters = RESPONSIVE_STORY;

export const ManyTabsLastSelected: StoryFn<TabsProps> = Template.bind({});
ManyTabsLastSelected.args = {
  value: 7,
};
ManyTabsLastSelected.parameters = RESPONSIVE_STORY;
