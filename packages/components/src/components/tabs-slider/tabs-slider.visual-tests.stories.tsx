import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TabsSlider, TabsSliderProps } from './tabs-slider';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof TabsSlider> = {
  title: 'Components/TabsSlider/Visual Regression Tests',
  component: TabsSlider,
};

export default meta;

type Story = StoryObj<TabsSliderProps>;
const Default: Story = {
  render: (args) => (
    <TabsSlider {...args}>
      <TabsSlider.Item>Tab 1</TabsSlider.Item>
      <TabsSlider.Item>Tab 2</TabsSlider.Item>
      <TabsSlider.Item>Tab 3</TabsSlider.Item>
      <TabsSlider.Item isDisabled>Disabled</TabsSlider.Item>
    </TabsSlider>
  ),
};

export const ResponsiveSize: Story = {
  ...Default,
  args: {
    value: 0,
    size: {
      base: 'sm',
      tablet: 'md',
      desktop: 'lg',
      hd: 'lg',
    },
  },
  parameters: RESPONSIVE_STORY,
};
