import { Carousel } from 'react-responsive-carousel';

import { getImageSrc } from '@/utils';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images, name }) => {
  return (
    <section className="store-product-main-image-container">
      <Carousel useKeyboardArrows dynamicHeight infiniteLoop>
        {images ? (
          images['en-US'].map((image) => (
            <img
              src={getImageSrc(image)}
              alt={name}
              key={image.fields.file['en-US'].url}
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
