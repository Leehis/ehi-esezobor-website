import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import { data } from './data'
import './project.css'

const Project = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: '#ceff00',
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            borderRadius: '50%',
            alignSelf: 'center',
            backgroundColor: '#ceff00',
            color: '#202020',
            fontSize: '30px',
            marginRight: '150px',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            borderRadius: '50%',
            alignSelf: 'center',
            backgroundColor: '#ceff00',
            color: '#202020',
            fontSize: '30px',
            marginLeft: '150px',
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        {data.map((portfolioProject) => {
          const { id, title, img, description, techStack } = portfolioProject
          return (
            <div className='carouselBox'>
              <div className='cardTop'>
                <div className='cardLeft'>
                  <div className='imgBox'>
                    <img
                      className='projectCover'
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                        width: 350,
                        height: 248,
                      }}
                      src={img}
                      alt=''
                    />
                  </div>
                </div>
                <div className='cardRight'>
                  <div className='cardTitle'>{title}</div>
                  <div className='cardDesc'>{description}</div>
                  <div className='cardLinks'>
                    <ul className='links'>
                      <li className='singleLink'>{`[github]`}</li>
                      <li className='singleLink'>{`[live demo]`}</li>
                      {/* <li className='singleLink'>{`[figma]`}</li> */}
                    </ul>
                  </div>

                  <div className='stackDisplay'>
                    <div className='techStackTitle'>
                      {`/* Tech Stack Used: */`}
                    </div>
                    <ul className='techStack'>
                      <li className='tech'>{techStack[0]}</li>
                      <li className='tech'>{techStack[1]}</li>
                      <li className='tech'>{techStack[2]}</li>
                      <li className='tech'>{techStack[3]}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Project
