import './navbar.css'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarWrapper'>
        <div className='topLeft'>
          <div className='leftContent'>
            <FiberManualRecord className='dot' />
            EHI ESEZOBOR
          </div>
        </div>

        <div className='topRight'>
          <ul className='rightContent'>
            <li className='rightItems'>
              <FiberManualRecord className='dot' />
              ABOUT( )
            </li>
            <li className='rightItems'>
              <FiberManualRecord className='dot' />
              WORK( )
            </li>
            <li className='rightItems'>
              <FiberManualRecord className='dot' />
              CONTACT( )
            </li>
            <li className='rightItems'>
              <FiberManualRecord className='dot' />
              RESUME( )
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
