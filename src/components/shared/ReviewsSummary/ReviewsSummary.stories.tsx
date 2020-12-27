import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ReviewsSummary, ReviewsSummaryProps } from './ReviewsSummary';

export default {
  title: 'Shared/Reviews Summary',
  component: ReviewsSummary,
} as Meta;

const Template: Story<ReviewsSummaryProps> = (args) => (
  <ReviewsSummary {...args} />
);

export const Default = Template.bind({});
const defaultProps: ReviewsSummaryProps = {
  reviewCount: 190,
  starCount: 4,
};
Default.args = defaultProps;
