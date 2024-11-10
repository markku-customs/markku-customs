import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children, className = '' }) => {
  return (
    <div className={clsx('flex flex-col gap-4 sm:flex-row', className)}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
