import React, { useEffect, useState } from 'react';
import { validating } from './helper-validating';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toastify';
const SignUp = function (props) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  useEffect(() => {
    setErrors(validating(formData));
  }, [formData, touched]);
  const onChangeHandler = function (e) {
    if (e.target.name === 'isAccepted') {
      setFormData(oldState => {
        return { ...oldState, [e.target.name]: e.target.value };
      });
    } else {
      setFormData(oldState => {
        return { ...oldState, [e.target.name]: e.target.value };
      });
    }
  };
  const onTouchHandler = function (e) {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify('Successfully', 'succes');
    } else {
      notify('Invalid data!', 'error');
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div>
      <form action="#" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            onFocus={onTouchHandler}
            value={formData.name}
            className={errors.name && touched.name ? 'unComplete' : ''}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            onFocus={onTouchHandler}
            value={formData.email}
            className={errors.email && touched.email ? 'unComplete' : ''}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
            onFocus={onTouchHandler}
            className={errors.password && touched.password ? 'unComplete' : ''}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
            onFocus={onTouchHandler}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? 'unComplete'
                : ''
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className="checkbox">
          <label>I accept all rules and text text</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={formData.isAccepted}
            onChange={onChangeHandler}
            onFocus={onTouchHandler}
          />
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className="form-actions">
          <button className="login">Login</button>
          <button className="signup">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
