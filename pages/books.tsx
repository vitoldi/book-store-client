import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { AddBookDialog } from '../components/add-book-dialog/add-book-dialog'
import { BookSmallCard } from '../components/book-small-card/book-small-card'
import { SpinnerContainer } from '../components/spinner/spinner'
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
  const [isDialogVisible, setDialogVisible] = useState(false)

  if (state.status === 'failed') {
    return null
  }
  
  return (
    <>
      <Head>
        <title>Books store | Books</title>
      </Head>
      <SpinnerContainer isVisible={state.status === 'loading'} />
      <Container>
        <div className={classes.booksPage__wrapper}>
          <Button variant={'secondary'} onClick={() => setDialogVisible(true)} >+ Add book</Button>
          <div className={classes.booksPage__cards}>
            {
              state.value.map((book) => {
                return (
                  <div key={book._id} className={classes.booksPage__cards_card}>
                      <BookSmallCard book={book} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
      <AddBookDialog isVisible={isDialogVisible} onChangeVisible={setDialogVisible} />
    </>
  )
}

export default BooksPage
