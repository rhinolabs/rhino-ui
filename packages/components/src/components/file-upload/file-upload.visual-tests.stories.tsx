import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { FileUpload, FileUploadProps } from './file-upload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload/Visual Regression Tests',
  component: FileUpload,
};

export default meta;

type Story = StoryObj<FileUploadProps>;
const Default: Story = {
  render: (args) => <FileUpload {...args}>File Uploader</FileUpload>,
};

export const ResponsiveHelpText: Story = {
  ...Default,
  args: {
    helpText: 'image files only (jpg, png, gif)',
    accept: 'image/*',
  },
  parameters: RESPONSIVE_STORY,
};
