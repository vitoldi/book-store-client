import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { booksClientApi } from "../api/books/books-api"
import { CurrentBookState } from './types'

const initialState: CurrentBookState = {
    value: null,
    status: 'idle',
    deleteStatus: null
}

export const fetchCurrentBook = createAsyncThunk('currentBook/fetchCurrentBook', async (id: string) => {
  return await booksClientApi.getCurrent(id)
})

export const deleteCurrentBook = createAsyncThunk('currentBook/deleteCurrentBook', async (id: string) => {
  return await booksClientApi.delete(id)
})

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    removeCurrentBookValue: (state) => {
      state.value = null
    },
    nullDeleteStatus: (state) => {
      state.deleteStatus = null
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
      .addCase(deleteCurrentBook.pending, (state) => {
        state.deleteStatus = 'loading'
      })
      .addCase(deleteCurrentBook.fulfilled, (state) => {
        state.deleteStatus = 'idle'
      })
      .addCase(deleteCurrentBook.rejected, (state) => {
        state.deleteStatus = 'failed'
      })
  },
})

export const {removeCurrentBookValue, nullDeleteStatus} = currentBookSlice.actions