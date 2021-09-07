import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import { data } from './data'

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
          const { id, title, img } = portfolioProject
          return (
            <div
              style={{
                background: '#202020',
                width: 977,
                height: 310,
                textAlign: 'center',
                lineHeight: '50px',
              }}
            >
              <h3>{id}</h3>
              <h2>{title}</h2>
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
