import axios from 'axios';

axios.defaults.baseURL = 'https://62ff7ee234344b6431fab87c.mockapi.io/';

export const addContactApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const removeContactsApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
