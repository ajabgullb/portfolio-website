import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  userData: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login (state, action) {
      state.authStatus = true
      state.userData = action.payload.userData
    },
    logout (state) {
      state.authStatus = false
    },
  }
})

export {login, logout} from authSlice.reducer
export default authSlice