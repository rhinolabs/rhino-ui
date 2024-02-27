import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from './icon';
import { Box } from '../box/box';
import { FONT_SIZE_OPTIONS, FONT_COLOR_OPTIONS } from '../../lib/tokens';
import { FontColor, FontSize } from '../../types';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon/Visual Regression Tests',
  component: Icon,
};

export default meta;

export const SizeAndColor: React.FunctionComponent<IconProps> = () => (
  <Box direction="row" gap="sm" background="grey-50">
    {FONT_SIZE_OPTIONS.map(size => (
      <Box gap="sm">
        {FONT_COLOR_OPTIONS.map(color => (
          <Icon
            name="home"
            size={size as FontSize}
            color={color as FontColor}
            key={`${size as FontSize}-${color as FontColor}`}
          />
        ))}
      </Box>
    ))}
  </Box>
);

const IconTemplate: StoryFn<IconProps> = ({ ...args }) => <Icon {...args} />;

export const ResponsiveSize: StoryFn<IconProps> = IconTemplate.bind({});
ResponsiveSize.args = {
  name: 'home',
  size: {
    base: 'xs',
    tablet: 'lg',
    desktop: '2xl',
    hd: '5xl',
  },
  color: 'grey-600',
};
ResponsiveSize.parameters = RESPONSIVE_STORY;
