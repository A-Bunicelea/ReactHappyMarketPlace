import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './tst.css';

const DemoCarousel: React.FC = () => {
  return (
    <div>
      <p>carousel</p>
      <Carousel
        // autoFocus
        // showArrows={true}
        infiniteLoop={true}
        // width="60%"
        // dynamicHeight={false}
        // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
      >
        <div>
          <img src="/images/hero-image.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="image">
          <img src="/images/sales.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="image">
          <img src="/images/revolut.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
