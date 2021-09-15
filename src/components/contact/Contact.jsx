import { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [visitorMessage, setVisitorMessage] = useState('')

  const visitor = { visitorName, visitorEmail, visitorMessage }

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
        <h1 className='title'>Let's Talk</h1>
        <p className='contactSubtitle'>
          Start a conversation around new business opportunities or tell me
          what's on your mind.
        </p>
        <div className='contactNameComponent'>
          <form onSubmit={sendEmail}>
            <label className='contactNameTitle'>What's your name?</label>
            <input
              type='text'
              name='visitorName'
              required
              placeholder='John Doe'
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
            />
            <label className='contactNameEmail'>What's your name?</label>
            <input
              name='visitorEmail'
              type='text'
              required
              placeholder='johndoe@email.com'
              value={visitorEmail}
              onChange={(e) => setVisitorEmail(e.target.value)}
            />
            <label className='contactMessage'>
              What would you like to tell me?
            </label>
            <textarea
              required
              name='visitorMessage'
              value={visitorMessage}
              onChange={(e) => setVisitorMessage(e.target.value)}
            ></textarea>
            <button>Enter</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
