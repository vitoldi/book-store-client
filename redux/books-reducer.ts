import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookPostDto } from '../api/books/book-types'
import { booksClientApi } from "../api/books/books-api"
import { BooksState } from "./types"

const initialState: BooksState = {
    value: [],
    status: 'idle',
    postStatus: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => await booksClientApi.getAll())

export const postBook = createAsyncThunk('books/postBooks', async (book: BookPostDto) => await booksClientApi.post(book))

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    nullPostStatus: (state) => {
      state.postStatus = null
    }
  },
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
      .addCase(postBook.pending, (state) => {
        state.postStatus = 'loading'
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.postStatus = 'idle'
      })
      .addCase(postBook.rejected, (state) => {
        state.postStatus = 'failed'
      })
  },
})

export const {nullPostStatus} = booksSlice.actions