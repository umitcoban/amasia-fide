// services/api.ts
import axios from 'axios';

const PROD_URL = "http://89.252.153.188:8080/api";
const LOCAL_URL = "http://localhost:8080/api";


export const api = axios.create({
  baseURL: LOCAL_URL
});
