import React from 'react'
import testimonial from '../../assets/testimonial1.png';
import './testimonials.css'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: testimonial,
    name: 'Malick Ndiaye',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.'
  },
  {
    avatar: testimonial,
    name: 'Amadou Seck Ndiaye',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.'
  },
  {
    avatar: testimonial,
    name: 'Mareme Diouf',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.'
  }
]

const testimonials = () => {
  return (
    <section className="testimonial section" id="testimonial">
      <span className="section__subtitle">Mes clients disent</span>
      <h2 className="section__title">Témoignages</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial__container container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial__card">
                <img src={avatar} alt="" className="testimonial__img" />

                <h3 className="testimonial__name">{name}</h3>
                <p className="testimonial__description">
                  {review}
                </p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials