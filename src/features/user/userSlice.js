import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAddress} from "../../services/apiGeocoding";

const initialState = {
  username: "laurence m",
  status: "idle",
  position: {},
  address: "",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
        state.error = null; // Clear any previous error
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was an problem getting this field, make sure to fill this field in"; // Use action.error.message without quotes
      });
  },
});


function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  return { position, address };
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
export const getUsername = (state) => state.user.username;


