import './tools.css'

const Tools = () => {
  return (
    <div className='tools'>
      <div className='toolsWrapper'>
        <div className='titleContainer'>
          <div className='title'>{'<Tools />'}</div>
          <div className='subtitles'>
            {`// I like to think I'm language agnostic, but here are some of my
            favorite tools right now`}
          </div>
        </div>

        <div className='toolsContainer'>
          <div className='frontend'>
            <div className='frontendTitle'>{`<Frontend tools />`}</div>
            <ul className='frontendToolsList'>
              <li className='frontendTools'>.HTML()</li>
              <li className='frontendTools'>.CSS()</li>
              <li className='frontendTools'>.styledComponents()</li>
              <li className='frontendTools'>.reactJS()</li>
            </ul>
          </div>
          <div className='backend'>
            <div className='backendTitle'>{`<Backend Tools />`}</div>
            <ul className='backendToolsList'>
              <li className='backendTools'>.nodeJS()</li>
              <li className='backendTools'>.mongoDB()</li>
              <li className='backendTools'>.expressJS()</li>
              <li className='backendTools'>.python()</li>
              <li className='backendTools'>.SQL()</li>
            </ul>
          </div>

          <div className='others'>
            <div className='othersTitle'>{`<Other tools />`}</div>
            <ul className='othersToolsList'>
              <li className='othersTools'>.figma()</li>
              <li className='othersTools'>.adobePhotoshop()</li>
              <li className='othersTools'>.adobeXD()</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
