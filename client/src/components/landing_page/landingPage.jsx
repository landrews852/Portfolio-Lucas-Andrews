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
        <div className={s.navbar}>
          <div className={s.navbar_title}>
            <a className={s.navlink} href='# '>Lucas_Andrews.portfolio</a>
            <a className={s.navlink} href='https://github.com/landrews852'><img className={s.logo1} src={github}/></a>
            <a className={s.navlink} href='https://www.linkedin.com/in/landrewsl/'><img className={s.logo2} src={linkedin}/></a>
          </div>
          <div className={s.navbar_links}>
            <a className={s.navlink} href="#about">About</a>
            <a className={s.navlink} href="#projects">Projects</a>
            <a className={s.navlink} href="#contact">Contact</a>
          </div>
        </div>
      </section>
      <section id="about" className={s.sub_wrap1}>
        <About />
      </section>
      <section id="projects" className={s.sub_wrap2}>
        <Projects />
      </section>
      <section id="contact" className={s.sub_wrap3}>
        <Contact />
      </section>
    </section>
  );
}