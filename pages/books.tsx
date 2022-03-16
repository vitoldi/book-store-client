import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Spinner } from 'react-bootstrap'
import { BookSmallCard } from '../components/book-small-card/book-small-card'
import { Path } from '../core/path'
import { fetchBooks } from '../redux/books-reducer'
import { wrapper } from '../redux/store'
import { BooksState } from '../redux/types'
import classes from '../styles/page-styles/books.module.scss'

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchBooks())
  return {props: {state: store.getState().books}}
})

interface Props {
  state: BooksState
}

const BooksPage: NextPage<Props> = ({state}) => {
  if (state.status === 'failed') {
    return null
  }
  
  return (
    <>
      {state.status === 'loading' &&
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
      <Head>
        <title>Books store | Books</title>
      </Head>
      <Container className={classes.booksPage__cardContainer}>
        {
          state.value.map((book) => {
            return (
              <div key={book._id}>
                <Link href={`${Path.BOOKS}/${book._id}`} passHref>
                  <a><BookSmallCard book={book} /></a>
                </Link>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}

export default BooksPage
