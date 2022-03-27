import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Card } from 'react-bootstrap'
import { BookDto } from '../../api/books/book-types'
import { booksClientApi } from '../../api/books/books-api'
import { Path } from '../../core/path'
import classes from './book-large-card.module.scss'

interface Props {
    book: BookDto
}

export const BookLargeCard: NextPage<Props> = ({book}) => {
    const router = useRouter()
    return (
        <Card className={classes.bookLargeCard}>
            <div className={classes.bookLargeCard__content}>
                <div>
                    {/* <Image src={`${COMMON_API}${book.image.slice(5)}`} alt='' width={'150px'} height={'220px'} /> */}
                </div>
                <div className={classes.bookLargeCard__content__text}>
                    <div className={classes.bookLargeCard__content__text_title}>{book.title}</div>
                    <div>Author: {book.author}</div>
                    <div>Year: {book.year}</div>
                    <div>Price: {book.price}</div>
                    <div>Description: {book.description}</div>
                </div>
            </div>
            <div className={classes.removeButton}>
                <Button variant='danger' onClick={() => {
                    booksClientApi.delete(book._id)
                    router.push(Path.BOOKS)
                    }}>Remove</Button>
            </div>
        </Card>
    )
}