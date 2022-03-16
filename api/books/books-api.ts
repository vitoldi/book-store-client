import { BookDto } from "./book-types"

class BooksClientApi {
    readonly COMMON_API = 'http://localhost:8000'
    
    async getAllBooks(): Promise<BookDto[]> {
        const response = await fetch(`${this.COMMON_API}/books`)
        return response.json()
    }

    async getCurrentBook(id: string): Promise<BookDto> {
        const response = await fetch(`${this.COMMON_API}/books/${id}`)
        return response.json()
    }
}

export const booksClientApi = new BooksClientApi()