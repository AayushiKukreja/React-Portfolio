import React from 'react'
import "./portfolio.css" ;

const data = [
  {
    id : 1 ,
    image : '',
    title : 'Crypto Currency Dahsboard & Financial Visuaization' ,
    github : '' ,
    demo : ''
  } ,
  {
    id : 2 ,
    image : '',
    title : 'Charts Templates & infographics in figma ' ,
    github : '' ,
    demo : ''
  },
  {
    id : 3 ,
    image : '',
    title : 'Figma dashboard UI kit for data design web apps' ,
    github : '' ,
    demo : ''
  },
  {
    id : 4 ,
    image : '',
    title : 'Maintaining talks and tracking progress' ,
    github : '' ,
    demo : ''
  },
  {
    id : 5 ,
    image : '',
    title : 'Charts templates & infographics in FIgma' ,
    github : '' ,
    demo : ''
  } ,
  {
    id : 6 ,
    image : '',
    title : 'Crypto Currency Dahsboard & Financial Visuaization' ,
    github : '' ,
    demo : ''
  }
]
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>
        My Recent Work
      </h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) =>{
            return (
              <article key={id} className='protfolio<div class__item'>
              <div className='portfolio__item-image'>
               <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default portfolio