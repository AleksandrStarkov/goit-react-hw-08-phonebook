import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

const AuthNavigation = () => {
  const location = useLocation();

  return (
    <div className={s.nav}>
      <NavLink to="register" className={s.navLink} state={location}>
        Registration
      </NavLink>
      <NavLink to="login" className={s.navLink} state={location}>
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
