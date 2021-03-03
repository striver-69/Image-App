import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID RmjthGYLzZ2uuSourT4mD6KVvxnxIj3tI0_qT8Kxiic'
  }
})