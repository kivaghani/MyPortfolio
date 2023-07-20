import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50su3ue', 'template_bj56nfc', form.current, 'wwjAQTxRZh1W8FKQ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 return (
    <section id='contact'>
      <h5>Get In Touch</h5>  
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kartikvaghani066@gmail.com</h5>
          <a href="mailto:kartikvaghani066@gmail.com" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineWhatsApp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+9727571976</h5>
          <a href="https://api.whatsapp.com/send?phone+9727571976" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>kartik_vaghani_027</h5>
          <a href="https://www.instagram.com/kartik_vaghani_027/?hl=en" target='blank'> Send a message</a>
        </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='your full name'  required/>
        <input type="email" name='email' placeholder='your email'  required/>
        <textarea name="message" placeholder='your message'  required/>
        <button type='submit' className='btn btn-primary'> Send a Message</button>
      </form>
      </div>
     
    </section>
 )
}

export default Contact