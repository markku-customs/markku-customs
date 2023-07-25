import { useTranslation } from 'react-i18next';

import SectionHeading from '../../components/SectionHeading';
import ReviewItem from './ReviewItem';
import Button from '../../components/Button';

const Reviews = ({ reviews }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="reviews">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.reviews')}</SectionHeading>
        <div className="review-grid mb-8">
          {reviews.map((review) => {
            const { id } = review.sys;

            return <ReviewItem key={id} review={review} />;
          })}
        </div>
        <Button
          as="a"
          className="w-max"
          href="https://g.page/r/CUxzjc1LVcAjEB0/review"
          target="_blank"
          rel="noreferrer"
        >
          {t('write-review')}
        </Button>
      </div>
    </section>
  );
};

export default Reviews;
