import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<DurationProps>;

export const Playground: Story = {
  args: {
    milliseconds: 6000000,
  },
};
