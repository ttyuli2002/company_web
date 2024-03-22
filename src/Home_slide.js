import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Slide_bg1 from './Assets/Slide_bg01.png';
import Slide_bg2 from './Assets/Slide_bg02.jpg';
import Slide_bg3 from './Assets/Slide_bg03.jpg';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => { 
    setIndex(selectedIndex);} 

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}> 
    <Carousel.Item interval={2000}> 
      <img className='d-block w-100 shadow-2-strong'
        src= {Slide_bg1}
        alt="slide_bg01" 
        height="1200"
      />
      <Carousel.Caption>
        <h1>Temp Text Slide 1</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}> 
      <img className='d-block w-100 shadow-2-strong'
        src= {Slide_bg2}
        alt="slide_bg02" 
        height="1200"
      />
      <Carousel.Caption>
        <h1>Temp Text Slide 2</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}> 
      <img className='d-block w-100 shadow-2-strong'
        src= {Slide_bg3}
        alt="slide_bg03" 
        height="1200"
      />
      <Carousel.Caption>
        <h1>Temp Text Slide 3</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> 
  );
}

export default ControlledCarousel;