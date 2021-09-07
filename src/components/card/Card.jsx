import './card.css'

const Card = () => {
  return (
    <div className='cardBg'>
      <div className='card'>
        <div className='cardWrapper'>
          <div className='cardTop'>
            <div className='cardLeft'>
              <div className='imgBox'>
                <img
                  className='img'
                  src='https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='cardRight'>
              <div className='cardTitle'>{`[projectTitle]`}</div>
              <div className='cardDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                praesentium molestiae porro repellat reprehenderit illo eos hic
                quasi, facilis laborum animi sed quaerat, adipisci ad neque
                dolorum exercitationem sit? Obcaecati.
              </div>
              <div className='cardLinks'>
                <ul className='links'>
                  <li className='singleLink'>{`[github]`}</li>
                  <li className='singleLink'>{`[live site]`}</li>
                  <li className='singleLink'>{`[figma]`}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='cardBottom'>Bottom</div>
        </div>
      </div>
    </div>
  )
}

export default Card
