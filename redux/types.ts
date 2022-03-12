import { BookDto } from "../api/books/book-types";

export interface BooksState {
    value: Array<BookDto>
    status: 'idle' | 'loading' | 'failed'
    error: unknown
}

export interface State {
    books: BooksState
}