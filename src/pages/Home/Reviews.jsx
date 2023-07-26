import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import SectionHeading from '../../components/SectionHeading';
import ReviewItem from './ReviewItem';
import Button from '../../components/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = ({ reviews }) => {
  const { t } = useTranslation();

  const settings = {
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <section className="py-12 md:py-16" id="reviews">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.reviews')}</SectionHeading>
        <div className="mb-8">
          <Slider {...settings}>
            {reviews.map((review) => {
              const { id } = review.sys;

              return <ReviewItem key={id} review={review} />;
            })}
          </Slider>
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
