import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './NavForm.module.css';

const AuthForm = ({ title, titleSubmit, register = false, cbSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    register === true
      ? cbSubmit({ name, email, password })
      : cbSubmit({ email, password });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>{title}</h2>
      <form className={s.navForm} onSubmit={handleSubmit}>
        {register && (
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        )}
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="text"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.navForm__btn} type="submit">
          {titleSubmit}
        </button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string.isRequired,
  register: PropTypes.bool,
  cbSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
