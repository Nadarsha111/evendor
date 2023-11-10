// rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "./cartControl";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer, // Add authSlice to the root reducer
});

export default rootReducer;
