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
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        {data.map((portfolioProject) => {
          const { id, title, img, description, techStack } = portfolioProject
          return (
            <div
              className='carouselBox'
              //   style={{
              //     background: '#202020',
              //     width: 977,
              //     height: 310,
              //     textAlign: 'center',
              //     boxSizing: 'border-box',
              //   }}
            >
              <div className='cardTop'>
                <div className='cardLeft'>
                  <div className='imgBox'>
                    <img src={img} alt='' />
                  </div>
                </div>
                <div className='cardRight'>
                  <div
                    className='cardTitle'
                    // style={{
                    //   textAlign: 'center',
                    //   fontSize: '30px',
                    //   color: '#202020',
                    //   fontWeight: '900',
                    //   paddingTop: '10px',
                    // }}
                  >
                    {title}
                  </div>
                  <div
                    className='cardDesc'
                    // style={{
                    //   fontSize: '24px',
                    //   color: '#202020',
                    //   fontStyle: 'italic',
                    //   fontWeight: '500',
                    // }}
                  >
                    {description}
                  </div>
                  <div
                    className='cardLinks'
                    // style={{
                    //   display: 'flex',
                    //   alignItems: 'center',
                    //   justifyContent: 'center',
                    // }}
                  >
                    <ul
                      className='links'
                      //   style={{
                      //     listStyle: 'none',
                      //     display: 'flex',
                      //   }}
                    >
                      <li
                        className='singleLink'
                        // style={{
                        //   padding: '10px',
                        //   cursor: 'pointer',
                        //   fontSize: '24px',
                        //   fontStyle: 'bold',
                        // }}
                      >{`[github]`}</li>
                      <li className='singleLink'>live demo</li>
                      <li className='singleLink'>figma</li>
                    </ul>
                  </div>
                  <div className='stackDisplay'>
                    <ul className='techStack'></ul>
                  </div>
                </div>
              </div>
              {/* <h3>{id}</h3>
              <h2>{title}</h2> */}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Project

//  {Array.from({ length: 3 }).map((item, index)

// <div
//             style={{
//               background: '#202020',
//               width: 977,
//               height: 310,
//               border: '30px solid white',
//               textAlign: 'center',
//               lineHeight: '240px',
//               boxSizing: 'border-box',
//             }}
//             key={index}
//           >

{
  /* </div> */
}
