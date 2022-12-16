import React from 'react';
import Layout from '../../Layout/Layout';
import './css/Guest.css';
import img from './css/FrontGuest.jpg';

export default function Guest() {
  return (
    <Layout
      background={`url(${img})`}
    >
      <div className="parentDivGuest">
        <div className="heading">
          Welcome to Andrey Kobyakov personal website:
        </div>
        <p className="coxAbout">
          I am a front-end developer and I made this site alone. It was used here,
          <br />
          Front: JavaScript, React, Redux, HTML, CSS, HTML5, CSS3, Linux, Bootstrap, Material-UI,
          API.
          <br />
          Back: PostgreSQL, Node.js , Git, Routing, rest API.
        </p>
        <p className="RegistrationP">Зарегестрируйтесь или авторизуйтесь что бы увидеть больше!</p>
      </div>
    </Layout>
  );
}
