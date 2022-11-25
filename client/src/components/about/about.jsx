import React, { useRef } from 'react';
import s from './about.module.css';
import picture from '../../images/profile_picture.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import Tools from './tools';

export default function About() {
  // const [showCV, setShowCV] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <section className={s.wrap}>
      <div className={s.about_title}>
        <h1>About me</h1>
      </div>
      <div className={s.img_txt_wrap}>
        <div className={s.profile}>
          <img className={s.img} src={picture} alt="profile_picture" />
          <div className={s.infocard}>
            <span className={s.infocard_item}>Lucas Andrews</span>
            <span className={s.infocard_item}>Santiago de Chile</span>
            <span className={s.infocard_item}>29 years old</span>
          </div>
        </div>
        <br />
        <div className={s.txt_wrap}>
          <p className={s.txt}>
            Here you can see part of my work as Full-Stack Developer.
          </p>
          <p className={s.txt}>
            I am focused mainly on "PERN" and "MERN" stack (PostgreSQL / MongoDB
            - Express - React.js - Node.js), seeking for new useful knowledge to
            add to my tech skills.
          </p>
          <p className={s.txt}>
            I am currently learning Next.js and constantly practicing with
            React.js, looking for a new job opportunity to share my current
            knowledge and learn new ones.
          </p>
          <div className={s.cv}>
            {showButton && (
              <button onClick={() => setShowMessage(true)} className={s.btn}>
                ¡¡ Click here to see my <b>CV/resume</b> !!
              </button>
            )}
            <CSSTransition
              in={showMessage}
              nodeRef={nodeRef}
              timeout={300}
              classNames="transition"
              unmountOnExit
              onEnter={() => setShowButton(false)}
              onExited={() => setShowButton(true)}
            >
              <div ref={nodeRef} className="transition">
                <button
                  className={s.btnX}
                  onClick={() => setShowMessage(false)}
                >
                  X
                </button>
                <a
                  href="/Docs/CV_Lucas_Andrews_ESP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMessage(false)}
                  className={s.btn}
                >
                  <b>Spanish / Español</b>
                </a>
                <a
                  href="/Docs/CV_Lucas_Andrews_ENG.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMessage(false)}
                  className={s.btn}
                >
                  <b>English / Inglés</b>
                </a>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      <Tools />
    </section>
  );
}
