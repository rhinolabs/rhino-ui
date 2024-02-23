import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionProps } from './accordion';
import { boxPropsKeys } from '../box/box';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Playground',
  component: Accordion,
  argTypes: {
    openPanels: {
      control: {
        type: 'check',
        options: [0, 1, 2],
      },
    },
    hasCaret: {
      control: {
        type: 'select',
        options: ['right', 'left', false],
      },
    },
    ...boxPropsKeys.reduce((acc, curr) => ({ ...acc, [curr]: { table: { disable: true } } }), {}),
  },
};

export default meta;

const Template: StoryFn<AccordionProps> = ({
  hasCaret,
  openPanels,
  ...args
}) => (
  <Accordion {...args}>
    <Accordion.Panel isOpen={openPanels.includes(0)}>
      <Accordion.PanelSummary isDetailsOpen={openPanels.includes(0)} hasCaret={hasCaret}>
        Question 0
      </Accordion.PanelSummary>
      <Accordion.PanelDetails>
        Answer 0
      </Accordion.PanelDetails>
    </Accordion.Panel>
    <Accordion.Panel isOpen={openPanels.includes(1)}>
      <Accordion.PanelSummary isDetailsOpen={openPanels.includes(1)} hasCaret={hasCaret}>
        Question 1
      </Accordion.PanelSummary>
      <Accordion.PanelDetails>
        Answer 1
      </Accordion.PanelDetails>
    </Accordion.Panel>
    <Accordion.Panel isOpen={openPanels.includes(2)}>
      <Accordion.PanelSummary isDetailsOpen={openPanels.includes(2)} hasCaret={hasCaret}>
        Question 2
      </Accordion.PanelSummary>
      <Accordion.PanelDetails>
        Answer 2
      </Accordion.PanelDetails>
    </Accordion.Panel>
  </Accordion>
);

export const Playground = Template.bind({});

Playground.args = {
  openPanels: [],
  hasCaret: 'right',
};
