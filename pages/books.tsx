import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BookDto } from '../api/books/book-types'
import { ApiList } from '../api/types/common-api-types'
import { AddBookDialog } from '../components/add-book-dialog/add-book-dialog'
import { BookSmallCard } from '../components/book-small-card/book-small-card'
import { Paginator } from '../components/paginator/paginator'
import { SpinnerContainer } from '../components/spinner/spinner'
import { ToastCommon } from '../components/toast-common/toast-common'
import { BooksSelector, fetchBooks, nullPostStatus, onChangeOffset } from '../redux/books-reducer'
import { wrapper } from '../redux/store'
import classes from '../styles/page-styles/books.module.scss'

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const {offset, limit} = store.getState().books
  await store.dispatch(fetchBooks({offset, limit}))
  const value = store.getState().books.value
  return {props: {value}}
})

interface Props {
  value: ApiList<BookDto>
}

const BooksPage: NextPage<Props> = ({value}) => {
  const state = useSelector(BooksSelector)
  const dispatch = useDispatch()
  const [isDialogVisible, setDialogVisible] = useState(false)
  const removePostStatus = () => dispatch(nullPostStatus())
  const books = state.value || value

  useEffect(() => {
    if (state.postStatus === 'idle') {
      return () => {
        dispatch(nullPostStatus())
      }
    }
  }, [state.postStatus, dispatch])

  if (!value) {
    return null
  }

  console.log(state.offset)

  return (
    <>
      <Head>
        <title>Books store | Books</title>
      </Head>
      <SpinnerContainer isVisible={state.status === 'loading'} />
      {state.postStatus === 'idle' && <ToastCommon text={'Book added successfully'} background={'success'} removeTrigger={removePostStatus}/>}
      {state.postStatus === 'failed' && <ToastCommon text={'Http request error'} background={'danger'} removeTrigger={removePostStatus}/>}
      <Container>
        <div className={classes.booksPage__wrapper}>
          <div className={classes.booksPage__addButton}><Button variant={'secondary'} onClick={() => setDialogVisible(true)} >+ Add book</Button></div>
          <div className={classes.booksPage__total}><span>{`Total: ${value.total}`}</span></div>
          <div className={classes.booksPage__cards}>
            {
              books.items.map((book) => {
                return (
                  <div key={book._id} className={classes.booksPage__cards_card}>
                      <BookSmallCard book={book} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <Paginator 
          total={books.total} 
          limit={state.limit} 
          offset={state.offset} 
          onChangeOffset={(v: number) => {
            dispatch(onChangeOffset(v))
            dispatch(fetchBooks({offset: state.offset, limit: state.limit}))}}/>
      </Container>
      <AddBookDialog isVisible={isDialogVisible} onChangeVisible={setDialogVisible} />
    </>
  )
}

export default BooksPage