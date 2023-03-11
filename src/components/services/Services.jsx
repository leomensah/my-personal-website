import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Data Management & Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Predictive Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Visualization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business Intelligence</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Mining</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Modelling</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX DESIGN */}

        <article className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Maintenance and Updates</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Support and Training</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software Customization and Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud-based solutions</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Machine Learning</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data collection and cleaning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Model Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Model monitoring and Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Machine Learning Consulting</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CONCREATION */}
      </div>
    </section>
  )
}

export default Services