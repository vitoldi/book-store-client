import { NextPage } from 'next'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { BookDto } from '../../api/books/book-types'
import { booksClientApi } from '../../api/books/books-api'
import { COMMON_API } from '../../api/common-api'
import classes from './book-large-card.module.scss'

interface Props {
    book: BookDto
}

export const BookLargeCard: NextPage<Props> = ({book}) => {
    return (
        <Card className={classes.bookLargeCard}>
            <div>
                <Image src={`${COMMON_API}${book.image.slice(5)}`} alt='' width={'150px'} height={'220px'} />
            </div>
            <div className={classes.bookLargeCard__text}>
                <div className={classes.bookLargeCard__text_title}>{book.title}</div>
                <div>Author: {book.author}</div>
                <div>Year: {book.year}</div>
                <div>Price: {book.price}</div>
                <div>Description: {book.description}</div>
            </div>
        </Card>
    )
}