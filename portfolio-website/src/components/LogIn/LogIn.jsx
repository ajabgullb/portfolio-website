import React, { useState } from 'react'
import { Input, Button, Logo } from "../index"
import { Link } from 'react-router-dom'
import { login as authLogin } from "../../store/authSlice"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

export default function LogIn() {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("")

    try {
      const user = await authService.login({data})

      if (user) {
        dispatch(authLogin(user))
        navigate("/")
      } 
    } catch (error) {
      setError(error.message)
      console.error("Login Failed!", error)
    }
  }

  return (
    <div>
      <div className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px]'>
          <Logo width='100%' />
        </span>
      </div>

      <h2 className='text-center text-2xl font-bold leading-tight'>Login to your Account</h2>

      <p className='mt-2 text-center text-base text-gray-500'>
        Don't have an account?&nbsp;
        <Link
          to="/signup"
          className='font-medium text-primary tansition-all duration-200 hover:underline'
        >Sign Up</Link>
      </p>

      <form onSubmit={handleSubmit(login)}
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
    </div>
  )
}

