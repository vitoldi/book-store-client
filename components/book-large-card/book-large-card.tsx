import { NextPage } from 'next'
import Image from 'next/image'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { BookDto } from '../../api/books/book-types'
import { COMMON_API } from '../../api/common-api'
import { deleteCurrentBook } from '../../redux/current-book-reducer'
import classes from './book-large-card.module.scss'

interface Props {
    book: BookDto
}

export const BookLargeCard: NextPage<Props> = ({book}) => {
    const dispatch = useDispatch()
    return (
        <Card className={classes.bookLargeCard}>
            <div className={classes.bookLargeCard__content}>
                <div>
                    <Image src={`${COMMON_API}/${book.image}`} alt='' width={'150px'} height={'220px'} />
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
                    dispatch(deleteCurrentBook(book._id))
                    }}>
                        Delete
                </Button>
            </div>
        </Card>
    )
}