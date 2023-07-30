import PropTypes from 'prop-types';

const Badge = ({ children }) => {
  return (
    <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm font-semibold">
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
