import { useTranslation } from 'react-i18next';

import SectionHeading from '../../components/SectionHeading';
import ReviewItem from './ReviewItem';

const Reviews = ({ reviews }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="reviews">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.reviews')}</SectionHeading>
        <div className="review-grid">
          {reviews.map((review) => {
            const { id } = review.sys;

            return <ReviewItem key={id} review={review} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
