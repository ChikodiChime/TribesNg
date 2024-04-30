// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImages from '../../../utils/sliderImages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Style.css'

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <div className='swiper-container'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        
        className="mySwiper"
      >
        {SliderImages.map((image) => (
          <div className="" key={image.id}>
            
             <SwiperSlide>
              <img src={image.path} alt={image.desc} className='slider-img'/>
             </SwiperSlide>
          </div>
        ))}

        
      </Swiper>
    </div>
  );
}