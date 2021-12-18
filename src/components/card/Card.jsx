import './card.css'
import { data } from '../project/data'
import { GitHub, Link } from '@material-ui/icons'
import portfolio from '../../images/portfolio-website-image.png'
import array from '../../images/sorting-visualizer-image.png'
import backend from '../../images/backend-social-media.png'



const Card = () => {
  return (
    <div className='project'>
      <div className='projectWrapper'>
        <div className='projectOne'>
          <div className='imageBox'>
            <img src={array} alt='' />
            <div className='overlay'>
              <div className='imageName'>Array Sorting Visualizer</div>
              <p className='imageDesc'>
                This is a react project with a very simple ui that allows users to see the various sorting algorithms and how they work in real time. It features popular sorting algorithms like bubble sort, selection sort, merge sort, quick sort and insertion sort. 
              </p>
            </div>
          </div>
          <div className='techStack'>
            <h3 className='techStackTitle'>{`//Tech stack`}</h3>
            <ul className='techStackList'>
              <li className='techList'>ReactJS</li>
              
            </ul>
          </div>
          <div className='codeLinks'>
            <h3 className='codeLinksTitle'>{`//See it in action`}</h3>
            <ul className='codeLinksList'>
              <a href='https://sortingvisualizerehi.netlify.app/' target='blank'>
              <li className='links'>
                Visit the site <Link className='icons' />
              </li>
              </a>
              <a href='https://github.com/Leehis/Sorting-Visualizer' target='blank'>
              <li className='links'>
                See the code <GitHub className='icons' />
              </li>
              </a>

            </ul>
          </div>
        </div>

        <div className='projectTwo'>
          <div className='imageBox'>
            <img src={backend} alt='' />
            <div className='overlay'>
              <div className='imageName'>Social Media Backend</div>
              <p className='imageDesc'>
                This is the code for a social media backend. It allows users to follow each other, create posts, log-in, create accounts and many other social interactions. All this information is also stored in a database.
              </p>
            </div>
          </div>
          <div className='techStack'>
            <h3 className='techStackTitle'>{`//Tech stack`}</h3>
            <ul className='techStackList'>
              <li className='techList'>nodeJs</li>
              <li className='techList'>expressJS</li>
              <li className='techList'>mongoose</li>

            </ul>
          </div>
          <div className='codeLinks'>
            <h3 className='codeLinksTitle'>{`//See it in action`}</h3>
            <ul className='codeLinksList'>
             
              <a href='https://github.com/Leehis/social_media_backend' target='blank'>
                <li className='links'>
                  See the code <GitHub className='icons' />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className='projectThree'>
          <div className='imageBox'>
            <img src={portfolio} alt='' />
            <div className='overlay'>
              <div className='imageName'>Personal Website</div>
              <p className='imageDesc'>
                This is the website you're currently on. This website is built with the purpose of showing off the work I have done.
              </p>
            </div>
          </div>
          <div className='techStack'>
            <h3 className='techStackTitle'>{`//Tech stack`}</h3>
            <ul className='techStackList'>
              <li className='techList'>ReactJS</li>
            </ul>
          </div>
          <div className='codeLinks'>
            <h3 className='codeLinksTitle'>{`//See it in action`}</h3>
            <ul className='codeLinksList'>
              <a href=''>
                <li className='links'>
                  Visit the site? You're already here! <Link className='icons' />
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
