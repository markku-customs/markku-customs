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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
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
        <div className="flex flex-wrap gap-4">
          <Button
            as="a"
            className="w-max flex gap-2 item-center"
            href="https://g.page/r/CUxzjc1LVcAjEB0/review"
            target="_blank"
            rel="noreferrer"
          >
            {t('write-review')}
            <img
              src="/arrow-outward-white.svg"
              alt=""
              aria-hidden="true"
              height={16}
              width={16}
            />
          </Button>
          <Button
            as="a"
            variant="secondary"
            className="w-max flex gap-2 items-center"
            href="https://www.google.com/maps/place/Markku+Customs/@60.4319644,21.8945733,10z/data=!4m18!1m9!3m8!1s0x468c7719ea889cb5:0x23c0554bcd8d734c!2sMarkku+Customs!8m2!3d60.4320325!4d22.2242091!9m1!1b1!16s%2Fg%2F11tgf7cv01!3m7!1s0x468c7719ea889cb5:0x23c0554bcd8d734c!8m2!3d60.4320325!4d22.2242091!9m1!1b1!16s%2Fg%2F11tgf7cv01?authuser=2&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            {t('view-reviews')}
            <img
              src="/arrow-outward-white.svg"
              alt=""
              aria-hidden="true"
              height={16}
              width={16}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
