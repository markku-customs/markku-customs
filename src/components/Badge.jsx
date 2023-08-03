import PropTypes from 'prop-types';

const Badge = ({ children, ...props }) => {
  return (
    <span
      className="rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-semibold"
      {...props}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
