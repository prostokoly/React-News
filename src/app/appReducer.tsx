import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../store/slices/newsSlice";
import { newsApi } from "../store/services/newsApi";

export const rootReducer = combineReducers({
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
});
