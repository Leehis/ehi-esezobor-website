import './tools.css'

const Tools = () => {
  return (
    <div className='tools'>
      <div className='toolsWrapper'>
        <div className='titleContainer'>
          <div className='title'>
            I like to think I'm language agnostic, but here are some of my
            favorite tools right now
          </div>
        </div>

        <div className='toolsContainer'>
          <div className='backend'>
            <div className='backendTitle'>Backend Tools</div>
            <ul className='backendToolsList'>
              <li className='backendTools'>NodeJS</li>
              <li className='backendTools'>MongoDB</li>
              <li className='backendTools'>ExpressJS</li>
              <li className='backendTools'>Python</li>
              <li className='backendTools'>SQL</li>
            </ul>
          </div>
          <div className='frontend'>
            <div className='frontendTitle'>Frontend tools</div>
            <ul className='frontendToolsList'>
              <li className='frontendTools'>ReactJS</li>
              <li className='frontendTools'>HTML</li>
              <li className='frontendTools'>CSS</li>
              <li className='frontendTools'>Styled Components</li>
            </ul>
          </div>
          <div className='others'>
            <div className='othersTitle'>Others</div>
            <ul className='othersToolsList'>
              <li className='othersTools'>Figma</li>
              <li className='othersTools'>Adobe Photoshop</li>
              <li className='othersTools'>Adobe XD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
