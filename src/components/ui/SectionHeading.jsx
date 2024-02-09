import clsx from 'clsx';
import PropTypes from 'prop-types';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2 className={clsx('font-heading text-4xl md:text-6xl', className)}>
      <span
        className="mr-2 text-3xl text-red-600 md:mr-4 md:text-6xl"
        aria-hidden="true"
      >
        #
      </span>
      {children}
    </h2>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionHeading.defaultProps = {
  className: '',
};

export default SectionHeading;
