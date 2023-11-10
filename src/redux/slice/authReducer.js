import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { jwt, user } = action.payload;
      // Object.assign(state.user, decoded);
      state.user.decoded = jwt_decode(jwt);
      state.user.jwt = jwt;
      state.user.data = user;
    },
    clearToken: (state) => {
      state.user = {};
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;

// console.log(data[0].attributes.img.data.attributes.url);

// const {
//   data: pic,
//   isLoading,
//   isError,
// } = useQuery(["home"], () =>
//   axios
//     .get(`https://picsum.photos/v2/list?&limit=12`)
//     .then((response) => response.data)
// );

// if (isError) {
//   return <div>Something went wrong</div>;
// }
