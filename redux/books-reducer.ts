import { BookDto } from "../api/books/book-types"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllBooksApi } from "../api/books/books-api"
import { BooksState } from "./types"

const initialState: BooksState = {
    value: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('books/fetchBooks', async () => await getAllBooksApi())

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})