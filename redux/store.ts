import { configureStore, Store } from "@reduxjs/toolkit";
import {createWrapper, Context } from 'next-redux-wrapper';
import { useDispatch } from "react-redux";
import { booksSlice } from "./books-reducer";
import { State } from "./types";

const makeStore = (context: Context) => configureStore({
  reducer: {books: booksSlice.reducer}
})

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true})