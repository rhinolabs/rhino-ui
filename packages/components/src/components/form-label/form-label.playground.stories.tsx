import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormLabel, FormLabelProps } from './form-label';

const meta: Meta<typeof FormLabel> =  {
  title: 'Components/FormLabel/Playground',
  component: FormLabel,
  argTypes: {
    children: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isRadioInputLabel: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<FormLabelProps> = ({ ...args }) => <FormLabel {...args} />;

export const Playground: StoryFn<FormLabelProps> = Template.bind({});
Playground.args = {
  inputId: 'playgroundInput',
  children: 'Playground Form Label',
  helpText: 'Helpful text',
};
