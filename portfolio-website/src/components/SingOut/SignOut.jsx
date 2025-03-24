import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function SignOut() {
  const {register} = useForm()
  const navigate = useNavigate()

  return (
    <div>SignOut</div>
  )
}

