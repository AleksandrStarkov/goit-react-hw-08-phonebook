import AuthForm from 'components/NavForm/NavForm';
import LinkGoBack from 'components/GoBack/GoBack';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/authOperations';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(logInThunk(data));

  return (
    <>
      <AuthForm
        title={'Log in'}
        titleSubmit={'Log in'}
        cbSubmit={handleFormSubmit}
      />
      <LinkGoBack />
    </>
  );
};

export default LogInPage;
