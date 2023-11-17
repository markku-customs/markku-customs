import { clsx } from 'clsx';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Loading = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        'grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400',
        className
      )}
    >
      {t('loading')}
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
