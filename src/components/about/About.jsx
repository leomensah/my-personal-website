import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="my__avatar">
              <img src={ME}/>
          </div>
          <h5 className='my__name'>Leonard Mensah Boante</h5>
          <small className="about__me">
              I am a Software Engineer specialized in Back-end Development 
              with 3+ years of experience in designing, implementing, 
              refactoring, and testing different software systems. Highly 
              proficient in writing clean, well-documented, efficient code 
              and experience with Agile software development methodologies 
              and test-driven development (TDD). Experience leading a team 
              of backend engineers to build well-scalable APIs for banking processes, 
              and human resource management using Python, Django, and JavaScript. 
              Passion for solving complex technical challenges, 
              strong problem-solving skills, and a deep understanding of core 
              programming concepts. A good approach to tasks in a holistic, 
              creative manner with strong attention to detail and the ability to 
              deliver high-quality, reliable, and maintainable software within 
              deadlines. I am also a machine learning / Computer Vision researcher with
              an interest in working with health care imaging. I have a Masters degree 
              in Computer Science and Bsc in Mathematics. I am also involved in mentoring
              upcoming researchers and software developers from various institutions.
          </small>          
        </div>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
    // <section id='testimonials'>
    //   <h5>Review from clients</h5>
    //   <h2>Testimonials</h2>
    //   <Swiper className="container testimonials__container"
    //   modules={[ Pagination]}
    //   spaceBetween={40}
    //   slidesPerView={1}
    //   pagination={{ clickable: true }}
    //   >
    //     {
    //       data.map(({avatar, name, review}, index) => {
    //         return (
    //           <SwiperSlide key={index} className="testimonial">
    //           <div className="client__avatar">
    //             <img src={avatar}/>
    //           </div>
    //           <h5 className='client__name'>{name}</h5>
    //           <small className='client__review'>
    //               {review}
    //           </small>
    //           </SwiperSlide>
    //         )
    //       })
    //     }
    //   </Swiper>
    // </section>
    
  )
}

export default About