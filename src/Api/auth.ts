import axios, {isCancel, AxiosError} from 'axios';
import {API_BASE_URL} from '../../env';
import {Alert} from 'react-native';

interface UserLogin {
  email: string;
  password: string;
}

const baseURL = API_BASE_URL;
console.log('This is the base url', baseURL);

export const getUser = async () => {
  try {
    console.log('bola', baseURL);
    axios
      .get(`${baseURL}/user`, {timeout: 10000})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    console.log('bola', baseURL);
    axios
      .get(`${baseURL}/user/${id}`, {timeout: 10000})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (reqBody:any) => {
  try {
    console.log('reqBody',reqBody);
    const response = await axios.post(`${baseURL}/user/login`,reqBody);
    return response.data;
  } catch (error) {
    console.log('key',error)
    throw error;
  }
};

export const addUser = async ({username, firstname, lastname, password}) => {
  console.log('adduser', username, firstname, lastname, password);
  axios
    .post(`${baseURL}/user`)
    .then(response => {
      console.log('signup', response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error', error);
    });
};
