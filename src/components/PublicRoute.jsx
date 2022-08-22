import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedIn } from 'redux/auth/authSelectors';
// import Loader from './Loader/Loader';

const PublicRoute = ({ restricted = false, component: Component }) => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Suspense>
      {isLoggedIn && restricted ? <Navigate to="/contacts" /> : <Component />}
    </Suspense>
  );
};

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  component: PropTypes.object,
};

export default PublicRoute;

// fallback={<Loader />}
