import axios from 'axios';

const url = '';

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/create`, data);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/list`);
  } catch (error) {
    console.log('Error in gestUsers: ', error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${url}/${id}`);
  } catch (error) {
    console.log('Error in getUser api ', error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${url}/${id}`, user);
  } catch (error) {
    console.log('Error in editUser api ', error);
  }
};

export const deleteUsr = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log('Error in deleteUsr api ', error);
  }
};
