import { AnyAction, combineReducers, configureStore, Store, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import {createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { DefaultRootState, RootStateOrAny, useDispatch } from "react-redux";
import { booksSlice } from "./books-reducer";
import { State } from "./types";

const combineReducer = combineReducers({
  books: booksSlice.reducer
})

const makeStore = () => configureStore({
  reducer: combineReducer
})

export const wrapper = createWrapper(makeStore, {debug: true})

export type AppStore = ReturnType<typeof makeStore>

export type NextThunkDispatch = ThunkDispatch<DefaultRootState, void, AnyAction>