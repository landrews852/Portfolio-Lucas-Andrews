import React from "react";
import s from "./about.module.css";
import picture from "../../images/profile_picture.png"

export default function About () {
  return (
    <section className={s.wrap}>
      <div className={s.about_title}>
        <h1>About me</h1>
      </div>
      <div className={s.img_txt_wrap}>
        <div className={s.img_wrap}>
          <img className={s.img} src={picture} alt="profile_picture"/>
          <div className={s.cv}>
            <a href="/Docs/Lucas_Andrews_CV_ENG.pdf" target="_blank">¡¡ Click here to see my <b>CV/resume</b> !!</a>
          </div>
        </div>
        <div className={s.txt_wrap}>
          <p className={s.txt}>Hi, I am Lucas Andrews and here you will see all my work as developer.</p>
          <p className={s.txt}>I am a Full Stack Developer and I am focused mainly on "PERN" and "MERN" stack (PostgreSQL / MongoDB - Express - React.js - Node.js), seeking for new useful knowledge to add to my tech skills.</p>
          <p className={s.txt}>I am actually learning Next.js and constantly practicing with React.js, looking for a new job opportunity to share my actual knowledge and learn new ones.</p>
        </div>
      </div>
      <div className={s.skills}>
        <h3 className={s.skills_title}>Languages and Tools:</h3>
        <div className={s.skills_icons}>
          <a className={s.link_skills} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="/images/icon_mongodb.png" alt="mongodbs" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
          {/* <a className={s.link_skills} href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/></a>
          <a className={s.link_skills} href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a>
          <a className={s.link_skills} href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> */}
          <a className={s.link_skills} href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
          <a className={s.link_skills} href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/></a>
        </div>
      </div>
    </section>
  )
}