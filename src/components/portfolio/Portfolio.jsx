import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crpto-currency-dashbboards-and-financial-data-visualization'
  },
  {
  id:2,
  image: IMG2,
  title: 'Charts template',
  github: 'https://github.com',
  demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
id:3,
image: IMG3,
title: 'Figman dashboard UI',
github: 'https://github.com',
demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, github, demo }) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__
              item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className='btn'target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
            </article>
            )
          })
        }

      </div>
      </section>
  )
}

export default Portfolio