import axios from 'axios'
import { setupInterceptorsTo } from './interceptors'

const baseURL = '/api'

export default setupInterceptorsTo(axios.create({ baseURL }))
