// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactsList/ContactsList';
// import s from './App.module.css';
// import { getContacts } from 'redux/contacts/contacts-operation';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const App = () => {
//   const contacts = useSelector(state => state.contacts.items.length);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getContacts());
//   });
//   return (
//     <div className={s.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts in Phonebook:{contacts}</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

// export default App;

import { lazy } from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from './UserMenu/UserMenu';
import s from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {isLoggedIn && <UserMenu />}
      <h1 className={s.mainTitle}>Phonebook</h1>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LogInPage} restricted />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
