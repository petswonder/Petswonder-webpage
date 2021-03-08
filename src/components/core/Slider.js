import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import img7 from '../../images/petcommunity.jpg'
import img6 from '../../images/donate.jpg'
import photo from '../../images/hero_image_01.png'
import slids from './imgs/slids1.jpg';
import slids1 from './imgs/slids1.jpg';

const items = [
    {
      src: slids1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: slids,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: slids1,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img className="slider-images" src={item.src} alt={item.altText} />
            {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
        );
    });

    return (
      <div  className="recent-game-section spad set-bg " data-setbg={photo} >
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}

        >
         
        
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

      </div>
    );
}

export default Slider
