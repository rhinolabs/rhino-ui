import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Duration, DurationProps } from './duration';

const meta: Meta<typeof Duration> = {
  title: 'Components/Duration/Playground',
  component: Duration,
  argTypes: {
    milliseconds: {
      control: 'number',
    },
    seconds: {
      control: 'number',
    },
    minutes: {
      control: 'number',
    },
    roundUp: {
      control: 'boolean',
    },
    displayMinutes: {
      control: 'number',
    },
    displayHours: {
      control: 'number',
    },
    displayDays: {
      control: 'number',
    },
    as: {
      control: {
        type: 'select',
        options: ['span', 'p'],
      },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<DurationProps> = ({ ...args }) => <Duration {...args} />;

export const Playground: StoryFn<DurationProps> = Template.bind({});

Playground.args = {
  milliseconds: 6000000,
};
