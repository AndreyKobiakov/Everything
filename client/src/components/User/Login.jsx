import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitHandlerLogin } from '../../redux/actions/userActions';
import Layout from '../Layout/Layout';
import img from './css/auth.jpg';
import Modal from './modal/Modal';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const errors = useSelector((state) => state.errors);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    dispatch(submitHandlerLogin(e, inputs, navigate, setModal));
  };

  return (
    <Layout
      background={`url(${img})`}
    >
      <Modal setModal={setModal} modal={modal} errors={errors} />
      <div className="containerLogin">
        <div className="d-flex justify-content-center">
          <form onSubmit={submitHandler} className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3 cox-user-form">
            <legend className="text-center mb-4">Login</legend>
            <div className="mb-3">
              Email:
              <input onChange={inputHandler} className="form-control" value={inputs.email} type="text" name="email" placeholder="Email" />
            </div>

            <div className="mb-3">
              Password:
              <input onChange={inputHandler} className="form-control" value={inputs.password} type="password" name="password" placeholder="Pass" />
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
            {/* <p>{errors && errors}</p> */}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
