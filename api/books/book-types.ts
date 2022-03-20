export interface BookDto {
    _id: string
    image: string
    title: string
    price: string
    year: string
    description: string
    author: string
  }

export interface BookPostDto extends Omit<BookDto, '_id' | 'image'> { image: File | null}