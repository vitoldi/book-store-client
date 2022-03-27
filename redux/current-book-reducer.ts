import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { booksClientApi } from "../api/books/books-api"
import { CurrentBookState } from './types'

const initialState: CurrentBookState = {
    value: null,
    status: 'idle'
}

export const fetchCurrentBook = createAsyncThunk('currentBook/fetchCurrentBook', async (id: string) => {
  return await booksClientApi.getCurrent(id)
})

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    removeCurrentBookValue: (state) => {
      state.value = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCurrentBook.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(fetchCurrentBook.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const {removeCurrentBookValue} = currentBookSlice.actions