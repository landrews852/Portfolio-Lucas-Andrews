import React from 'react';
import s from './landingPage.module.css';
import About from '../about/about';
import Projects from '../projects/projects';

export default function LandingPage() {
  return (
    <section className={s.wrap}>
      <section className={s.navbar_section}>
        <div className={s.navbar}>
          <div className={s.navbar_title}>
            <a href='# '>Lucas_Andrews.portfolio</a>
          </div>
          <div className={s.navbar_links}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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
        <div className={s.title}>
          <h1>Contact</h1>
        </div>
        <div className={s.cards}>
        </div>
      </section>
    </section>
  );
}