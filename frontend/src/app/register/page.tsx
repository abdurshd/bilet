'use client'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {register} from "@/redux/features/auth/authSlice"
import { useAppSelector, useAppDispatch } from '@/redux/store'

export type UserData = {
  name?: string;
  email: string;
  password: string;
}

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const dispatch = useAppDispatch();
  const {user, isLoading, isSuccess, message} = useAppSelector(state => state.auth)
  const {name, email, password, password2} = form

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(password !== password2){
      toast.error('Password does not match')
    } else {
      const userData: UserData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
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
          Register {user}
        </h1>
        <h3>
          Please register to login
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit} >
          <input 
          id="name" 
          name="name" 
          type="text" 
          value={name} 
          required
          onChange={onChange} 
          placeholder='your name' 
          className='p-3 m-4 flex rounded-lg bg-gray-300  text-emerald-600'
          />
          <input 
          id="email" 
          name="email" 
          type="email" 
          value={email} 
          required
          onChange={onChange} 
          placeholder='your email' 
          className='p-3 m-4 flex rounded-lg bg-gray-300 text-emerald-600'
          />
          <input 
          id="password" 
          name="password"
          type="password" 
          value={password} 
          required
          onChange={onChange} 
          placeholder='your password' 
          className='p-3 m-4 flex rounded-lg bg-gray-300 text-emerald-600'
          />
          <input 
          id="password2" 
          name="password2"
          type="password" 
          value={password2} 
          required
          onChange={onChange} 
          placeholder='your password again' 
          className='p-3 m-4 flex rounded-lg bg-gray-300 text-emerald-600'
          />
          <button className='border-l-emerald-400 bg-green-600 p-2 m-2 ml-36 rounded-xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}
