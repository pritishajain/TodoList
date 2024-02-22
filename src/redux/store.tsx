import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/combine-reducers";

const store = configureStore({
  reducer: rootReducer
});

export default store;
