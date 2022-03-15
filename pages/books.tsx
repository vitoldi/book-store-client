import Head from 'next/head'
import { Button } from 'react-bootstrap'
import { fetchBooks } from '../redux/books-reducer'
import { wrapper } from '../redux/store'
import { BooksState } from '../redux/types'

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchBooks())
  return {props: {state: store.getState().books}}
})

interface Props {
  state: BooksState
}

const BooksPage: React.FC<Props> = ({state}) => {
  console.log(state.status)
  return (
    <>
      <Head>
        <title>Books store | Books</title>
      </Head>
        <div>
          {JSON.stringify(state.value)}
        </div>
    </>
  )
}

export default BooksPage
