import { FunctionComponent } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { InlineIcon } from '../InlineIcon/InlineIcon';
import './ReviewsSummary.scss';

export type ReviewsSummaryProps = {
  /**
   * How many stars out of 5
   */
  starCount: 1 | 2 | 3 | 4 | 5;
  /**
   * How many reviews the rating is based on
   */
  reviewCount: number;
};

/**
 * Displays a given number of star icons and a review count.
 */
export const ReviewsSummary: FunctionComponent<ReviewsSummaryProps> = ({
  starCount,
  reviewCount,
}) => {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <InlineIcon
        icon={AiFillStar}
        key={i}
        iconClassName="reviews-summary__star"
        gap={i === starCount - 1 ? 'right' : undefined}
      />
    );
  }

  return (
    <div className="reviews-summary">
      {stars.map((star) => star)}
      <span className="reviews-summary__count">{reviewCount} reviews</span>
    </div>
  );
};
