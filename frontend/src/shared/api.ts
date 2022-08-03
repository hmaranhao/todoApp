import axios from 'axios'

console.log({ env: import.meta.env.VITE_API_SERVER })

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER
})