import axios from 'axios';
import { LOGOUT, SET_AUTH, ERRORS } from '../types';

export const logoutUser = () => ({ type: LOGOUT });
export const setUserSession = (payload) => ({ type: SET_AUTH, payload });
export const errors = (payload) => ({ type: ERRORS, payload });

export const logout = () => (dispatch) => {
  axios.get('api/user/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};

export const submitHandlerReg = (e, inputs, navigate, setModal) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/reg', inputs)
    .then((res) => {
      dispatch(setUserSession(
        { userName: res.data.userName, userId: res.data.userId },
      ));
      navigate('/');
      dispatch(errors(''));
    })
    .catch(() => {
      dispatch(errors('Такой email уже существует'));
      setModal(true);
    });
};

export const submitHandlerLogin = (e, inputs, navigate, setModal) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/login', inputs)
    .then((res) => {
      dispatch(setUserSession(
        { userName: res.data.userName, userId: res.data.userId },
      ));
      navigate('/');
      dispatch(errors(''));
    })
    .catch(() => {
      dispatch(errors('Email или пароль не верные'));
      setModal(true);
    });
};
export const checkAuth = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setUserSession(res.data)))
    .catch(console.log);
};
