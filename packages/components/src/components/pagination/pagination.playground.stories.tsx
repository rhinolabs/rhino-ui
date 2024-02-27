import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pagination, PaginationProps } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Playground',
  component: Pagination,
  argTypes: {
    activePage: {
      control: 'number',
    },
    itemsPerPage: {
      control: 'number',
    },
    totalItemsCount: {
      control: 'number',
    },
    arePagesVisible: {
      control: 'boolean',
    },
    isCompact: {
      control: 'boolean',
    },
    nextPageText: {
      control: 'text',
    },
    prevPageText: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<PaginationProps> = ({ ...args }) => (
  <Pagination {...args} />
);
export const Playground: StoryFn<PaginationProps> = Template.bind({});
Playground.args = {
  arePagesVisible: true,
  activePage: 1,
};
Playground.parameters = {
  controls: {
    include: [
      'activePage',
      'itemsPerPage',
      'totalItemsCount',
      'arePagesVisible',
      'isCompact',
      'nextPageText',
      'prevPageText',
    ],
  },
};
