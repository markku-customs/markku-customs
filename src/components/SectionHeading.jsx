import PropTypes from 'prop-types';
import clsx from 'clsx';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2 className={clsx('font-heading text-4xl md:text-6xl', className)}>
      <span className="text-red-600 mr-4" aria-hidden="true">
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
