import React from 'react';
import s from './card.module.css';

export default function Card ({project, description, image, link}) {
  return (
    <section>
      <div className={s.card}>
        <div className={s.title_wrap}>
          <h1 className={s.title}>{project}</h1>
        </div>
        <div className={s.content_wrap}>
          <div className={s.img_wrap}>
            <img src={image} alt={project+" img"} className={s.img} />
          </div>
          <div className={s.descr_link_wrap}>
            <div className={s.description_wrap}>
              <p className={s.description}>{description}</p>
            </div>
            <div className={s.link_wrap}>
              <a className={s.link} href={link}>Visit this project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}