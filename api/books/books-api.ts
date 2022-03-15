import { BookDto } from "./book-types"

export const getAllBooksApi = async (): Promise<BookDto[]> => {
    const response = await fetch('http://localhost:8000/books')
    return response.json()
}