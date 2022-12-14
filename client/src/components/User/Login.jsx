import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { submitHandlerLogin } from '../../redux/actions/userActions';

function Login() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    dispatch(submitHandlerLogin(e, inputs));
    navigate('/');
  };

  return (
    <div className="containerLogin">
      <div className="d-flex justify-content-center">
        <form style={{ marginTop: '100px' }} onSubmit={submitHandler} className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3">
          <legend className="text-center mb-4">Login</legend>
          <div className="mb-3">
            Email:
            <input onChange={inputHandler} className="form-control" value={inputs.email} type="text" name="email" placeholder="Email" />
          </div>

          <div className="mb-3">
            Passwird:
            <input onChange={inputHandler} className="form-control" value={inputs.password} type="password" name="password" placeholder="Pass" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <p>{errors && errors}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
