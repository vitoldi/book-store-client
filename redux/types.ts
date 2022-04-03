import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";
import { BookDto } from "../api/books/book-types";

export interface BooksState {
    value: Array<BookDto>
    status: 'idle' | 'loading' | 'failed'
    postStatus: 'idle' | 'loading' | 'failed' | null
}

export interface CurrentBookState {
    value: BookDto | null
    status: 'idle' | 'loading' | 'failed'
    deleteStatus: 'idle' | 'loading' | 'failed' | null
}

export interface State {
    books: BooksState
    currentBook: CurrentBookState
}

export type NextThunkDispatch = ThunkDispatch<DefaultRootState, void, AnyAction>