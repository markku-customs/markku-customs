import { clsx } from 'clsx';
import PropTypes from 'prop-types';

const Alert = ({ title = null, subtitle = null, className = '' }) => {
  return (
    <div
      className={clsx(
        'grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400',
        className
      )}
    >
      <div className="text-center">
        {title && <p className="text-lg">{title}</p>}
        {subtitle && <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>}
      </div>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default Alert;
