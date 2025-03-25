import React, { useState } from 'react'
import { Input, Button } from "../index"
import { login as authLogin } from "../../store/authSlice"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../../supabase/supabaseAuth'

export default function LogIn() {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const login = async () => {
    setError("")

    try {
      const user = await authService.getCurrentUser()

      if (user) dispatch(authLogin(user))
      navigate("/")
    } catch (error) {
      console.error("Login Failed!", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(authLogin)}
      className='w-1/4 flex flex-col gap-5 mx-auto my-14 border-black border-[2px] rounded-lg'
    >
      {/* Email Input */}
      <Input 
        label="Email: "
        type="email"
        {...register("Email", {
          required: true,
          validate: {
            matchPattern: (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || "Email Address must be a Vaid Address!"
          }
        })}
        placeholder="Enter your Email..."
      />

      {/* Password Input */}
      <Input 
        label="Password: "
        type="password"
        {...register("Password", {required: true})}
        placeholder="Enter your Password..."
      />

      {/* Submit Button */}
      <Button
        type='submit'
        onClick={login}
      >Submit</Button>

      {error && <div className='text-red-600'>{error}</div>}
    </form>
  )
}

