import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

import { useReviews } from '@/hooks';

import { ArrowOutwardIcon } from '@/icons';

import ReviewItem from './ReviewItem';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  centerMode: true,
  infinite: true,
  autoplay: true,
  centerPadding: '60px',
  slidesToShow: 2,
  speed: 500,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        autoplay: false,
      },
    },
  ],
};

const Reviews = () => {
  const { t } = useTranslation();

  const { reviews, error } = useReviews();

  return (
    <section className="py-12 md:py-16" id="reviews">
      <Container>
        <SectionHeading className="mb-8">{t('links.reviews')}</SectionHeading>
        {!reviews ? (
          <Loading error={error} />
        ) : (
          <Slider {...settings} className="mb-8">
            {reviews?.items.map((review) => (
              <ReviewItem key={review.sys.id} review={review} />
            ))}
          </Slider>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            as="a"
            icon={<ArrowOutwardIcon className="h-4 w-4" />}
            className="w-max"
            href="https://g.page/r/CUxzjc1LVcAjEB0/review"
            target="_blank"
            rel="noreferrer"
          >
            {t('reviews.write')}
          </Button>
          <Button
            as="a"
            variant="secondary"
            icon={<ArrowOutwardIcon className="h-4 w-4" />}
            className="w-max"
            href="https://www.google.com/maps/place/Markku+Customs/@60.4319644,21.8945733,10z/data=!4m18!1m9!3m8!1s0x468c7719ea889cb5:0x23c0554bcd8d734c!2sMarkku+Customs!8m2!3d60.4320325!4d22.2242091!9m1!1b1!16s%2Fg%2F11tgf7cv01!3m7!1s0x468c7719ea889cb5:0x23c0554bcd8d734c!8m2!3d60.4320325!4d22.2242091!9m1!1b1!16s%2Fg%2F11tgf7cv01?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            {t('reviews.view')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
