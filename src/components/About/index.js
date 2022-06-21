import React from "react"
// import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@mui/material/Button';

function About() {
  return (
    <section className="container">
      <h2 class="top-title">Christian L. Ruiz</h2>
      <hr></hr>
      <div>
        <img
          class="mb-5"
          id="avatar"
          src="https://github.com/cruiz328.png"
          alt="Christian L. Ruiz"
        />

        <p>
          I’m a Full Stack Developer based in the Bay Area, passionate about
          creative thinking, embracing curiosity, and making ideas come to life.
          Backed with the knowledge and education of full stack and also using
          my past work experience, I am able to work efficiently by myself but
          also in a team setting, as well with a chain of command. My
          multicultural background gives me a unique advantage, where I am able
          to communicate with various people in English and Spanish.
        </p>
      </div>
    </section>
  )
}

export default About
