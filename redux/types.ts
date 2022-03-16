import { BookDto } from "../api/books/book-types";

export interface BooksState {
    value: Array<BookDto>
    status: 'idle' | 'loading' | 'failed'
}

export interface CurrentBookState {
    value: BookDto | null
    status: 'idle' | 'loading' | 'failed'
}

export interface State {
    books: BooksState
    currentBook: CurrentBookState
}