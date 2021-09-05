import { GitHub, LinkedIn } from '@material-ui/icons'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroWrapper'>
        <div className='leftHeroContent'>
          <div className='heroTitle'>
            Hi, I'm <span className='name'>Ehi.</span>
          </div>
          <div className='heroSubtitle'>I'm a full stack developer.</div>
          <div className='socials'>
            <ul className='socialList'>
              <li className='socialIcons'>
                <LinkedIn className='socialIcon' />
              </li>
              <li className='socialIcons'>
                <GitHub className='socialIcon' />
              </li>
            </ul>
          </div>
        </div>
        <div className='rightHeroContent'>
          <button className='hire'>.resume( )</button>
          <button className='contact'>.work( )</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
