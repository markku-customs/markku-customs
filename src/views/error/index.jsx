import { useTranslation } from 'react-i18next';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

const ErrorView = () => {
  const { t } = useTranslation();

  return (
    <Container className="flex h-full flex-col items-center justify-center">
      <h1 className="font-heading text-6xl">{t('error.title')}</h1>
      <p className="mt-2 font-semibold">{t('error.subtitle')}</p>
      <Button onClick={() => window.location.reload()} className="mt-8">
        {t('error.button')}
      </Button>
    </Container>
  );
};

export default ErrorView;
