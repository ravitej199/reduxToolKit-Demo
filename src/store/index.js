import { configureStore } from "@reduxjs/toolkit";
import amountSlices from "./slices/AmountSlice";

const store = configureStore({
    reducer:{
        amount: amountSlices,
    },
});

export default store;