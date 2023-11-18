import clsx from 'clsx';
import PropTypes from 'prop-types';

import { StarIcon } from '@/icons';

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5).keys()].map((_, idx) => (
        <StarIcon
          key={_}
          className={clsx(
            'h-4 w-4',
            idx < rating ? 'text-red-600' : 'text-zinc-700'
          )}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
