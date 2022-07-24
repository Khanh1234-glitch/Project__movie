import { LstCumRap } from './../interface/lstCumRap';
import { AxiosError } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import manamentCinemaAPI from '../services/manamentCineAPI';

interface lstCumRap {
  data: LstCumRap[];
  isLoading: boolean;
  error: string;
}
const initialState: lstCumRap = {
  data: [],
  isLoading: false,
  error: "",
};

export const lstCumRap = createAsyncThunk(
  "lstCumRap/getlstCumRap",
  async () => {
    try {
      const data = await manamentCinemaAPI.getlstCumRap();
      return data;
    } catch (error) {
      const err = (error as AxiosError).response?.data as any;
      throw err.content;
    }
  }
);

export const createLstCumRapSlice = createSlice({
  name: "lstCumRap",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(lstCumRap.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(lstCumRap.fulfilled, (state,action)=>{
        return {...state,isLoading:false,data:action.payload}
    })
    builder.addCase(lstCumRap.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default createLstCumRapSlice.reducer;
