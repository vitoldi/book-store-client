import { NextPage } from 'next'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { BookDto } from '../../api/books/book-types'
import { booksClientApi } from '../../api/books/books-api'
import classes from './book-small-card.module.scss'

interface Props {
    book: BookDto
}

export const BookSmallCard: NextPage<Props>  = ({book}) => {
    return (
        <Card className={classes.bookSmallCard}>
            <div className={classes.bookSmallCard__textContainer_title}>{book.title}</div>
            <div>
                <Image src={`${booksClientApi.COMMON_API}${book.image.slice(5)}`} alt='' width={'70px'} height={'100px'} />
            </div>
            <div className={classes.bookSmallCard__textContainer}>
                <div>Author: {book.author}</div>
                <div>Year: {book.year}</div>
                <div>Price: {book.price}</div>
            </div>
        </Card>
    )
}