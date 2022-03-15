import { BookDto } from "./book-types"

export const COMMON_API = 'http://localhost:8000'

export const getAllBooksApi = async (): Promise<BookDto[]> => {
    const response = await fetch(`${COMMON_API}/books`)
    return response.json()
}