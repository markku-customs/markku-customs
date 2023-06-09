import PropTypes from 'prop-types';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2 className={`font-heading text-4xl md:text-6xl ${className}`}>
      <span className="text-red-600 mr-4">#</span>
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
