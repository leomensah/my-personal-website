import React from 'react'
import './certificate.css'
import djangoCert from '../../assets/django.pdf'
import djangoImage from '../../assets/django.png'
import flaskCert from '../../assets/flask.pdf'
import flaskImage from '../../assets/flask.png'
import hcjCert from '../../assets/htmlcssjavascript.pdf'
import hcjImage from '../../assets/htmlcssjavascript.png'
import postgreCert from '../../assets/postgresql.pdf'
import postgreImage from '../../assets/postgresql.png'
import mlCert from '../../assets/machinelearning.pdf'
import mlImage from '../../assets/machinelearning.png'
import dlCert from '../../assets/deeplearning.pdf'
import dlImage from '../../assets/deeplearning.png'
import daCert from '../../assets/dataanalysis.pdf'
import daImage from '../../assets/dataanalysis.png'
import gitCert from '../../assets/git.pdf'
import gitImage from '../../assets/git.png'
import biCert from '../../assets/bi.pdf'
import biImage from '../../assets/bi.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: djangoImage,
    pdf_file: djangoCert,
    title: 'Django Certification',
  },
    {
    id: 2,
    image: flaskImage,
    pdf_file: flaskCert,
    title: 'Flask Certification',
  },
  {
    id: 3,
    image: hcjImage,
    pdf_file: hcjCert,
    title: 'HTML/CSS/Js CERTIFICATION',
  },
  {
    id: 4,
    image: postgreImage,
    pdf_file: postgreCert,
    title: 'Postgre SQL Certification',
  },
  {
    id: 5,
    image: mlImage,
    pdf_file: mlCert,
    title: 'Machine Learning Certification',
  },
    {
    id: 6,
    image: dlImage,
    pdf_file: dlCert,
    title: 'Deep Learning Certification',
  },
  {
    id: 7,
    image: daImage,
    pdf_file: daCert,
    title: 'Data Analysis Certification',
  },
   {
    id: 8,
    image: gitImage,
    pdf_file: gitCert,
    title: 'Git / Github Certification',
  },
  {
    id: 9,
    image: biImage,
    pdf_file: biCert,
    title: 'Business Intelligence Certification',
  }
]

const Certificate = () => {
  return (
    <section id='certificate'>
      <h5>My Certificates</h5>
      <h2>Certificates</h2>
    <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      >
      <div className="container certificate__container">
        {
          data.map(({id, image, pdf_file, title}) => {
            return (
                <SwiperSlide key={{id}} className='certificate__item'>
                    <div className="certificate__item-image">
                    <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="certificate__item-cta">
                    <a href={pdf_file} download className='btn'>Download Certificate</a>
                    </div>
                </SwiperSlide>
            )
          })
        }
      </div>
      </Swiper>
    </section>
  )
}

export default Certificate