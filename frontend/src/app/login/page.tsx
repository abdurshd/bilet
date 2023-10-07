
'use client'
import {useState} from 'react'
import {toast} from 'react-toastify'
import { login } from '@/redux/features/auth/authSlice'
import { useAppDispatch } from '@/redux/store'
import { UserData } from '@/app/register/page'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const dispatch = useAppDispatch();

  const {email, password} = form

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userData: UserData = {
      email,
      password
    }

    dispatch(login(userData))
  }
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState)=> ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1>
          Login 
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
          id="email" 
          name="email" 
          type="email" 
          value={email} 
          required
          onChange={onChange} 
          placeholder='your email' 
          className='p-3 m-4 flex rounded-lg bg-gray-300 text-emerald-700'
          />
          <input 
          id="password" 
          name="password"
          type="password" 
          value={password} 
          required
          onChange={onChange} 
          placeholder='your password' 
          className='p-3 m-4 flex rounded-lg bg-gray-300 text-emerald-700'
          />
          <button className='border-l-emerald-400 bg-green-600 p-2 m-2 ml-36 rounded-xl'>Login</button>
        </form>
      </div>
    </div>
  )
}
