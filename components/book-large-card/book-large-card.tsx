import { NextPage } from 'next'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { BookDto } from '../../api/books/book-types'
import { booksClientApi } from '../../api/books/books-api'
import classes from './book-large-card.module.scss'

interface Props {
    book: BookDto
}

export const BookLargeCard: NextPage<Props> = ({book}) => {
    return (
        <Card>
            <div>
                <Image src={`${booksClientApi.COMMON_API}${book.image.slice(5)}`} alt='' width={'70px'} height={'100px'} />
            </div>
            <div>{book.title}</div>
            <div>{book.price}</div>
            <div>{book.year}</div>
            <div>{book.description}</div>
            <div>{book.author}</div>
        </Card>
    )
}