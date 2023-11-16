import { configureStore } from "@reduxjs/toolkit";
import hotelsInCartReducer from "./hotels";

export default configureStore({
  reducer: { hotelsInCart: hotelsInCartReducer },
});