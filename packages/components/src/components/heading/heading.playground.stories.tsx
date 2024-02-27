import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FONT_COLOR_OPTIONS, FONT_SIZE_OPTIONS } from '../../lib/tokens';
import { HEADING_LEVELS } from './heading.constants';
import { Heading, HeadingProps } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading/Playground',
  component: Heading,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: [...FONT_COLOR_OPTIONS],
      },
    },
    className: {
      control: 'text',
    },
    as: {
      control: {
        type: 'select',
        options: [...HEADING_LEVELS],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [...FONT_SIZE_OPTIONS],
      },
    },
  },
};

export default meta;

const Template: StoryFn<HeadingProps> = ({ ...args }) => <Heading {...args} />;

export const Playground: StoryFn<HeadingProps> = Template.bind({});
Playground.args = {
  as: 'h4',
  children: 'Lead the world towards a clean energy future',
  variant: 'grey-darker',
  size: 'base',
};
