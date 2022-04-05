import React from 'react';
import s from './projects.module.css';
import Card from '../card/card';
import proj1 from '../../images/gaming_metaverse_img1.png';
import proj2 from '../../images/beautify.png';

export default function Projects () {
  return (
    <div className={s.wrap}>
      <div className={s.title}>
        <h1>Projects</h1>
      </div>
      <div className={s.cards}>
        <Card
          project="Beautify E-commerce: Your beauty depends on you"
          description="Single-page Application made with SCRUM methodology in 3 weeks by a team of Full Stack Devs using React.js, Redux, Node.js, Express, Postgres, Bootstrap, Auth0, MercadoPago and more. Some of the features include: checkout, cart, payment, shipping, schedule appointments and more."
          image={proj2}
          link="https://beautify-three.vercel.app/"
          tech="React.js, Redux, Node.js, Express, Postgres, Bootstrap, Auth0, MercadoPago, Stripe, Mailchimp, and more."
        />
        <Card
          project="PI-Videogames"
          description="Development of a SPA (Single Page Application) using React for the Front End and Redux as store management. Every component was develop with CSS without using external libraries. The SPA consume data from 'Rawg' API through a Back End developed in Node.JS using Express, adding new functionalities to the original API. Some features of the project: Searching, sorts and filters, controlled form for the creation of new video games, among others."
          image={proj1}
          link={null}
          tech="React.js, Redux, Node.js, Express, Postgres and more."
        />
      </div>
    </div>
  )
}