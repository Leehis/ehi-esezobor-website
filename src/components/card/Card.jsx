import './card.css'
import { data } from '../project/data'
import { GitHub, Link } from '@material-ui/icons'
import portfolio from '../../images/portfolio-website-image.png'

const Card = () => {
  return (
    <div className='project'>
      <div className='projectWrapper'>
        <div className='projectOne'>
          <div className='imageBox'>
            <img src={portfolio} alt='' />
            <div className='overlay'>
              <div className='imageName'>Personal Portfolio Website</div>
              <p className='imageDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ut quas officiis numquam rem minima, delectus natus eligendi
                velit doloribus possimus fugiat. Ad consectetur dignissimos
                dolores vitae totam sunt qui?
              </p>
            </div>
          </div>
          <div className='techStack'>
            <h3 className='techStackTitle'>{`//Tech stack`}</h3>
            <ul className='techStackList'>
              <li className='techList'>ReactJS</li>
              <li className='techList'>ReactJS</li>
            </ul>
          </div>
          <div className='codeLinks'>
            <h3 className='codeLinksTitle'>{`//See it in action`}</h3>
            <ul className='codeLinksList'>
              <li className='links'>
                Visit the site <Link className='icons' />
              </li>
              <li className='links'>
                See the code <GitHub className='icons' />
              </li>
            </ul>
          </div>
        </div>
        <div className='projectTwo'>
          <div className='imageBox'>
            <img src={portfolio} alt='' />
            <div className='overlay'>
              <div className='imageName'>Personal Portfolio Website</div>
              <p className='imageDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ut quas officiis numquam rem minima, delectus natus eligendi
                velit doloribus possimus fugiat. Ad consectetur dignissimos
                dolores vitae totam sunt qui?
              </p>
            </div>
          </div>
          <div className='techStack'>
            <h3 className='techStackTitle'>{`//Tech stack`}</h3>
            <ul className='techStackList'>
              <li className='techList'>ReactJS</li>
              <li className='techList'>ReactJS</li>
            </ul>
          </div>
          <div className='codeLinks'>
            <h3 className='codeLinksTitle'>{`//See it in action`}</h3>
            <ul className='codeLinksList'>
              <a href=''>
                <li className='links'>
                  Visit the site <Link className='icons' />
                </li>
              </a>
              <a href='https://github.com'>
                <li className='links'>
                  See the code <GitHub className='icons' />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
