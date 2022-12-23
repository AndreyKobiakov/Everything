import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitHandlerReg } from '../../redux/actions/userActions';
import img from './css/auth.jpg';
import Layout from '../Layout/Layout';
import Modal from './modal/Modal';

function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputs.name) {
      setError('Введите имя');
      setModal(true);
    } else if (!inputs.email) {
      setError('Введите email');
      setModal(true);
    } else if (inputs.password !== inputs.password2) {
      setError('Пароли не совпадают');
      setModal(true);
    } else {
      dispatch(submitHandlerReg(e, inputs, navigate, setModal));
    }
  };
  return (
    <Layout
      background={`url(${img})`}
    >
      <Modal setModal={setModal} modal={modal} errors={errors} error={error} setError={setError} />
      <div className="containerReg">
        <div className="d-flex justify-content-center">
          <form onSubmit={submitHandler} className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3 cox-user-form">
            <legend className="text-center mb-4">Registration</legend>
            <div className="mb-3">
              Name:
              <input onChange={inputHandler} className="form-control" value={inputs.name} type="text" name="name" placeholder="Name" />
            </div>

            <div className="mb-3">
              Email:
              <input onChange={inputHandler} className="form-control" value={inputs.email} type="email" name="email" placeholder="Email" />
            </div>

            <div className="mb-3">
              Password:
              <input onChange={inputHandler} className="form-control" value={inputs.password} type="password" name="password" placeholder="Password" />
            </div>
            <div className="mb-3">
              Repeat the password:
              <input onChange={inputHandler} className="form-control" value={inputs.password2} type="password" name="password2" placeholder="Repeat the password" />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Registration;
