import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const Container = ({ children, className, ...props }) => {
  return (
    <div className={clsx('container', className)} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
