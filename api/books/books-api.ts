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

    async post({image, title, author, price, description, year}: BookPostDto) {
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
    }

    async delete(id: string) {
        const response = await fetch(`${this.COMMON_BOOKS_API}/${id}`, {
            method: 'DELETE'
        })
    }
}

export const booksClientApi = new BooksClientApi()