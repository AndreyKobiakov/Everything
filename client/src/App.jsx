import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BlackJack from './components/GameBlackJack/main/BlackJack';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/User/Login';
import Registration from './components/User/Registration';
import { checkAuth } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/blackjack" element={<BlackJack />} />
      </Routes>
    </>
  );
}

export default App;
