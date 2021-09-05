import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarWrapper'>
        <div className='topLeft'>
          <div className='leftContent'>EHI ESEZOBOR</div>
        </div>

        <div className='topRight'>
          <ul className='rightContent'>
            <li className='rightItems'>.work( )</li>
            <li className='rightItems'>.about( )</li>
            <li className='rightItems'>.tools( )</li>
            <li className='rightItems'>.contact( )</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
