import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TabsSlider, TabsSliderProps } from './tabs-slider';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof TabsSlider> = {
  title: 'Components/TabsSlider/Visual Regression Tests',
  component: TabsSlider,
};

export default meta;

const Template: StoryFn<TabsSliderProps> = ({ ...args }) => (
  <TabsSlider {...args}>
    <TabsSlider.Item>Tab 1</TabsSlider.Item>
    <TabsSlider.Item>Tab 2</TabsSlider.Item>
    <TabsSlider.Item>Tab 3</TabsSlider.Item>
    <TabsSlider.Item isDisabled>Disabled</TabsSlider.Item>
  </TabsSlider>
);

export const ResponsiveSize = Template.bind({});
ResponsiveSize.args = {
  value: 0,
  size: {
    base: 'sm',
    tablet: 'md',
    desktop: 'lg',
    hd: 'lg',
  },
};
ResponsiveSize.parameters = RESPONSIVE_STORY;
