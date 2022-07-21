import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from '../services/movieAPI';
import { ListSystemCinema } from './../interface/getListSysTemCinema';
interface ListSystem {
    data:ListSystemCinema[],
    isLoading:boolean,
    error:string,
}

const initialState : ListSystem ={
    data:[],
    isLoading:false,
    error:"",
}

export const createListSysTem = createAsyncThunk(
    "infoSystem/getListSystem",
   async () => {
    try {
        const data= await movieAPI.getListSystem();
        return data
    } catch (error) {
        const err = (error as AxiosError).response?.data as any;
        throw err.content;
    }
   }
)

export const createListSystemSlice=createSlice({
    name:"infoSystem",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(createListSysTem.pending,(state)=>{
            return {...state, isLoading:true}
        })
        builder.addCase(createListSysTem.fulfilled,(state,{payload})=>{
            return {...state, data:payload}
        })
        builder.addCase(createListSysTem.rejected,(state,{error})=>{
            return {...state, error:error.message as string}
        })
    },
})
export default createListSystemSlice.reducer;