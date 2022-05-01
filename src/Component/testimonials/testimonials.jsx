import React from 'react'
import "./testimonials.css" ;
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data =
[
  {
    avatar : '' ,
    name : 'Generate Lorem' ,
    review : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' ,
  },
  {
    avatar : '' ,
    name : 'Generate Lorem' ,
    review : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    avatar : '' ,
    name : 'Generate Lorem' ,
    review : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    avatar : '' ,
    name : 'Generate Lorem' ,
    review : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }
]
const testimonials = () => {
  return (
    <section id="testimonials" >
      <h5>Review from cients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar , name , review} , index)=>
          {
            return (
              <SwiperSlide key={index}className='testimonial'>
         <div className='client__avatar'>
           <img src={''} alt={name} />
           </div>
           <h5 className='client__name'>{name}</h5>
           <small className='client__review'>
          {review}
           </small>
        </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default testimonials