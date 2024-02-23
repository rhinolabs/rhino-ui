import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { FileUpload, FileUploadProps } from './file-upload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload/Visual Regression Tests',
  component: FileUpload,
};

export default meta;

const Template: StoryFn<FileUploadProps> = ({ ...args }) => (
  <FileUpload {...args}>category filter</FileUpload> // eslint-disable-line @typescript-eslint/no-empty-function
);

export const ResponsiveHelpText = Template.bind({});
ResponsiveHelpText.args = {
  helpText: 'image files only (jpg, png, gif)',
  accept: 'image/*',
};
ResponsiveHelpText.parameters = RESPONSIVE_STORY;
