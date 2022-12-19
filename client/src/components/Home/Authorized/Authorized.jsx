import './css/Authorized.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './css/myataya-bumaga.png';
import Layout from '../../Layout/Layout';

export default function Authorized() {
  return (
    <Layout
      background={`url(${img})`}
    >
      <div className="authorizedBackground">
        <div className="homeLinks">
          <NavLink className="coxLinck" to="/toDo">Drag and drop To Do</NavLink>
          <NavLink className="coxLinck" to="/blackjack">Black Jack</NavLink>
        </div>
      </div>
    </Layout>
  );
}
