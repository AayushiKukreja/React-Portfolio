import React from 'react'
import "./service.css" ;
import {BiCheck} from "react-icons/bi" ;
const service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="services">
          <div className='services_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list' >
            <li>
              <BiCheck className="service__list-icon" />
              <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
          </ul>
        </article>
        <article className="services services__head2">
          <div className='services_head'>
            <h3>Cloud Computing</h3>
          </div>
          <ul className='service__list' >
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>it is a long established fact that a reader will be distracted</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default service