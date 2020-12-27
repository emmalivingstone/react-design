import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
  RestaurantCard,
  RestaurantCardProps,
  RestaurantPriceRange,
} from './RestaurantCard';

export default {
  title: 'Features/Restaurant Card',
  component: RestaurantCard,
} as Meta;

const Template: Story<RestaurantCardProps> = (args) => (
  <RestaurantCard {...args} />
);

export const PancakeExample = Template.bind({});
const pancakeExampleProps: RestaurantCardProps = {
  image: './images/pancakes.jpg',
  name: `Toby's Pancake House`,
  location: 'Whitechapel, London',
  cuisineDescription: 'American, Pancakes',
  reviewCount: 182,
  starCount: 5,
  bookedTodayCount: 14,
  priceRange: RestaurantPriceRange.Moderate,
  onBook: action('onBook'),
  description:
    'Charming pancake house with a wide range of toppings to choose from. Good selection of local coffee to wash them down with.',
};
PancakeExample.args = pancakeExampleProps;

export const PizzaExample = Template.bind({});
const pizzaExampleProps: RestaurantCardProps = {
  image: './images/pizza.jpg',
  name: `Fresh Slice`,
  location: 'Spitalfields, London',
  cuisineDescription: 'Italian, Pizza',
  reviewCount: 120,
  starCount: 5,
  bookedTodayCount: 9,
  priceRange: RestaurantPriceRange.Cheap,
  onBook: action('onBook'),
  description:
    "Simple and stylish restaurant serving authentic italian pizza and a range of classic pasta dishes. Known for it's friendly and attentive service.",
};
PizzaExample.args = pizzaExampleProps;
