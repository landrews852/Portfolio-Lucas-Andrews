import React, { useState } from 'react';
import s from './contact.module.css';
import Swal from 'sweetalert2'
// import { useForm } from 'react-hook-form';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Thank you!',
      text: 'Your message has been sent!',
      icon: 'success',
      confirmButtonText: 'Cool'
  })
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  return (
    <section className={s.wrap}>
      <div className={s.title}>
        <h1>Contact</h1>
      </div>
      <div className={s.form}>
        <form>
          <div className={s.form_input_wrap}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name" placeholder='I need to know who is talking to me...'/>
          </div>
          <div className={s.form_input_wrap}>
            <label htmlFor="name">Email</label>
            <input name="email" type="email" id="email" placeholder='Put your Email here, so I can answer...'/>
          </div>
          <div className={s.form_input_wrap}>
            <label htmlFor="name">Message</label>
            <textarea name="message" id="message" placeholder='Here you can express your-self :)...'/>
          </div>
          <button className={s.btn} onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </section>
  )
}