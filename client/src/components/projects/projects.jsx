import React from 'react';
import s from './projects.module.css';
import Card from '../card/card';

export default function Projects () {
  return (
    <section>
      <div className={s.title}>
        <h1>Projects</h1>
      </div>
      <div className={s.card}>
        <Card />
      </div>
    </section>
  )
}