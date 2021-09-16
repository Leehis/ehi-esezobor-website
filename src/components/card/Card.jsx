import './card.css'
import { data } from '../project/data'
import { GitHub, Link } from '@material-ui/icons'

const Card = () => {
  return (
    <div className='project'>
      <div className='projectWrapper'>
        <div className='imageBox'>
          <img
            src={
              'https://images.pexels.com/photos/2411520/pexels-photo-2411520.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            }
            alt=''
          />
          <div className='overlay'></div>
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
    </div>
  )
}

export default Card
