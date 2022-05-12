import React from 'react';
// import React, { useState } from 'react';
import s from './contact.module.css';
// import Swal from 'sweetalert2'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

// import { useForm } from 'react-hook-form';

export default function Contact() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   Swal.fire({
  //     title: 'Thank you!',
  //     text: 'Your message has been sent!',
  //     icon: 'success',
  //     confirmButtonText: 'Cool'
  // })
  // }

  // const [error, setError] = useState("");
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: ""
  // })

  return (
    <section className={s.wrap}>
      <div className={s.title}>
        <h1>Contact</h1>
      </div>
      <div className={s.form}>
        <div className={s.email}>
          <CopyToClipboard text={"andrews852@gmail.com"}>
            <a
              className={s.link}
              onClick={() => toast.success("Email copied to clipboard")}
              >
              <img
                className={s.icon}
                width="30px"
                src="/images/email-icon.png"
                />
                <p className={s.txt}>andrews852@gmail.com</p>
            </a>
          </CopyToClipboard>
          <Toaster position="bottom-center" reverseOrder={false} />


          <a href="https://www.linkedin.com/in/landrewsl" target="_blank" rel="noopener noreferrer" className={s.link}>
            <img 
              className={s.icon}  
              src="/images/linkedin.png" 
              />
            <p className={s.txt}>linkedin.com/in/landrewsl</p>
          </a>


          <a href="https://github.com/landrews852" target="_blank" rel="noopener noreferrer" className={s.link}>
            <img 
              className={s.icon}  
              src="/images/github.png" 
              />
            <p className={s.txt}>github.com/landrews852</p>
          </a>
        </div>
      </div>
      {/* <div className={s.form}>
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
      </div> */}
    </section>
  )
}