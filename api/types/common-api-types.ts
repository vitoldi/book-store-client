export interface ApiList<T> {
    items: T[]
    total: number
}

export interface SearchParams {
    limit: number
    offset: number
}