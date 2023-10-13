import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const clientes = [
  {
    avatar: avatar1,
    name: 'Larissa Souza',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut id reprehenderit consequuntur harum optio officiis! Culpa illo perspiciatis fugiat repellat eveniet, consequuntur, at obcaecati minima nesciunt, iste praesentium aspernatur.'
  },
  {
    avatar: avatar2,
    name: 'Mateus Oliveira',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut id reprehenderit consequuntur harum optio officiis! Culpa illo perspiciatis fugiat repellat eveniet, consequuntur, at obcaecati minima nesciunt, iste praesentium aspernatur.'
  },
  {
    avatar: avatar3,
    name: 'Lara Almeida',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut id reprehenderit consequuntur harum optio officiis! Culpa illo perspiciatis fugiat repellat eveniet, consequuntur, at obcaecati minima nesciunt, iste praesentium aspernatur.'
  },
  {
    avatar: avatar4,
    name: 'Rafael Santos',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut id reprehenderit consequuntur harum optio officiis! Culpa illo perspiciatis fugiat repellat eveniet, consequuntur, at obcaecati minima nesciunt, iste praesentium aspernatur.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Relatos dos clientes</h5>
      <h2>Feedback</h2>

    <Swiper className="container __testimonialsContainer"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

      {
        clientes.map(({avatar, name, review}, index) => {
          return (
          <SwiperSlide key={index} className="__testimonial">
        <div className="__clientImg">
          <img src={avatar} alt="Client" />
          </div>
          <h5 className='__name'>{name}</h5>
          <small className="__review">{review}</small>
      </SwiperSlide>
          )
        })
      }

    </Swiper>
    </section>

  )
}

export default Testimonials