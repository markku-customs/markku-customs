import PropTypes from 'prop-types';

const Badge = ({ children }) => {
  return (
    <span className="bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
