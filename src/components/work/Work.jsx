import React from 'react'
import Project from '../project/Project'
import './work.css'

const Work = () => {
  return (
    <div className='work'>
      <div className='workWrapper'>
        <div className='workTitle'>{`<Work />`}</div>
        <div className='workSubtitle'>
          <div className='slashes'>{`//`}</div>
          <div className='commentedCode'>
            I enjoy coding a lot and here are some of my projects
          </div>
        </div>
        <Project />
      </div>
    </div>
  )
}

export default Work
