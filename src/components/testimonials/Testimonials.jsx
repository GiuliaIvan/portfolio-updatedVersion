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
      "We had the privilege of collaborating with Giulia on a project, and we couldn't be happier with the results. Her creativity and technical skills transformed our design concepts into an engaging and user-friendly website. She was receptive to feedback and always went the extra mile to exceed our expectations. Giulia is a true professional, and we look forward to working with her again in the future.",
  },
  
  {
    avatar: AVTR2,
    name: "Andreea - CoroBeauty",
    review:
      "Collaborating with Giulia was a game-changer for my business. Her expertise in multimedia design elevated my small-company to new heights. She not only brought our place vision to life but she was also a great communicator, always keeping us updated on the progress.. Her dedication and professionalism made her a valuable asset to me. I highly endorse Giulia for any kind of digital projects.",
  },

  {
    avatar: AVTR1,
    name: "PICit",
    review:
      "Collaborating with Giulia on our web page redesign project was an exceptional experience. Her creativity, attention to detail, and understanding of our brand resulted in a visually stunning and user-friendly website. Giulia communicated effectively, incorporated feedback seamlessly, and delivered exceptional results. We highly recommend her services to anyone in need of a talented and reliable web designer.",
  },

  {
    avatar: AVTR4,
    name: "Kromosom",
    review:
      "Working with Giulia was an absolute pleasure. Her expertise in frontend development brought our project to life. She paid attention to every detail, ensuring that our website not only looked visually stunning but also functioned flawlessly. Her professionalism, clear communication, and ability to meet deadlines made the collaboration seamless. We are thrilled with the final product and would highly recommend Giulia for any frontend development needs.",
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