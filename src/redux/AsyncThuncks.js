import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const fetchHouses = createAsyncThunk("main/fetchHouses", async () => {
  const response = await Api.getHouses();
  return response.data;
});

export const deleteHouse = createAsyncThunk("main/deleteHouse", async (id) => {
  const res = await Api.deleteHouse(id);
  return res;
});

export const createHouse = createAsyncThunk(
  "main/createHouse",
  async (data) => {
    const res = await Api.createHouse(data);
    return res;
  }
);
