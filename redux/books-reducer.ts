import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllBooksApi } from "../api/books/books-api"
import { BooksState } from "./types"

const initialState: BooksState = {
    value: [],
    status: 'idle'
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => await getAllBooksApi())

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
})