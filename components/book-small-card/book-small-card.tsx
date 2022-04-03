import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { BookDto } from '../../api/books/book-types'
import { COMMON_API } from '../../api/common-api'
import { Path } from '../../core/path'
import classes from './book-small-card.module.scss'

interface Props {
    book: BookDto
}

export const BookSmallCard: NextPage<Props>  = ({book}) => {
    return (
        <Card className={classes.bookSmallCard}>
            <Link href={`${Path.BOOKS}/${book._id}`} passHref>
                <a>
                    <div className={classes.bookSmallCard__title}>{book.title}</div>
                    <div>
                        <Image src={`${COMMON_API}/${book.image}`} alt='' width={'70px'} height={'100px'} />
                    </div>
                    <div className={classes.bookSmallCard__textContainer}>
                        <div>Author: {book.author}</div>
                        <div>Year: {book.year}</div>
                        <div>Price: {book.price}</div>
                    </div>
                </a>
            </Link>
        </Card>
    )
}