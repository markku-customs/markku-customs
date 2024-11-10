import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const BadgeGroup = ({ children, className = '' }) => {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>{children}</div>
  );
};

BadgeGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BadgeGroup;
