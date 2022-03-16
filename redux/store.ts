import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import {createWrapper } from 'next-redux-wrapper';
import { DefaultRootState } from "react-redux";
import { booksSlice } from "./books-reducer";
import { currentBookSlice } from "./current-book-reducer";

const combineReducer = combineReducers({
  books: booksSlice.reducer,
  currentBook: currentBookSlice.reducer
})

const makeStore = () => configureStore({
  reducer: combineReducer
})

export const wrapper = createWrapper(makeStore, {debug: true})

export type NextThunkDispatch = ThunkDispatch<DefaultRootState, void, AnyAction>