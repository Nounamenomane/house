import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createHouse, deleteHouse, fetchHouses } from "./AsyncThuncks";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    house: [],
    loading: true,
    CreateHouseStatus: "idle",
  },
  reducers: {
    setCreateHouseStatus: (state) => {
      state.CreateHouseStatus = "idle";
    },
  },
  extraReducers: (buider) => {
    buider.addCase(fetchHouses.fulfilled, (state, action) => {
      state.house = action.payload;
      state.loading = false;
    });
    buider.addCase(deleteHouse.fulfilled, (state, action) => {
      state.house = state.house.filter(
        (item) => item.id !== action.payload.data.id
      );
    });
    buider.addCase(createHouse.pending, (state) => {
      state.setCreateHouse = "loading";
    });
    buider.addCase(createHouse.fulfilled, (state, action) => {
      state.house.push(action.payload.data);
      state.setCreateHouse = "succes";
    });
    buider.addCase(createHouse.rejected, (state) => {
      state.setCreateHouse = "error";
    });
  },
});

export const { incremented, decremented, setCreateHouseStatus } =
  counterSlice.actions;
