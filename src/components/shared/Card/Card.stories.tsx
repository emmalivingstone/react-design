import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from '../Button';
import { Card } from './Card';

export default {
  title: 'Shared/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <div style={{ maxWidth: '300px' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p style={{ padding: '20px', fontWeight: 'bold' }}>
        Would you like to save your work?
      </p>
      <Button
        type="button"
        variant="primary"
        onClick={action('onClick')}
        size="block"
      >
        Save
      </Button>
    </div>
  ),
};
