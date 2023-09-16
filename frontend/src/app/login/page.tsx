'use client'
import {useState} from 'react'
import {toast} from 'react-toastify'

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {email, password} = form

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
