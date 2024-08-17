import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-zinc-800',
  green: 'bg-green-950 text-green-500',
};

const sizes = {
  small: 'px-2 py-1',
  base: 'px-3 py-1.5',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'base',
  className = '',
  ...props
}) => {
  return (
    <span
      className={clsx(
        'flex items-center rounded text-xs font-semibold',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'base']),
  className: PropTypes.string,
};

export default Badge;
