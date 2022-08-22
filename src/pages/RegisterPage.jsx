import AuthForm from 'components/NavForm/NavForm';
import LinkGoBack from 'components/GoBack/GoBack';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(registerThunk(data));

  return (
    <>
      <AuthForm
        title={'Registration'}
        titleSubmit={'Sign up'}
        register
        cbSubmit={handleFormSubmit}
      />
      <LinkGoBack />
    </>
  );
};

export default RegisterPage;
