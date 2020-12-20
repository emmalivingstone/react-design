import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
const primaryProps: ButtonProps = {
  variant: 'primary',
  type: 'button',
  onClick: action('onClick'),
  children: 'Send',
};
Primary.args = primaryProps;

export const Secondary = Template.bind({});
const secondaryProps: ButtonProps = {
  variant: 'secondary',
  type: 'button',
  onClick: action('onClick'),
  children: 'Close',
};
Secondary.args = secondaryProps;

export const Block = Template.bind({});
const blockProps: ButtonProps = {
  variant: 'primary',
  type: 'button',
  onClick: action('onClick'),
  size: 'block',
  children: 'Submit',
};
Block.args = blockProps;
