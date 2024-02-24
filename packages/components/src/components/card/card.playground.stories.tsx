import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card/Playground',
  component: Card,
  argTypes: {
    subdued: {
      control: 'boolean',
    },
    sectionCount: {
      control: {
        type: 'range',
        min: 0,
        max: 6,
        step: 1,
      },
    },
    renderFooter: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<CardProps>;

export const Playground: Story = {
  render: (args) => {
    const sections = [];

    for (let i = 0; i < args.sectionCount; i += 1) {
      sections.push(
        <Card.Section title={args.sectionTitle} key={i}>
          {args.sectionContent}
        </Card.Section>
      );
    }

    return (
      <Card {...args}>
        <Card.Header title={args.cardTitle} />
        {sections}
        {args.renderFooter && <Card.Footer>{args.footerContent}</Card.Footer>}
      </Card>
    );
  },
  args: {
    cardTitle: 'Title',
    sectionContent: 'Section content',
    sectionTitle: 'Section title',
    renderFooter: true,
    sectionCount: 3,
    footerContent: 'Footer content',
  },
};
