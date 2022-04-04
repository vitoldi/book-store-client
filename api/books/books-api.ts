import { COMMON_API } from "../common-api"
import { ApiList, SearchParams } from "../types/common-api-types"
import { BookDto, BookPostDto } from "./book-types"

class BooksClientApi {
    readonly COMMON_BOOKS_API = `${COMMON_API}/books`
    
    async getAll(searchParams: SearchParams): Promise<ApiList<BookDto>> {
        const body = JSON.stringify(searchParams)
        const headers = new Headers()
        headers.append('Content-Type', 'application/json; charset=utf-8')
        const response = await fetch(`${this.COMMON_BOOKS_API}/search`, {
            headers,
            method: 'POST',
            body
        })
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
        console.log(body)
        await fetch(`${this.COMMON_BOOKS_API}/add`, {
            method: 'POST',
            body
        })
    }

    async delete(id: string) {
        await fetch(`${this.COMMON_BOOKS_API}/${id}`, {
            method: 'DELETE'
        })
    }
}

export const booksClientApi = new BooksClientApi()