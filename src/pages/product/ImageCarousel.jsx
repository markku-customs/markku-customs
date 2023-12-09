import { Carousel } from 'react-responsive-carousel';

import { getImageSrc } from '@/utils';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <section className="image-carousel-container flex flex-col">
      {images ? (
        images['en-US'].length > 1 ? (
          <Carousel useKeyboardArrows dynamicHeight infiniteLoop>
            {images['en-US'].map((image, idx) => (
              <img
                src={`${getImageSrc(image)}?fm=webp&w=840`}
                alt=""
                key={image.fields.file['en-US'].url}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </Carousel>
        ) : (
          <div className="grid place-items-center bg-zinc-900">
            <img
              src={`${getImageSrc(images['en-US'][0])}?fm=webp&w=840`}
              alt=""
              className="max-h-[24rem] object-cover"
            />
          </div>
        )
      ) : (
        <div className="grid place-items-center bg-zinc-900">
          <img
            src="/product-default.png"
            alt=""
            className="max-h-[24rem] object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
