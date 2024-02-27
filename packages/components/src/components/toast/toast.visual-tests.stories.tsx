import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToastContainer, toast } from '.';

const meta: Meta<typeof ToastContainer> = {
  title: 'Components/Toast/Visual Regression Tests',
  component: ToastContainer,
  parameters: {
    chromatic: {
      delay: 500,
      pauseAnimationAtEnd: true,
      viewports: [320, 700, 1012, 1300],
    },
  },
  decorators: [
    (Story) => (
      <div>
        <ToastContainer />
        {Story}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof toast>;
export const Default: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('default toast');
    }, 1);
    return <></>;
  },
};

export const Dismissable: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('dismissable toast', { canDismiss: true });
    }, 1);
    return <></>;
  },
};
export const Success: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast.success('success toast');
    }, 1);
    return <></>;
  },
};
export const Error: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast.error('error toast');
    }, 1);
    return <></>;
  },
};

export const Loading: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast.loading('loading toast');
    }, 1);
    return <></>;
  },
};

export const Compact: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('compact toast', { isCompact: true });
    }, 1);
    return <></>;
  },
};

export const CannotDismiss: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('cannot dismiss toast', { canDismiss: false });
    }, 1);
    return <></>;
  },
};

export const TopLeft: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('top left', { position: 'top-left' });
    }, 1);
    return <></>;
  },
};

export const TopCenter: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('top center', { position: 'top-center' });
    }, 1);
    return <></>;
  },
};

export const TopRight: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('top right', { position: 'top-right' });
    }, 1);
    return <></>;
  },
};

export const BottomLeft: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('bottom left', { position: 'bottom-left' });
    }, 1);
    return <></>;
  },
};

export const BottomCenter: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('bottom center', { position: 'bottom-center' });
    }, 1);
    return <></>;
  },
};

export const BottomRight: Story = {
  render: (_args) => {
    setTimeout(() => {
      toast('bottom-right', { position: 'bottom-right' });
    }, 1);
    return <></>;
  },
};
