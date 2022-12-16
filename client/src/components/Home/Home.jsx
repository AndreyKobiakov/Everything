import React from 'react';
import { useSelector } from 'react-redux';
import Authorized from './Authorized/Authorized';
import Guest from './Guest';
import './Home.css';

export default function Home() {
  const userSession = useSelector((state) => state.user);
  return (
    !userSession.userName
      ? (<Guest />)
      : (<Authorized />)
  );
}
