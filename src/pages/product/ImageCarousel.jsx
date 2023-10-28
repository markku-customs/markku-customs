import { Carousel } from 'react-responsive-carousel';

import { getImageSrc } from '@/utils';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images, name }) => {
  return (
    <section className="image-carousel-container flex flex-col">
      <Carousel useKeyboardArrows dynamicHeight infiniteLoop>
        {images ? (
          images['en-US'].map((image) => (
            <img
              src={`${getImageSrc(image)}?fm=webp&w=840`}
              alt={name}
              key={image.fields.file['en-US'].url}
              loading="lazy"
            />
          ))
        ) : (
          <img src="/product-default.png" alt={name} />
        )}
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
