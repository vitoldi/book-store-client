import { BookDto, BookPostDto } from "./book-types"

class BooksClientApi {
    readonly COMMON_BOOKS_API = 'http://localhost:8000/books'
    
    async getAll(): Promise<BookDto[]> {
        const response = await fetch(`${this.COMMON_BOOKS_API}`)
        return response.json()
    }

    async getCurrent(id: string): Promise<BookDto> {
        const response = await fetch(`${this.COMMON_BOOKS_API}/${id}`)
        return response.json()
    }

    async post(book: BookPostDto): Promise<Response> {
        const body = new FormData()
        const response = await fetch(`${this.COMMON_BOOKS_API}`, {
            method: 'POST',
            body: JSON.stringify(book)
        })
        console.log(response)
        return response
    }
}

export const booksClientApi = new BooksClientApi()