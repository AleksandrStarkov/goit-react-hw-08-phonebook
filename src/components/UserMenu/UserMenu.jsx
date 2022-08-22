import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { getUserEmail } from 'redux/auth/authSelectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const handleLogOut = e => dispatch(logOutThunk());

  return (
    <div className={s.userMenu}>
      <p>{userEmail}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
