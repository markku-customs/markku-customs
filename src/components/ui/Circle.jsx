import clsx from 'clsx';
import PropTypes from 'prop-types';

const Circle = ({ className = '', ...props }) => {
  return (
    <span
      className={clsx('inline-block aspect-square rounded-full', className)}
      {...props}
    ></span>
  );
};

Circle.propTypes = {
  className: PropTypes.string,
};

export default Circle;
