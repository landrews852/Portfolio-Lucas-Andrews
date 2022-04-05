import React from 'react';
import s from './card.module.css';

export default function Card ({project, description, image, link}) {
  return (
    <section className={s.wrap}>
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
            {link
            ?<div className={s.link_wrap}>
              <a className={s.link} href={link}>Visit this project</a>
            </div>
            :null
            // <div className={s.link_wrap}>
            //   <button className={s.link_disabled} disabled ></button>
            // </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}