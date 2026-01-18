import React from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }: CarouselProps) => {
  const itemWidth = 130;
  const frameSize = 3;
  const step = 3;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const maxIndex = images.length - frameSize;

  const handleNextClick = () => {
    const newIndex = currentIndex + step;

    setCurrentIndex(Math.min(newIndex, maxIndex));
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex - step;

    setCurrentIndex(Math.max(newIndex, 0));
  };

  const offset = currentIndex * itemWidth + currentIndex * 10;

  return (
    <div className="Carousel">
      <ul
        className="Carousel__list"
        style={{
          transform: `translateX(-${offset}px)`,
        }}
      >
        {images?.map((image, index) => (
          <li key={`${image}-${index}`} className="Carousel__item">
            <img src={image} alt={`${index + 1}`} />
          </li>
        ))}
      </ul>

      <button type="button" onClick={handlePrevClick}>
        Prev
      </button>
      <button type="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
