'use client'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register} from "@/features/auth/authSlice"

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const dispatch = useDispatch();
  const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)
  const {name, email, password, password2} = form

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(password !== password2){
      toast.error('Password does not match')
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
          Register 
        </h1>
        <h3>
          Please register to login
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
          id="name" 
          name="name" 
          type="text" 
          value={name} 
          required
          onChange={onChange} 
          placeholder='your name' 
          />
          <input 
          id="email" 
          name="email" 
          type="email" 
          value={email} 
          required
          onChange={onChange} 
          placeholder='your email' 
          />
          <input 
          id="password" 
          name="password"
          type="password" 
          value={password} 
          required
          onChange={onChange} 
          placeholder='your password' 
          />
          <input 
          id="password" 
          name="password2"
          type="password" 
          value={password2} 
          required
          onChange={onChange} 
          placeholder='your password again' 
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
