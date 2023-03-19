import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTE5Y2VkNjlmNmJiMDc3NzVmZGZmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTA3NDMzMiwiZXhwIjoxNjc5MzMzNTMyfQ.DTtsqGwKfuf9ejJzQfheOdPzMrlJpKp0PO2P69HOTvg'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: 'Bearer ' + token }
})
