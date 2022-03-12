import { BookDto } from "./book-types"

export const getAllBooksApi = async () => {
    const response = await fetch('http://localhost:8000/books')
    const books: Array<BookDto> = await response.json()
    return books
}