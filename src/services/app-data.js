import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dev.rams.emergobyul.com/services',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxMzI4LCJhY2NvdW50X2lkIjozMDM3LCJyb2xlX2lkIjoxLCJjb21wYW55X25hbWUiOiJGaXNzaW9uIiwic3ViIjoiYWtoaWxhLnNhdHRhcmFwdStuZXdAZmlzc2lvbmxhYnMuaW4iLCJuYW1lIjoiQWtoaWxhUyBTViBqZ2hqZyIsInJvbGVzIjoiQWNjb3VudCBvd25lciIsImlhdCI6MTY0MjU5MzQ4NSwiZXhwIjoxNjQyNTk1Mjg1LCJlbWFpbCI6ImFraGlsYS5zYXR0YXJhcHUrbmV3QGZpc3Npb25sYWJzLmluIn0.ofZJwlcph7RmYoQQOYGTvMrKrGgffrkNGAVQMhfcn2XZd_jQNjmYLHCcpZr8NJjnPnURAe7MyowL9hzJAoYxzw'
  }
})

export default {
  async getHeadlines() {
    return await apiClient.get('/dashboard/headlines').then(response => {
        console.log(response.data)
        return response.data;})
  }
}