import './CSS/Home_slide.css';
import { useState } from 'react';
import About from './Component/About';
import { Link } from "react-router-dom";
import Product from './Component/Product';
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
  <div className="carousel-container">
  <Carousel activeIndex={index} onSelect={handleSelect}> 
    <Carousel.Item interval={5000}> 
      <Link to="/Product">
        <img className='d-block w-100 shadow-2-strong'
          src= {Slide_bg1}
          alt="slide_bg01" 
          height="800"
        />
      <Carousel.Caption>
        <h1>智能驾驶不再难以负担</h1>
        <p>致力于打造人人都能负担的智能驾驶品牌</p>
      </Carousel.Caption>
      </Link>
    </Carousel.Item>
    <Carousel.Item interval={5000}> 
      <Link to="/About">
        <img className='d-block w-100 shadow-2-strong'
          src= {Slide_bg2}
          alt="slide_bg02" 
          height="800"
        />
        <Carousel.Caption>
          <h1>十年深耕，精益求精</h1>
          <p>由 武汉大学动态感知实验室 研制，采用最前端技术</p>
          <p>智能融合传感器, 视觉感知方向, 地图定位方向, 决策规划算法, 端到端大模型</p>
        </Carousel.Caption>
      </Link>
    </Carousel.Item>
    <Carousel.Item interval={5000}> 
      <img className='d-block w-100 shadow-2-strong'
        src= {Slide_bg3}
        alt="slide_bg03" 
        height="800"
      />
      <Carousel.Caption>
        <h1>注重体验，追求卓越</h1>
        <p>反复实验只为打造最舒适的环境，最安全的操作</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <hr className="white-line" />
  </div>
  );
}

export default ControlledCarousel;