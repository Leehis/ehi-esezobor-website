import { GitHub, LinkedIn } from '@material-ui/icons'

import { Link } from 'react-router-dom'

import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroWrapper'>
        <div className='leftHeroContent'>
          <div className='heroTitle'>
            Hi, I'm <span className='name'>Ehi.</span>
          </div>
          <div className='heroSubtitle'>
            I'm a full stack developer
            <br /> and UI/UX Designer.
          </div>
          <div className='socials'>
            <ul className='socialList'>
            <a href='https://www.linkedin.com/in/ehinomen-chris-esezobor-459631174/' target='blank'>
              <li className='socialIcons'>
                <LinkedIn className='socialIcon' />
              </li>
              </a>
              <a href='https://github.com/Leehis' target='blank'>
              <li className='socialIcons'>
                <GitHub className='socialIcon' />
              </li>
              </a>
            </ul>
          </div>
        </div>
        <div className='rightHeroContent'>
          <a href='../../../public/files/esezobor-resume.pdf' download>
            <button className='resumeButton'>.resume()</button>
          </a>
          <button className='workButton'>.work()</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
