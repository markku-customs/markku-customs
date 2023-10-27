import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400">
      {t('loading')}
    </div>
  );
};

export default Loading;
