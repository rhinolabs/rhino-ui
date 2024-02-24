import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<PaginationProps>;

export const Playground: Story = {
  args: {
    arePagesVisible: true,
    activePage: 1,
    itemsPerPage: 2,
    totalItemsCount: 5,
  },
  parameters: {
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
  },
};
