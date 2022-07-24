import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser } from "../interface/auth";
import authAPI from "../services/authAPI";

interface AuthState {
  // user login infomation
  currentUser: currentUser;
  isLoading: boolean;
  error?: string;
}

const initialState:AuthState = {
    currentUser:{} as currentUser,
    isLoading:false,
    error:"",
};
// thunk action
export const login = createAsyncThunk(
  "auth/login",
 async (values:any) => {
  try {
    const data = await authAPI.login(values);
    return data
  } catch (error) {
      throw error;
  }
 }
)
const authSlice= createSlice({
  name:"auth",
  initialState,
  reducers:{},
  extraReducers:(builder)=> {
    builder.addCase(login.pending,(state)=>{
      return {...state, isLoading:true, error:""}
    })
    builder.addCase(login.fulfilled,(state, {payload})=>{
      return {...state, isLoading:false,currentUser:payload }
    })
    builder.addCase(login.rejected,(state, {error})=>{
      return {...state, isLoading:false,error:error.message }
    })
  },
})

export default authSlice.reducer;