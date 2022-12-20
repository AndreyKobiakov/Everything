import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import './css/Navbar.css';
import IconSvg from './HomeIcon/IconSvg';

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
      <NavLink className="navbar-brand" to="/"><IconSvg /></NavLink>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="navUserName">
        { userSession.userName ? `Hello ${userSession.userName}` : 'Hello, guest!' }
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
