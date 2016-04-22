import {FETCH_USERS} from './types';
import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
  //console.log(request);
  return {
    type: FETCH_USERS,
    payload: request
  };
}
