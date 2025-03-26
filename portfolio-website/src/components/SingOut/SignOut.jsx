import React from 'react'
import { Button } from "../index"
import { logout as authLogout } from "../../store/authSlice"
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

export default function SignOut() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const logout = async () => {
    setError("")

    try {
      const res = await authService.logout()
      if (res) dispatch(authLogout(res))

      navigate("/")
    } catch (error) {
      setError(error.message)
      console.error("Logout Failed!", error)
    }
  }

  return (
    <div>
      {/* Logout Button */}
      <Button
        type='submit'
        onClick={logout}
      >Logout
      </Button>

      {error && <div className='text-red-600'>{error}</div>}
    </div>
  )
}

