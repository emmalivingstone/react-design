import React, { FunctionComponent } from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { IoFastFoodOutline, IoLocationOutline } from 'react-icons/io5';
import {
  Button,
  Card,
  Heading,
  InlineIcon,
  ReviewsSummary,
  ReviewsSummaryProps,
} from '../shared';
import './RestaurantCard.scss';

export enum RestaurantPriceRange {
  Cheap = '£ - ££',
  Moderate = '££ - £££',
  Expensive = '£££ - ££££',
}

export type RestaurantCardProps = {
  /**
   * Path of image representing the restaurant.
   */
  image: string;
  /**
   * Function that's called when the 'book' button is pressed
   */
  onBook: () => void;
  /**
   * Restaurant name
   */
  name: string;
  /**
   * Short description of restaurant
   */
  description: string;
  /**
   * How expensive the restaurant is
   */
  priceRange: RestaurantPriceRange;
  /**
   * Cuisine description. Should be a comma-separated string
   * e.g. American, Pancakes
   */
  cuisineDescription: string;
  /**
   * Location of restaurant.
   * e.g. Aldgate, London
   */
  location: string;
  /**
   * How many times the restaurant has been booked today.
   */
  bookedTodayCount: number;
} & ReviewsSummaryProps;

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  image,
  onBook,
  name,
  description,
  priceRange,
  bookedTodayCount,
  cuisineDescription,
  location,
  starCount,
  reviewCount,
}) => {
  return (
    <Card className="restaurant-card">
      <img className="restaurant-card__image" src={image} alt={name} />
      <div className="restaurant-card__content">
        <div className="restaurant-card__content-top">
          <Heading level={1} styleAs={4} noMargin noWrap>
            {name}
          </Heading>
          <div className="restaurant-card__info">
            <div>
              <InlineIcon icon={IoFastFoodOutline} gap="right" />
              {cuisineDescription}
            </div>
            <div>
              <span className="restaurant-card__info-separator">|</span>
              <InlineIcon icon={IoLocationOutline} gap="right" />
              {location}
            </div>
          </div>
          <p className="restaurant-card__description">{description}</p>
        </div>
        <div className="restaurant-card__content-bottom">
          <div className="restaurant-card__book-columns">
            <div className="restaurant-card__book-info">
              <div>{priceRange}</div>
              <ReviewsSummary reviewCount={reviewCount} starCount={starCount} />
            </div>
            <Button onClick={onBook} type="button" variant="primary">
              Book
            </Button>
          </div>
          <div className="restaurant-card__book-count">
            <InlineIcon
              icon={AiOutlineRise}
              iconClassName="restaurant-card__book-icon"
              gap="right"
            />
            Booked {bookedTodayCount} times today
          </div>
        </div>
      </div>
    </Card>
  );
};
