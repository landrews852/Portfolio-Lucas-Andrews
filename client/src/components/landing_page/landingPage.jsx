import React from 'react';
import s from './landingPage.module.css';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

export default function LandingPage() {
  return (
    <section className={s.wrap}>
      <section className={s.navbar_section}>
        <div className={s.wrap_nav}>
          <div className={s.navbar}>
            <div className={s.navbar_title}>
              <a className={s.navlink} href='# '>Lucas_Andrews.portfolio</a>
              <a className={s.navlink_logo} href='https://github.com/landrews852' target="_blank" rel="noopener noreferrer"><img className={s.logo1} src={github}/></a>
              <a className={s.navlink_logo} href='https://www.linkedin.com/in/landrewsl/' target="_blank" rel="noopener noreferrer"><img className={s.logo2} src={linkedin}/></a>
            </div>
            <div className={s.navbar_links}>
              <a className={s.navlink} href="#about">About</a>
              <a className={s.navlink} href="#projects">Projects</a>
              <a className={s.navlink} href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </section> rel="noopener noreferrer"
      <section id="about" className={s.sub_wrap1}>
        <About />
      </section>
      <section id="projects" className={s.sub_wrap2}>
        <Projects />
      </section>
      <section id="contact" className={s.sub_wrap3}>
        <Contact />
      </section>
      <section>
        <div className={s.footer}>
          <p className={s.footer_text}>© 2022 Lucas Andrews. All rights reserved.</p>
        </div>
      </section>
    </section>
  );
}