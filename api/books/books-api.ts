import { COMMON_API } from "../common-api"
import { BookDto, BookPostDto } from "./book-types"

class BooksClientApi {
    readonly COMMON_BOOKS_API = `${COMMON_API}/books`
    
    async getAll(): Promise<BookDto[]> {
        const response = await fetch(`${this.COMMON_BOOKS_API}`)
        return response.json()
    }

    async getCurrent(id: string): Promise<BookDto> {
        const response = await fetch(`${this.COMMON_BOOKS_API}/${id}`)
        return response.json()
    }

    async post({image, title, author, price, description, year}: BookPostDto): Promise<Response> {
        const body = new FormData()
        body.append('image', image)
        body.append('title', title)
        body.append('author', author)
        body.append('price', price)
        body.append('description', description)
        body.append('year', year)
        const response = await fetch(`${this.COMMON_BOOKS_API}`, {
            method: 'POST',
            body
        })
        return response
    }

    async delete(id: string): Promise<BookDto> {
        const response = await fetch(`${this.COMMON_BOOKS_API}/${id}`, {
            method: 'DELETE'
        })
        return response.json()
    }
}

export const booksClientApi = new BooksClientApi()