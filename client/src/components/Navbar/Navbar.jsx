import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import './css/Navbar.css';

export default function Navbar() {
  const userSession = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <ul className="nav justify-content-center cox-navbar">
      <NavLink className="navbar-brand cox-logo" to="/" />
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled navUserName"
          style={{ color: 'rgb(61, 95, 85)', fontSize: '18px' }}
          href
        >
          { userSession.userName ? `Hello ${userSession.userName}` : 'Hello, guest!' }
        </a>
      </li>
      {!userSession.userName
        ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">Registration</NavLink>
            </li>
          </>
        ) : (
          <button type="button" className="btn btn-link" onClick={logoutHandler}>Logout</button>
        )}
    </ul>
  );
}
