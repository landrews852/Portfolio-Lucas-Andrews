import React from 'react';
import s from './projects.module.css';
import Card from '../card/card';
import proj1 from '../../images/gaming_metaverse_img1.png';

export default function Projects () {
  return (
    <div className={s.wrap}>
      <div className={s.title}>
        <h1>Projects</h1>
      </div>
      <div className={s.cards}>
        <Card
          project="Beautify E-commerce: Your beauty depends on you"
          description="Single-page Application made with SCRUM methodology in 3 weeks by a team of Full Stack Devs using React.js, Redux, Node.js, Express, Postgres, Bootstrap, Auth0, MercadoPago and more."
          image={proj1}
          link="https://beautify-three.vercel.app/"
        />
        <Card
          project="PI-Videogames"
          description="Desarrollo de una SPA (Single Page Application) utilizando React para el Front End y keaux como stâre
            management. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas.
            La SPA consume datos de una API rawg a través de un Back End desarrollado en Node.JS
            utilizando Express, agregando nuevas funcionalidades a la API original.
            Algunos features del proyecto: Cache de búsquedas, ordenamientos y filtros, formulario controlado para
            creación de"
          image={proj1}
          link="https://pi-videogames.vercel.app/"
        />
      </div>
    </div>
  )
}