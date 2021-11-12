import { createSlice } from '@reduxjs/toolkit';

// const  initialState = {
//   launches: [],
//   isAscending: true,
//   activeYear: '',

// }

const initialState = []

const launchesSlice = createSlice ({
  name:"launches",
  initialState,
  reducer:{}
 })

export const launchCount = state => state.launches.value;

export const {increment, decrement, incrementByAmount} = launchesSlice.actions;

export default launchesSlice.reducer;