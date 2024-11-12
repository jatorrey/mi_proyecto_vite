import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../slices/ordersSlice";

const store = configureStore({
    reducer: {
        ordersReducer: ordersSlice,
    },
});

export default store;