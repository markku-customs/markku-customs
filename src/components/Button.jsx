import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-red-600 hover:brightness-125',
  secondary: 'bg-zinc-950 hover:brightness-125',
  tertiary: 'bg-zinc-200 text-zinc-950 hover:brightness-75',
};

const sizes = {
  small: 'px-6 py-3',
  base: 'px-8 py-4',
};

const Button = ({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'base',
  transition = true,
  className = '',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'flex cursor-pointer justify-center text-xs font-semibold uppercase tracking-[.30em]',
        variants[variant],
        sizes[size],
        transition && 'transition duration-500',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'base']),
  transition: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'base',
  transition: true,
  className: '',
};

export default Button;
