import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ICON_NAMES } from '../../lib/tokens';
import { Button, ButtonProps } from './button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';

const meta: Meta<typeof Button> =  {
  title: 'Components/Button/Playground',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: BUTTON_VARIANTS,
      },
    },
    size: {
      control: {
        type: 'select',
        options: BUTTON_SIZES,
      },
    },
    isNaked: {
      control: 'boolean',
    },
    isOutlined: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    id: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    tabIndex: {
      control: 'number',
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    iconPrefix: {
      control: {
        type: 'select',
        options: [null, ...ICON_NAMES],
      },
    },
    iconSuffix: {
      control: {
        type: 'select',
        options: [null, ...ICON_NAMES],
      },
    },
    as: {
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = ({ ...args }) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  children: 'Playground Button',
};
