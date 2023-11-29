import { clsx } from 'clsx';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Spinner from '@/components/ui/Spinner';

const Loading = ({ error, className }) => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <div
      className={clsx(
        'grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400',
        className
      )}
    >
      {error ? (
        <div className="text-center">
          <p>{`${error.status} – ${error.info.message[lng]}`}</p>
          <p className="mt-2 text-sm text-zinc-500">{t('automatic-retry')}</p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Spinner className="h-4 w-4" />
          {t('loading')}
        </div>
      )}
    </div>
  );
};

Loading.propTypes = {
  error: PropTypes.object,
  className: PropTypes.string,
};

Loading.defaultProps = {
  error: null,
  className: '',
};

export default Loading;
