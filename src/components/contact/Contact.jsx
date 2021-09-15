import { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [visitorMessage, setVisitorMessage] = useState('')

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     const visitor = { visitorName, visitorEmail, visitorMessage }

  //     console.log(visitor)
  //   }

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_s7smzsc',
        'template_27dnts8',
        e.target,
        'user_tSQqkNYyFS2ThGJDJYNqL'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    setVisitorName('')
    setVisitorEmail('')
    setVisitorMessage('')
  }

  return (
    <div className='contact'>
      <div className='contactWrapper'>
        <h1 className='title'>{`<Let's Talk />`}</h1>
        <p className='contactSubtitle'>
          Have any questions? Shoot me an email or find me around the web.
        </p>
        <div className='contactNameComponent'>
          <form onSubmit={sendEmail}>
            <div className='contactNameDiv'>
              <label className='contactNameTitle'>What's your name?</label>
              <input
                type='text'
                name='visitorName'
                required
                placeholder='John Doe'
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
              />
            </div>
            <div className='contactEmailDiv'>
              <label className='contactEmail'>
                What's a good email I can reach you at?
              </label>
              <input
                name='visitorEmail'
                type='text'
                required
                placeholder='johndoe@email.com'
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
              />
            </div>
            <div className='contactMessageDiv'>
              <label className='contactMessage'>
                What would you like to tell me?
              </label>
              <textarea
                required
                name='visitorMessage'
                value={visitorMessage}
                onChange={(e) => setVisitorMessage(e.target.value)}
              ></textarea>
            </div>
            <div className='contactSubmitButton'>
              <button className='submitButton'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
