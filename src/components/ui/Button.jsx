import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-red-600 hover:brightness-125',
  secondary: 'bg-zinc-950 hover:brightness-125',
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
  icon = null,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'flex cursor-pointer justify-center text-xs font-semibold uppercase tracking-[.30em] disabled:pointer-events-none disabled:opacity-25',
        variants[variant],
        sizes[size],
        transition && 'transition duration-500',
        icon && 'flex items-center gap-2',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && icon}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'base']),
  transition: PropTypes.bool,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
