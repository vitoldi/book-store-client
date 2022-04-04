import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {createWrapper } from 'next-redux-wrapper';
import { useSelector } from "react-redux";
import { booksSlice } from "./books-reducer";
import { currentBookSlice } from "./current-book-reducer";
import { State } from "./types";

const combineReducer = combineReducers({
  books: booksSlice.reducer,
  currentBook: currentBookSlice.reducer
})

export const makeStore = () => configureStore({
  reducer: combineReducer
})

export const wrapper = createWrapper(makeStore, {debug: true})