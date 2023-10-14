import axios from 'axios'
import { UserData } from '@/app/register/page'

const API_URL = '/api/users'

const register = async (userData: UserData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data 
}

const authService = {
    register
}

export default authService