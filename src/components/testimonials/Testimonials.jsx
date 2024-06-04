import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/portfolio7.jpg'
import AVTR4 from '../../assets/portfolio8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR3,
    name: "Café Her Og Der",
    review:
      "We had the privilege of collaborating with Giulia on developing a website for our Coffee Shop, and we couldn't be happier with the results. Her creativity and technical skills transformed our little cozy place into an engaging and user-friendly website which emphasizes our values. She was receptive to feedback and always went the extra mile to exceed our expectations. Giulia is a true professional always having an idea for improvement.",
  },

  {
    avatar: AVTR2,
    name: "Andreea - CoroBeauty",
    review:
      "Having Giulia as both a friend and a collaborator proved to be a game-changer for my business. Not only made the process and communication easier, but also her expertise in design and coding elevated my small-company to new heights. She not only brought my vision to life but she was also a great communicator, always keeping me updated on the progress. Her dedication and professionalism made her a valuable asset to me. I highly recommend Giulia for any kind of digital projects.",
  },

  {
    avatar: AVTR1,
    name: "PICit",
    review:
      "Having Giulia as an intern and then a full-time employee, fulfilling design, but also development tasks has been of great help. Her creativity, attention to detail, understanding and communication with the team resulted in user-friendly design solutions and more efficient web components. Giulia communicated effectively, incorporated feedback seamlessly, and delivered great results. We highly recommend her services to anyone in need of a talented and reliable web developer and designer.",
  },

  {
    avatar: AVTR4,
    name: "Kromosom",
    review:
      "Working with Giulia was an absolute pleasure. Her experience in frontend development brought our project to life. She paid attention to every detail, ensuring that our website not only looked visually stunning but also transposed our values into digital form. Her professionalism, clear communication, and ability to meet deadlines made the collaboration seamless. We are thrilled with the final product and would highly recommend Giulia for any frontend development and design needs.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>the impact I had on others</h5>
      <h2>testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials